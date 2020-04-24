import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { urls } from './app.urls'
import UnauthenticatedRoute from './app.routes.unauthenticated'

import LoginPage from 'modules/login/page/login.page'
import NotFoundPage from 'modules/not-found/not-found.page'
import PrivilegedRoute from './app.routes.privileged'
import { UserRole } from 'modules/user/enums/user.enums'
import AppRoutes from 'shared/page/dashboard/template.dashboard'
import { generateRoutes } from './app.routes.generators'

const Routes = () => (
	<Switch>
		<UnauthenticatedRoute path={urls.login} component={LoginPage} />

		{/* Internal routes to switch content inside the admin dashboard */}
		<AppRoutes>
			<>
				<PrivilegedRoute
					role={UserRole.ADMIN}
					exact
					path={urls.home}
					component={() => <div />}
				/>
				{generateRoutes(urls.users)}
			</>
		</AppRoutes>

		<Route component={NotFoundPage} />
	</Switch>
)

export default Routes
