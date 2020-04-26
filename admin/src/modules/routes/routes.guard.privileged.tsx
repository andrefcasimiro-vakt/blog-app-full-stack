import { authLogout, selectCurrentUser } from 'modules/auth/auth.redux'
import { UserRole } from 'modules/user/user.enums'
import { path } from 'ramda'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { urls } from './routes.constants.urls'
import { RouteProps } from './routes.interfaces'

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

	if (!user || !path(['role'], user)) {
		return <Redirect to={urls.login} />
	}

	const canAccess = path(['role'], user) === role

	if (!canAccess) {
		dispach(authLogout())
		return <Redirect to={urls.login} {...rest} />
	}

	return <Route {...rest} component={component} />
}

export default PrivilegedRoute
