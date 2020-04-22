import React from 'react'
import TabPageTemplate from 'shared/page/tab/template.tab'
import { loginTabs } from './login.page.tabs'
import { config } from 'modules/app/config/app.config'
import DashboardIcon from '@material-ui/icons/Dashboard'

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
