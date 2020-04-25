import { Language } from './i18n.resources'

const tables = (language: Language) => ({
	users: {
		title: { en: 'User List', pt: 'Lista de utilizadores' }[language],
		columns: {
			id: { en: 'ID', pt: 'ID' }[language],
			username: { en: 'Username', pt: 'Nome de utilizador' }[language],
			email: { en: 'E-Mail', pt: 'E-Mail' }[language],
			userRole: { en: 'Role', pt: 'Função' }[language],
			isActive: { en: 'Is Active?', pt: 'Está Ativo?' }[language],
			lastLoginAt: { en: 'Last login at', pt: 'Última atividade' }[language],
		},
	},
})

export default tables
