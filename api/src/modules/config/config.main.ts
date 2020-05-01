import dotenv from 'dotenv'

import { Config } from './config.types'

dotenv.config()

const DEFAULT_PORT = 8080

const config: Config = {
	app: {
		port: parseInt(process.env.PORT) || DEFAULT_PORT,
	},
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
	email: {
		apiKey: process.env.SENDGRID_API_KEY || '',
		sender: {
			email: process.env.EMAIL_SENDER_EMAIL || 'andrefcasimiro@gmail.com',
			name: process.env.EMAIL_SENDER_NAME || 'ADMIN',
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
		enabled: process.env.QUEUE_ENABLED || true,
		host: process.env.RABBITMQ_HOST,
		user: process.env.RABBITMQ_USER,
		password: process.env.RABBITMQ_PASSWORD,
	},
	logger: {
		logLevel: process.env.LOGGER_LEVEL || 'info',
	},
	modules: [
		'acl',
		'auth',
		'blog',
		'config',
		'database',
		'email',
		'graphql',
		'refreshToken',
		'queue',
		'user',
		'worker',
	],
}

export default config
