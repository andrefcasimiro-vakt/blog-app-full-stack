type Language = 'en' | 'pt'

const generateTranslation = (language: Language) => ({
	generic: {
		search: { en: 'Search', pt: 'Pesquisar' }[language],
		back: { en: 'Go back', pt: 'Voltar atrás' }[language],
	},
	fallback: {
		unknownData: { en: 'Unknown', pt: 'Desconhecido' }[language],
	},
	buttons: {
		users: {
			create: { en: 'Create user', pt: 'Criar utilizador' }[language],
		},
	},
	tables: {
		users: {
			title: { en: 'User List', pt: 'Lista de utilizadores' }[language],
			columns: {
				id: { en: 'ID', pt: 'ID' }[language],
				username: { en: 'Username', pt: 'Nome de utilizador' }[language],
				email: { en: 'E-Mail', pt: 'E-Mail' }[language],
				userRole: { en: 'Role', pt: 'Função' }[language],
				lastLoginAt: { en: 'Last login at', pt: 'Última atividade' }[language],
			},
		},
	},
	forms: {
		users: {
			create: {
				title: { en: 'Create user', pt: 'Criar utilizador' }[language],
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
		},
	},
	users: {
		accounts: { en: 'Accounts', pt: 'Contas' }[language],
		users: { en: 'Users', pt: 'Utilizadores' }[language],
		roles: {
			admin: { en: 'Administrator', pt: 'Administrador' }[language],
			user: { en: 'User', pt: 'Utilizador' }[language],
		},
	},
	blog: {
		blog: { en: 'Blog', pt: 'Blogue' }[language],
		posts: { en: 'Posts', pt: 'Publicações' }[language],
		categories: { en: 'Categories', pt: 'Categorias' }[language],
		comments: { en: 'Comments', pt: 'Comentários' }[language],
		settings: { en: 'Settings', pt: 'Configurações' }[language],
	},
	userAvatarOptions: {
		logout: { en: 'Logout', pt: 'Terminar sessão' }[language],
	},
	pages: {
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
	},
	validators: {
		yup: {
			noEmptyCharacters: {
				en: 'Spaces are not allowed',
				pt: 'Espaços em branco não são permitidos',
			}[language],
			stringRequired: {
				en: 'This field is required',
				pt: 'O campo deve estar preenchido',
			}[language],
			invalidEmail: {
				en: 'Must be a correct email address',
				pt: 'Formato de e-mail incorrecto',
			}[language],
			minimumLength: {
				en: '{fieldName} must be at least {minimumLength} characters long',
				pt: '{fieldName} tem de ter no mínimo {minimumLength} carácter(es)',
			}[language],
		},
	},
	errors: {
		graphql: {
			AUTHORIZATION_ERROR: {
				en: 'Not authorized',
				pt: 'Não autorizado',
			}[language],
		},
	},
})

export const resources = {
	en: {
		translation: generateTranslation('en'),
	},
	pt: {
		translation: generateTranslation('pt'),
	},
}
