const prefix = 'REACT_APP_'

const extractEnv = (key: string): string | undefined =>
	process.env[`${prefix}${key}`]

export const config = {
	app: {
		name: extractEnv('APP_NAME') || 'App',
		theme: {
			pallete: {
				primary: extractEnv('APP_THEME_PALLETE_PRIMARY') || 'lightBlue',
				secondary: extractEnv('APP_THEME_PALLETE_SECONDARY') || 'lightBlue',
			},
		},
		language: {
			default: extractEnv('APP_LANGUAGE_DEFAULT') || 'pt',
			useLanguageDetector: extractEnv('APP_LANGUAGE_USE_DETECTOR') || false,
		},
		options: {
			/** Specifies if a logged in user should be logged out if any Authorization Error occurs */
			logUserOutOnAuthError:
				extractEnv('APP_OPTIONS_LOG_USER_OUT_ON_AUTH_ERROR') || true,
		},
	},
	http: {
		customHeaders: {
			accessToken:
				extractEnv('HTTP_CUSTOM_HEADERS_ACCESS_TOKEN') || 'x-access-token',
			refreshToken:
				extractEnv('HTTP_CUSTOM_HEADERS_REFRESH_TOKEN') || 'x-refresh-token',
		},
	},
	graphql: {
		uri: extractEnv('GRAPHQL_URI') || `http://localhost:8080/graphql`,
	},
}
