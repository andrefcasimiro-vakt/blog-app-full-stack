import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { urls } from './app.urls'
import AuthenticatedRoute from './app.routes.authenticated'
import UnauthenticatedRoute from './app.routes.unauthenticated'

import HomePage from 'modules/home/home.page'
import LoginPage from 'modules/login/login.page'
import NotFoundPage from 'modules/not-found/not-found.page'


const Routes = () => (
  <Switch>
    <AuthenticatedRoute exact path={urls.home} component={HomePage} />
    <UnauthenticatedRoute path={urls.login} component={LoginPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
