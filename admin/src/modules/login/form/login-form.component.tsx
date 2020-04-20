import React from 'react'
import Form from 'modules/form/form'
import { LoginFormData, loginFormSchema, loginForm } from './login-form.data'
import { AuthResponse } from 'modules/auth/types/auth.types'
import { useLogin } from 'modules/auth/hooks/auth.hooks'

const LoginForm = () => {
  const onSuccess = (result: AuthResponse) => {
    console.log('completed: ', result)
  }

  return (
    <Form<LoginFormData, typeof loginFormSchema, AuthResponse>
      form={loginForm}
      schema={loginFormSchema}
      useMutation={() => useLogin(onSuccess)}
      successMessage={`Welcome back`}
    />
  )
}

export default LoginForm
