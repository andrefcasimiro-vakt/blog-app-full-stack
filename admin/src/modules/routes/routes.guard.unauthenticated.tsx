import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { urls } from './routes.constants.urls'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'modules/auth/auth.redux'
import { RouteProps } from './routes.interfaces'

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