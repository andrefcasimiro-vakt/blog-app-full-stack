import decode from 'jwt-decode'
import store from 'store'
import { AuthUser } from 'modules/auth/auth.types'
import { config } from 'modules/app/app.config'

const APP_NAME = (config.app.name || '').toUpperCase()
const ACCESS_TOKEN_KEY = `${APP_NAME}/CRYPTO/ACCESS_TOKEN`
const REFRESH_TOKEN_KEY = `${APP_NAME}/CRYPTO/REFRESH_TOKEN`

export const getEmailFromAccessToken = (): string | null => {
	try {
		const result: AuthUser = decode(store.get(ACCESS_TOKEN_KEY))
		return result.email
	} catch (error) {
		return null
	}
}

export const setAccessToken = (token: string): void =>
	store.set(ACCESS_TOKEN_KEY, token)

export const setRefreshToken = (token: string): void =>
	store.set(REFRESH_TOKEN_KEY, token)

export const getAccessToken = (): string | null => store.get(ACCESS_TOKEN_KEY)

export const getRefreshToken = (): string | null => store.get(REFRESH_TOKEN_KEY)

export const purgeAccessToken = () => store.remove(ACCESS_TOKEN_KEY)

export const purgeRefreshToken = () => store.remove(REFRESH_TOKEN_KEY)

export const purgeTokens = () => {
	purgeAccessToken()
	purgeRefreshToken()
}
