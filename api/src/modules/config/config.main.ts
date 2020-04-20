import { Config } from './config.types'

const config : Config = {
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
  modules: [
    'auth',
    'blog',
    'config',
    'database',
    'graphql',
    'refreshToken',
    'user',
  ]
}

export default config;
