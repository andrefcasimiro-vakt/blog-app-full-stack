import renderTitle from './navbar.utils.renderTitle'
import renderSearchBar from './navbar.utils.renderSearchBar'
import renderNotifications from './navbar.utils.renderNotifications'
import renderSpace from './navbar.utils.renderSpace'
import renderUserAvatar from './navbar.utils.renderUserAvatar'

export const layoutMapper = {
	title: renderTitle,
	searchBar: renderSearchBar,
	notifications: renderNotifications,
	space: renderSpace,
	userAvatar: renderUserAvatar,
}

export type Layout = (
	| 'title'
	| 'searchBar'
	| 'notifications'
	| 'space'
	| 'userAvatar'
)[]

export const defaultLayout: Layout = [
	'searchBar',
	'space',
	'notifications',
	'userAvatar',
]
