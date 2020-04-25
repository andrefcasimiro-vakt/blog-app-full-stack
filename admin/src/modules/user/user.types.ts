import { UserRole } from './user.enums'

export interface User {
	id: number
	username: string
	email: string
	role: UserRole
	isActive: boolean
	lastLoginAt: string
}
