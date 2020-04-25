import { routeComponents, urls } from './routes.constants.urls'
import React from 'react'
import PrivilegedRoute from './routes.guard.privileged'
import { UserRole } from 'modules/user/user.enums'

export const generateRoutes = (route: string) => {
	const match = routeComponents.find((x) => x.route === route)

	if (!match) {
		return null
	}

	const { list, create, detail } = match?.components

	const formattedURI = urls[route.split('/')[1]]

	return (
		<>
			{/** List */}
			{list && (
				<PrivilegedRoute
					role={UserRole.ADMIN}
					exact
					path={formattedURI}
					component={list}
				/>
			)}
			{/** Create */}
			{create && (
				<PrivilegedRoute
					role={UserRole.ADMIN}
					exact
					path={`${formattedURI}/create`}
					component={create}
				/>
			)}
			{/** Detail */}
			{detail && (
				<PrivilegedRoute
					role={UserRole.ADMIN}
					path={`${formattedURI}/details/:id`}
					component={detail}
				/>
			)}
		</>
	)
}
