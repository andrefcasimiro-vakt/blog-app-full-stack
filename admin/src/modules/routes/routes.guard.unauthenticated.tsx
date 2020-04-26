import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import { RouteProps } from './routes.interfaces'
import { selectCurrentUser } from 'modules/auth/auth.redux'
import { urls } from './routes.constants.urls'
import { useSelector } from 'react-redux'

interface Props extends RouteProps {}

/**
 * Protect routes that should only be accessible by visitors
 */
const UnauthenticatedRoute = ({ component, ...rest }: Props) => {
	const loggedIn = useSelector(selectCurrentUser)

	return loggedIn ? (
		<Redirect to={urls.home} />
	) : (
		<Route {...rest} component={component} />
	)
}

export default UnauthenticatedRoute
