import { Language } from './i18n.resources'

const users = (language: Language) => ({
	accounts: { en: 'Accounts', pt: 'Contas' }[language],
	users: { en: 'Users', pt: 'Utilizadores' }[language],
	roles: {
		admin: { en: 'Administrator', pt: 'Administrador' }[language],
		user: { en: 'User', pt: 'Utilizador' }[language],
	},
})

export default users
