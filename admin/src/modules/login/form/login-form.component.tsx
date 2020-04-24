import React from 'react'
import Form from 'modules/form/form'
import { LoginFormData, loginFormSchema, loginForm } from './login-form.data'
import { AuthResponse } from 'modules/auth/types/auth.types'
import { useLogin } from 'modules/auth/hooks/auth.hooks'
import { authLogin } from 'modules/auth/redux/auth.redux'
import { useDispatch } from 'react-redux'
import { Paper, makeStyles } from '@material-ui/core'
import theme from 'modules/app/config/app.theme'

const useStyles = makeStyles({
	paper: {
		flexGrow: 1,
		marginTop: theme.spacing(1),
	},
})

const LoginForm = () => {
	const classes = useStyles()
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
		<Paper className={classes.paper}>
			<Form<LoginFormData, typeof loginFormSchema, AuthResponse>
				form={loginForm}
				schema={loginFormSchema}
				useMutation={() => useLogin(onSuccess)}
				successMessage={`Welcome back`}
			/>
		</Paper>
	)
}

export default LoginForm
