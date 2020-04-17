import React from 'react'
import LoginForm from './components/login-form.component'
import { TabOption } from 'shared/tab/tab.types'

export const loginTabs: TabOption[] = [
  {
    displayName: 'Login',
    component: () => <LoginForm />
  },
  {
    displayName: 'Forgot password',
    component: () => <div>Forgot Password</div>
  }
]
