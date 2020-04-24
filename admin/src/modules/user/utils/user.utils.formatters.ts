import { UserRole } from '../enums/user.enums'
import i18n from 'core/i18n/i18n'

export const formatUserRole = (userRole: UserRole): string => {
	if (userRole === UserRole.ADMIN) {
		return i18n.t('users.roles.admin')
	}

	if (userRole === UserRole.USER) {
		return i18n.t('users.roles.user')
	}

	return i18n.t('fallback.unknownData')
}
