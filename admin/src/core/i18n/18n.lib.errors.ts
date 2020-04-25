import { Language } from './i18n.resources'

const errors = (language: Language) => ({
	graphql: {
		AUTHORIZATION_ERROR: {
			en: 'Not authorized',
			pt: 'Não autorizado',
		}[language],
	},
})

export default errors
