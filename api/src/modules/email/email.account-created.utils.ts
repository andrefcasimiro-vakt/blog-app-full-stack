import config from '../config/config.main'
import { AccountCreatedPayload } from './email.email-types'

/**
 * Returns the e-mail message format for Account Created e-mails
 */
export const getAccountCreatedMessage = (payload: AccountCreatedPayload) => {
	const { data } = payload
	const subject = `Welcome, ${data.username}!`

	return {
		from: config.email.sender.email,
		replyTo: config.email.sender.email,
		to: data.email,
		subject,
		html: '', // Set later
	}
}
