import { Injectable } from '@nestjs/common'
import sendgrid from '@sendgrid/mail'

import config from '../config/config.main'
import { Logger } from '../logger/logger.provider'
import templateBuilder from './email.builder'
import { EmailType } from './email.email-types'
import { getMessage } from './email.utils'

interface EmailPayload {
	type: EmailType
	payload: Record<string, any>
}

@Injectable()
export default class EmailProvider {
	_instance: sendgrid.MailService
	private readonly _logger = new Logger()

	constructor() {
		this.start = this.start.bind(this)
		this.getInstance = this.getInstance.bind(this)
		this.generateContent = this.generateContent.bind(this)
		this.send = this.send.bind(this)

		this.start()
	}

	start() {
		this._instance = sendgrid
		this._instance.setApiKey(config.email.apiKey)
	}

	getInstance() {
		return this._instance
	}

	async generateContent({ type, ...payload }: EmailPayload) {
		const message = (await getMessage(type, payload)) as any

		const template = templateBuilder.prepareTemplate({ type, payload })
		message.html = template.html
		return message
	}

	async send(payload: EmailPayload) {
		// Add payload validation
		const message = await this.generateContent(payload)

		try {
			this._logger.info(`
        to: ${message.to}
        from: ${message.from.email}
        subject: ${message.subject}
      `)
			this._logger.info(`Sending e-mail via sendgrid...`)

			await this._instance.send(message)
		} catch (err) {
			this._logger.error(`Error sending e-mail, ${err}`)
		}
	}
}
