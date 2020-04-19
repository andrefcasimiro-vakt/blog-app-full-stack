import React from 'react'
import Form from 'modules/form/form'
import { LoginFormData, loginFormSchema, loginForm } from './login-form.data'
import { AuthToken } from 'modules/auth/types/auth.types'
import { useLogin } from 'modules/auth/hooks/auth.hooks'

const LoginForm = () => {

  return (
    <Form<LoginFormData, typeof loginFormSchema, AuthToken>
      form={loginForm}
      schema={loginFormSchema}
      useMutation={useLogin}
      successMessage={`Welcome back`}
    />
  )
}

export default LoginForm
