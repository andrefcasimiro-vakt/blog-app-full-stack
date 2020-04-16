import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { urls } from './app.urls'
import { RouteProps } from './app.routes.interfaces'

interface Props extends RouteProps {} 

/**
 * Protect routes that should only be accessible by visitors
 */
const UnauthenticatedRoute = ({ component, ...rest }: Props) => {
  const loggedIn = true // Query redux here

  return loggedIn
    ? <Redirect to={urls.home} />
    : <Route {...rest} component={component} />
}

export default UnauthenticatedRoute
