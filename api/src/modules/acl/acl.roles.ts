import { UserRole } from '../user/user.enum'

export const roles = {
	/** Requests without jwt */
	ANONYMOUS: UserRole.ANONYMOUS,

	/** Users with an account */
	USER: UserRole.USER,

	/** Administrators */
	ADMIN: UserRole.ADMIN,
}
