import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { urls } from './routes.constants.urls'
import UnauthenticatedRoute from './routes.guard.unauthenticated'

import LoginPage from 'modules/login/login.page'
import NotFoundPage from 'shared/not-found/not-found.page'
import { generateRoutes } from './routes.utils.generators'
import PrivilegedRoute from './routes.guard.privileged'
import DashboardLayout from 'shared/page/page.layout.dashboard'
import { UserRole } from 'modules/user/user.enums'

const Routes = () => (
	<Switch>
		<UnauthenticatedRoute path={urls.login} component={LoginPage} />

		{/* Internal routes to switch content inside the admin dashboard */}
		<DashboardLayout>
			<>
				<PrivilegedRoute
					role={UserRole.ADMIN}
					exact
					path={urls.home}
					component={() => <div />}
				/>
				{generateRoutes(urls.users)}
			</>
		</DashboardLayout>

		<Route component={NotFoundPage} />
	</Switch>
)

export default Routes
