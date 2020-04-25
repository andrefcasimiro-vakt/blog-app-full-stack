import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { urls } from './routes.constants.urls'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, authLogout } from 'modules/auth/auth.redux'
import { path } from 'ramda'
import { RouteProps } from './routes.interfaces'
import { UserRole } from 'modules/user/user.enums'

interface Props extends RouteProps {
	role: UserRole
}

/**
 * For accessing this route, user must exist
 * and hold the given role
 */
const PrivilegedRoute = ({ component, role, ...rest }: Props) => {
	const user = useSelector(selectCurrentUser)
	const dispach = useDispatch()

	if (!user || !user.role) {
		;<Redirect to={urls.login} />
	}

	const canAccess = path(['role'], user) === role

	if (!canAccess) {
		dispach(authLogout())
		return <Redirect to={urls.login} {...rest} />
	}

	return <Route {...rest} component={component} />
}

export default PrivilegedRoute
