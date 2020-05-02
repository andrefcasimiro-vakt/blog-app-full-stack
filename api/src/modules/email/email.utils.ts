import config from '../config/config.main'
import { User } from '../user/user.entity'
import { getAccountCreatedInfo } from './email.action.account-created'
import { getForgottenPasswordInfo } from './email.action.forgotten-password'
import { EmailTypeEnum } from './email.email-types'

export const getContent = (type, payload) => {
	switch (type) {
		case EmailTypeEnum.ACCOUNT_CREATED:
			return getAccountCreatedInfo(payload)
		case EmailTypeEnum.ACCOUNT_FORGOT_PASSWORD:
			return getForgottenPasswordInfo(payload)
		default:
			return {}
	}
}

export const getMessage = (type, payload, content) => {
	switch (type) {
		case EmailTypeEnum.ACCOUNT_CREATED: {
			const user: Partial<User> = content
			const subject = `Welcome, ${user.username}!`

			return {
				from: {
					email: config.email.sender.email,
					name: config.email.sender.name,
				},
				replyTo: config.email.sender.email,
				to: user.email,
				subject,
				html: '', // Set later
			}
		}
	}
}
