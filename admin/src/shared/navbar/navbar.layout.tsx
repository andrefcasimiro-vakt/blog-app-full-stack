import renderTitle from './navbar.renderTitle'
import renderSearchBar from './navbar.renderSearchBar'
import renderNotifications from './navbar.renderNotifications'
import renderSpace from './navbar.renderSpace'
import renderUserAvatar from './navbar.renderUserAvatar'

export const layoutMapper = {
  title: renderTitle,
  searchBar: renderSearchBar,
  notifications: renderNotifications,
  space: renderSpace,
  userAvatar: renderUserAvatar,
}

export type Layout = (
  'title'
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
