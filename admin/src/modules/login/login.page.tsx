import React from 'react'
import TabPageTemplate from 'shared/page/page.layout.tab'
import { loginTabs } from './login.page.tabs'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { config } from 'modules/app/app.config'

const LoginPage = () => {
	return (
		<TabPageTemplate
			title={config.app.name}
			titleIcon={DashboardIcon}
			tabs={loginTabs}
		/>
	)
}

export default LoginPage
