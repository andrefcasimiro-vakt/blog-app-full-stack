import React from 'react'
import { TabOption } from 'shared/tab/tab.types'
import i18n from 'core/i18n/i18n'
import LoginForm from './login.form'

export const loginTabs: TabOption[] = [
	{
		displayName: i18n.t('pages.login.tabs.login'),
		component: () => <LoginForm />,
	},
	{
		displayName: i18n.t('pages.login.tabs.forgotPassword'),
		component: () => <div>Forgot Password</div>,
	},
]
