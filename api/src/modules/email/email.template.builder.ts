import mjml2html from 'mjml'

import { EmailTypeEnum } from './email.email-types'
import accountCreatedTemplate from './email.template.account-created'

const templateBuilder: any = {
	prepareTemplate({ type, payload = {}, content = {} }) {
		switch (type) {
			case EmailTypeEnum.ACCOUNT_CREATED:
				return mjml2html(accountCreatedTemplate(content))
			default:
				return ''
		}
	},
}

export default templateBuilder
