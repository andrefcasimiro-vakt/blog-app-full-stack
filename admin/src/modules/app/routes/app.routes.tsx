import React from 'react'

import {   BrowserRouter as Router,
  Switch, Route } from 'react-router-dom'
import { urls } from './app.urls'
import AuthenticatedRoute from './app.routes.authenticated'
import UnauthenticatedRoute from './app.routes.unauthenticated'

import HomePage from 'modules/home/home.page'
import LoginPage from 'modules/login/page/login.page'
import NotFoundPage from 'modules/not-found/not-found.page'
import PrivilegedRoute from './app.routes.privileged'
import { UserRole } from 'modules/user/enums/user.enums'
import DashboardPageTemplate from 'shared/page/dashboard/template'
import UserPageList from 'modules/user/pages/user.page.list'


const Routes = () => (
  <Switch>
    <UnauthenticatedRoute path={urls.login} component={LoginPage} />

    <DashboardPageTemplate>
      <>
        <PrivilegedRoute role={UserRole.ADMIN} exact path={urls.home} component={() => <div />} />
        <PrivilegedRoute role={UserRole.ADMIN} path={urls.users} component={UserPageList} />
      </>
    </DashboardPageTemplate>

    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
