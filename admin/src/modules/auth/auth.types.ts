import { UserRole } from 'modules/user/user.enums'

export type AuthUser = {
	id: number
	username: string
	email: string
	role: UserRole
}

export type AuthResponse = {
	user: AuthUser
	accessToken: string
	refreshToken: string
}
