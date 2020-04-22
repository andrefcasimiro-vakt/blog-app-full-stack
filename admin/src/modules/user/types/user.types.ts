import { UserRole } from '../enums/user.enums'

export interface User {
	id: string
	username: string
	role: UserRole
}
