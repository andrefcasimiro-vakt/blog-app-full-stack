import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { urls } from './app.urls'
import { RouteProps } from './app.routes.interfaces'

interface Props extends RouteProps {} 

/**
 * Queries for an authenticated user before returning the route
 * If not logged in, will redirect to homepage
 */
const AuthenticatedRoute = ({ component, ...rest }: Props) => {
  const loggedIn = false // Query redux here

  return loggedIn
    ? <Route {...rest} component={component} />
    : <Redirect to={urls.login} />
}

export default AuthenticatedRoute
