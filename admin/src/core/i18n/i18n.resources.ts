type Language = 'en' | 'pt'

const generateTranslation = (language: Language) => ({
	generic: {
		search: { en: 'Search', pt: 'Pesquisar' }[language],
	},
	tables: {
		users: {
			title: { en: 'User List', pt: 'Lista de utilizadores' }[language],
			columns: {
				id: { en: 'ID', pt: 'ID' }[language],
				username: { en: 'Username', pt: 'Nome de usuário' }[language],
				email: { en: 'E-Mail', pt: 'E-Mail' }[language],
				userRole: { en: 'Role', pt: 'Função' }[language],
				lastLoginAt: { en: 'Last login at', pt: 'Última atividade' }[language],
			},
		},
	},
	users: {
		accounts: { en: 'Accounts', pt: 'Contas' }[language],
		users: { en: 'Users', pt: 'Utilizadores' }[language],
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
