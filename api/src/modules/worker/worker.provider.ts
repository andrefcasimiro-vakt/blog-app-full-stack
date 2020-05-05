import { Injectable, OnModuleDestroy } from '@nestjs/common'
import * as shortid from 'shortid'

import config from '../config/config.main'
import EmailProvider from '../email/email.provider'
import { Logger } from '../logger/logger.provider'
import logger from '../logger/logger.winston'
import { queues } from '../queue/queue.config'
import { QueueProvider } from '../queue/queue.provider'
import { workerTasks } from './worker.tasks'
import { WorkerTaskPayload } from './worker.types'

@Injectable()
export class WorkerProvider implements OnModuleDestroy {
	private readonly _logger = new Logger()

	constructor(private readonly _queueProvider: QueueProvider, private readonly _emailProvider: EmailProvider) {
		this.start()

		this.tasks = this.tasks.bind(this)
		this.handleMessage = this.handleMessage.bind(this)
		this.dispatch = this.dispatch.bind(this)
	}

	static fatal(err: Error) {
		process.removeAllListeners(`uncaughtException`)
		process.removeAllListeners(`unhandledRejection`)

		logger.log('error', `Error: ${err.name}, Message: ${err.message}, Stack: ${err.stack}`)
	}

	onModuleDestroy() {
		this.stop()
	}

	async start() {
		process.once(`uncaughtException`, WorkerProvider.fatal)
		process.once(`unhandledRejection`, WorkerProvider.fatal)

		process.once(`SIGINT`, () => this.stop())
		process.once(`SIGTERM`, () => this.stop())

		await this._queueProvider.consumeQueue(queues[0].name)
		this._queueProvider.setMessageHandler(this.handleMessage)

		this._logger.info(`Attaching custom queue message handler`)
		this._logger.info(`==>👷 Worker has started...`)

		return Promise.resolve()
	}

	stop() {
		process.removeAllListeners(`SIGINT`)
		process.removeAllListeners(`SIGTERM`)

		this._logger.info(`==>👷 Stopping worker.`)
		process.exit(0)
	}

	/**
	 * Handler used to receive dispatched worker actions
	 */
	dispatch<T>(taskPayload: WorkerTaskPayload<T>) {
		switch (taskPayload.type) {
			case workerTasks.EMAIL_SEND:
				return this._queueProvider.createTask(taskPayload)
			default:
				return this._queueProvider.createTask(taskPayload)
		}
	}

	tasks(): Record<string, any> {
		return {
			[workerTasks.EMAIL_SEND]: this._emailProvider.send,
		}
	}

	async handleMessage(input: { type: string; payload: any }) {
		const { type, payload } = input

		if (!config.queue.enabled) {
			this._logger.warn(`Ignoring tasks by config`)
		}

		const tasksResolver = this.tasks()[type] as unknown

		if (!tasksResolver || typeof tasksResolver !== 'function') {
			this._logger.error(`Task ${type} has no resolver assigned`)

			throw new Error(`Taksk ${type} has no resolver assigned`)
		}

		const taskId = shortid.generate()
		const startTime = Date.now()
		const taskString = `${type} (${taskId})`
		this._logger.info(`== > ${startTime}::👷 Started executing task ${taskString}...`)

		try {
			await tasksResolver(payload)
		} catch (err) {
			this._logger.error(`Error handling task ${taskString}`)
		}

		this._logger.info(`👊 Done executing task ${taskString}`)
	}
}
