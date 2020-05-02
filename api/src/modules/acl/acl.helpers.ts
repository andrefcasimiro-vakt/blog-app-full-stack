import { path } from 'ramda'

import { AuthUser } from '../auth/auth.model'
import { User } from '../user/user.entity'
import { UserRole } from '../user/user.enum'

/**
 * Compares the jwt session user with the user id provided in the input
 * @param ctx - The session context, which includes the current logged in user
 * @param input - The graphql mutation input that contains the requested userId
 */
export const isSameUser = (user: AuthUser, input: { id: number }): boolean => {
	const userId = path([ 'id' ], user) as number

	if (!userId) {
		return false
	}

	return userId === input.id
}

/**
 * Checks if current authenticated user is an administrator
 */
export const isAdmin = (ctx: { req: { user: User } }): boolean =>
	path([ 'req', 'user', 'role' ], ctx) === UserRole.ADMIN
