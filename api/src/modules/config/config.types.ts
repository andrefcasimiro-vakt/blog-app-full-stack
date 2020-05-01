/** API configurations */
export type Config = {
	app: {
		port: number
	}
	/** Auth */
	auth: {
		password: {
			minimumLength: number
		}
		/** String used to pepperify hash strings */
		pepper: string
		saltRounds: number
		refreshToken: {
			length: number
			limit: number
			separator: string
		}
	}
	email: {
		apiKey: string
		sender: {
			email: string
			name: string
		}
	}
	/** JWT configuration */
	jwt: {
		/** The jwt secret used to sign a JWT token */
		secret: string
		/** The duration of the generated JWT token */
		expiresIn: number
	}
	http: {
		customHeaders: {
			accessToken: string
			refreshToken: string
		}
	}
	queue: {
		enabled?: string | boolean
		host?: string
		user?: string
		password?: string
	}
	logger: {
		logLevel: string
	}
	/** List of modules used in the application */
	modules: Array<string>
}
