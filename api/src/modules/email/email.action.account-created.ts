import { User } from 'src/modules/user/user.entity'
import { Repository } from 'typeorm'

export const getAccountCreatedInfo = async (payload: Partial<User>) => {
	return {
		email: payload.email,
		username: payload.username,
	}
}
