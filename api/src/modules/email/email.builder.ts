import mjml2html from 'mjml'

import accountCreatedTemplate from './email.account-created.template'
import { EmailTypeEnum } from './email.email-types'
import forgotPasswordTemplate from './email.forgot-password.template'

const templateBuilder: any = {
	prepareTemplate({ type, payload }) {
		switch (type) {
			case EmailTypeEnum.ACCOUNT_CREATED:
				return mjml2html(accountCreatedTemplate(payload))
			case EmailTypeEnum.ACCOUNT_FORGOT_PASSWORD:
				return mjml2html(forgotPasswordTemplate(payload))
			default:
				return ''
		}
	},
}

export default templateBuilder
