import { NavbarProps } from './navbar.types'
import i18n from 'core/i18n/i18n'
import { store } from 'core/redux/redux.store'
import { authLogout } from 'modules/auth/auth.redux'

export const navbarDefaultConfiguration: NavbarProps = {
	userAvatarConfiguration: {
		options: [
			{
				displayName: i18n.t('userAvatarOptions.logout'),
				onClick: () => {
					store.dispatch(authLogout())
				},
			},
		],
	},
}
