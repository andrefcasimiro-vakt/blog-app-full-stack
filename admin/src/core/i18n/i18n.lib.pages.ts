import { Language } from './i18n.resources'

const pages = (language: Language) => ({
	login: {
		tabs: {
			login: { en: 'Login', pt: 'Entrar' }[language],
			forgotPassword: { en: 'Recover password', pt: 'Recuperar acesso' }[
				language
			],
		},
		form: {
			username: { en: 'Username', pt: 'Nome de usuário' }[language],
			password: { en: 'Password', pt: 'Palavra-passe' }[language],
			submit: { en: 'Login', pt: 'Entrar' }[language],
		},
	},
})

export default pages
