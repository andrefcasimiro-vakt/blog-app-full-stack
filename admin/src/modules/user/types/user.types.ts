import { UserRole } from '../enums/user.enums'

export interface User {
	id: number
	username: string
	email: string
	role: UserRole
	isActive: boolean
	lastLoginAt: string
}
