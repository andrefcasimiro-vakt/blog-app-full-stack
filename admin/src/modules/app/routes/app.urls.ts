import UserPageList from 'modules/user/pages/user.page.list'
import UserPageCreate from 'modules/user/pages/user.page.create'

export const urls = {
	home: '/',
	login: '/login',
	notFound: '/not-found',

	// Internal
	users: '/users',
}

export const routeComponents: {
	route: string
	components: {
		list: React.FC
		create: React.FC
	}
}[] = [
	{
		route: '/users',
		components: {
			list: UserPageList,
			create: UserPageCreate,
		},
	},
]
