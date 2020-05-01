import { Config } from './config.types'

const config: Config = {
	auth: {
		password: {
			minimumLength: parseInt(process.env.PASSWORD_MINIMUM_LENGTH) || 6,
		},
		pepper: process.env.PEPPER_STRING || 'long_enough_random_string',
		saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
		refreshToken: {
			length: parseInt(process.env.AUTH_REFRESH_TOKEN_LENGTH) || 42,
			limit: parseInt(process.env.AUTH_REFRESH_TOKEN_LIMIT) || 5,
			separator: process.env.AUTH_REFRESH_TOKEN_SEPARATOR || '$',
		},
	},
	jwt: {
		secret: process.env.JWT_SECRET_KEY || 'jwtSecretKey',
		expiresIn: parseInt(process.env.JWT_EXPIRES_IN) || 1,
	},
	http: {
		customHeaders: {
			accessToken: process.env.ACCESS_TOKEN || 'x-access-token',
			refreshToken: process.env.REFRESH_TOKEN || 'x-refresh-token',
		},
	},
	queue: {
		host: process.env.RABBITMQ_HOST,
		user: process.env.RABBITMQ_USER,
		password: process.env.RABBITMQ_PASSWORD,
	},
	modules: [ 'acl', 'auth', 'blog', 'config', 'database', 'graphql', 'refreshToken', 'queue', 'user' ],
}

export default config
