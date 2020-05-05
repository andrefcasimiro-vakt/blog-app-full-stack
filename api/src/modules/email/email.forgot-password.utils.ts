import config from '../config/config.main'
import { ForgotPasswordPayload } from './email.email-types'

export const getResetPasswordLink = (code: string): string => `${config.app.clientUri}/reset-password?code=${code}`

/**
 * Returns the e-mail message format for Account Created e-mails
 */
export const getForgotPasswordMessage = (payload: ForgotPasswordPayload) => {
	const { data } = payload
	const subject = `Reset Password`

	return {
		from: config.email.sender.email,
		replyTo: config.email.sender.email,
		to: data.email,
		subject,
		html: '', // Set later
	}
}
