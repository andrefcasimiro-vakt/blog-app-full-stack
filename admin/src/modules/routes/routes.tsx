import { Route, Switch } from 'react-router-dom'

import DashboardLayout from 'shared/page/page.layout.dashboard'
import LoginPage from 'modules/login/login.page'
import NotFoundPage from 'shared/not-found/not-found.page'
import PrivilegedRoute from './routes.guard.privileged'
import React from 'react'
import UnauthenticatedRoute from './routes.guard.unauthenticated'
import { UserRole } from 'modules/user/user.enums'
import { generateRoutes } from './routes.utils.generators'
import { urls } from './routes.constants.urls'

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
