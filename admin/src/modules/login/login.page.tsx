import React from 'react'
import TabPageTemplate from 'shared/page/tab/template.tab'
import { loginTabs } from './login.page.tabs'
import { config } from 'modules/app/config/app.config'

const LoginPage = () => {
  return (
    <TabPageTemplate title={config.app.name} tabs={loginTabs} />
  )
}

export default LoginPage
