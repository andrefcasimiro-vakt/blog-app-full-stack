import React from 'react'
import Form from 'modules/form/form'
import { LoginFormData, loginFormSchema, loginForm } from './login-form.data'
import { AuthResponse } from 'modules/auth/types/auth.types'
import { useLogin } from 'modules/auth/hooks/auth.hooks'
import { authLogin } from 'modules/auth/redux/auth.redux'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
	const dispatch = useDispatch()
	const onSuccess = (result: AuthResponse) => {
		const user = result.user

		dispatch(
			authLogin({
				id: user.id,
				username: user.username,
				email: user.email,
				role: user.role,
			}),
		)
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
