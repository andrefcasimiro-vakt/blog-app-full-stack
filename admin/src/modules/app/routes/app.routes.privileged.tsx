import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { urls } from './app.urls'
import { RouteProps } from './app.routes.interfaces'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'modules/auth/redux/auth.redux'

interface Props extends RouteProps {
  role: string,
} 

/**
 * For accessing this route, user must exist
 * and hold the given role
 */
const PrivilegedRoute = ({ component, role, ...rest }: Props) => {
  const user = useSelector(selectCurrentUser)
  
  if (!user) {
    <Redirect to={urls.login} />
  }

  const canAccess = user?.role === role
  return canAccess
    ? <Route {...rest} component={component} />
    : <Redirect to={urls.home} />
}

export default PrivilegedRoute
