import { Language } from './i18n.resources'

const buttons = (language: Language) => ({
	users: {
		create: { en: 'Create user', pt: 'Criar utilizador' }[language],
	},
})

export default buttons
