import { Language } from './i18n.resources'

const forms = (language: Language) => ({
	auth: {
		login: {
			// Notification
			successMessage: {
				en: 'Welcome back',
				pt: 'Bem-vindo de volta',
			}[language],
			// Notification
			unauthorizedAccess: {
				en: 'Not enough permissions',
				pt: 'Permissões insuficientes',
			}[language],
		},
	},
	users: {
		create: {
			title: { en: 'Create user', pt: 'Criar utilizador' }[language],
			id: { en: 'ID', pt: 'ID' }[language],
			username: { en: 'Username', pt: 'Nome de utilizador' }[language],
			email: { en: 'E-mail', pt: 'E-mail' }[language],
			password: { en: 'Password', pt: 'Palavra-passe' }[language],
			role: { en: 'User role', pt: 'Função do utilizador' }[language],
			isActive: { en: 'Activate account', pt: 'Ativar conta' }[language],
			isActiveTooltip: {
				en: `Determines if this user's account is allowed to use the platform`,
				pt:
					'Determina se a conta deste utilizador está autorizada a usar a plataforma',
			}[language],
			submit: { en: 'Create', pt: 'Criar' }[language],
			// Notification
			successMessage: {
				en: 'User was created',
				pt: 'Utilizador criado com sucesso',
			}[language],
		},
		update: {
			submit: { en: 'Save', pt: 'Guardar' }[language],
			successMessage: {
				en: 'User was updated',
				pt: 'Utilizador atualizado com sucesso',
			}[language],
		},
	},
})

export default forms
