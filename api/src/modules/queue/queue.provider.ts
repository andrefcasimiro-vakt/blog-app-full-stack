import { OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator'
import amqp, { AmqpConnectionManager, ChannelWrapper } from 'amqp-connection-manager'
import { Message } from 'amqplib'
import { path } from 'ramda'

import config from '../config/config.main'
import { Logger } from '../logger/logger.provider'

const CHANNEL_PREFETCH = 1

@Injectable()
export class QueueProvider implements OnModuleInit, OnModuleDestroy {
	private _amqp
	private _conn: AmqpConnectionManager
	private _channel: ChannelWrapper
	private _messageHandler
	private readonly _logger = new Logger()

	onModuleInit() {
		this.initialize()
	}

	async initialize() {
		this._amqp = amqp
		this._conn = await this._amqp.connect([ this.getConnectionString() ])
		this._channel = await this._conn.createChannel()
	}

	getConnectionString(): string {
		if (path([ 'queue', 'host' ], config)) {
			const { user, password, host } = config.queue

			return `amqp://${user}:${password}@${host}`
		}

		return `amqp://localhost`
	}

	defaultMessageHandler(body, metadata) {
		this._logger.info(`Queue ${metadata.routingKey} received a message`)
	}

	consumeQueue(name: string) {
		return this._channel.addSetup((channel) => {
			Promise.all([
				channel.assertQueue(name),
				channel.prefetch(CHANNEL_PREFETCH),
				channel.consume(name, this.handleMessage.bind(this), { noAck: false }),
				this._logger.log(`Listening for messages in: ${name}`),
			])
		})
	}

	setMessageHandler(handler) {
		this._messageHandler = handler
	}

	async handleMessage(message: Message) {
		let body
		const metadata = message.fields
		try {
			body = JSON.parse(message.content.toString('utf-8'))
		} catch (err) {
			console.error({ err }, `Error parsing queue task`)
			this._channel.nack(message, false, false)
		}

		try {
			await this._messageHandler(body, metadata)
			this._channel.ack(message)
		} catch (err) {
			console.error({ err }, `Error handling a queue task`)
			this._channel.nack(message, false, false)
		}
	}

	publishMessage(queue, message: Message) {
		this._channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { deliveryMode: true })

		console.log(`Sending message to queue (${queue}): ${JSON.stringify(message)}`)
	}

	onModuleDestroy() {
		if (this._conn) {
			this._conn.close()
		}

		console.log(`Closed connection to queue`)
	}
}
