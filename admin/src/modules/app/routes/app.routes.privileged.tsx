import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { urls } from './app.urls'
import { RouteProps } from './app.routes.interfaces'

interface Props extends RouteProps {
  role: string,
} 

/**
 * For accessing this route, user must exist
 * and hold the given role
 */
const PrivilegedRoute = ({ component, role, ...rest }: Props) => {
  const canAccess = true // Query redux here

  return canAccess
    ? <Route {...rest} component={component} />
    : <Redirect to={urls.home} />
}

export default PrivilegedRoute
