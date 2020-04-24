import { routeComponents, urls } from './app.urls'
import React from 'react'
import { UserRole } from 'modules/user/enums/user.enums'
import PrivilegedRoute from './app.routes.privileged'

export const generateRoutes = (route: string) => {
	const match = routeComponents.find((x) => x.route === route)

	if (!match) {
		return null
	}

	const { list, create } = match?.components

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
		</>
	)
}
