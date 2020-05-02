import { User } from 'src/modules/user/user.entity'

export const getAccountCreatedInfo = (payload: Partial<User>) => {
	return {
		email: payload.email,
		username: payload.username,
	}
}
