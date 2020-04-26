import { selectCurrentUser } from 'modules/auth/auth.redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { urls } from './routes.constants.urls'
import { RouteProps } from './routes.interfaces'

interface Props extends RouteProps {}

/**
 * Queries for an authenticated user before returning the route
 * If not logged in, will redirect to homepage
 */
const AuthenticatedRoute = ({ component, ...rest }: Props) => {
	const loggedIn = useSelector(selectCurrentUser)

	return loggedIn ? (
		<Route {...rest} component={component} />
	) : (
		<Redirect to={urls.login} />
	)
}

export default AuthenticatedRoute
