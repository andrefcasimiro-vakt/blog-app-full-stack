import { getAccountCreatedMessage } from './email.account-created.utils'
import { EmailTypeEnum } from './email.email-types'
import { getForgotPasswordMessage } from './email.forgot-password.utils'

/**
 * Configures the e-mail message based on the emailTypeEnum
 * and personalizes it based on the received payload
 */
export const getMessage = (type, payload) => {
	switch (type) {
		case EmailTypeEnum.ACCOUNT_CREATED:
			return getAccountCreatedMessage(payload)

		case EmailTypeEnum.ACCOUNT_CREATED:
			return getForgotPasswordMessage(payload)
		default:
			return {}
	}
}
