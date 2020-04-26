import { LoginFormData, loginForm, loginFormSchema } from './login.form.data'
import { Paper, makeStyles } from '@material-ui/core'

import { AuthResponse } from 'modules/auth/auth.types'
import Form from 'shared/form/form.main.component'
import React from 'react'
import { UserRole } from 'modules/user/user.enums'
import { authLogin } from 'modules/auth/auth.redux'
import i18n from 'core/i18n/i18n'
import theme from 'modules/app/app.theme'
import { useDispatch } from 'react-redux'
import { useLogin } from 'modules/auth/auth.hooks'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles({
	paper: {
		flexGrow: 1,
		marginTop: theme.spacing(1),
	},
})

const LoginForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { enqueueSnackbar } = useSnackbar()

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

	const handleSuccessMesage = (mutationResult: AuthResponse) => {
		if (mutationResult?.user?.role !== UserRole.ADMIN) {
			enqueueSnackbar(i18n.t('forms.auth.login.unauthorizedAccess'), {
				variant: 'error',
			})

			return
		}

		enqueueSnackbar(i18n.t('forms.auth.login.successMessage'), {
			variant: 'success',
		})
	}

	return (
		<Paper className={classes.paper}>
			<Form<LoginFormData, typeof loginFormSchema, AuthResponse>
				form={loginForm}
				schema={loginFormSchema}
				useMutation={() => useLogin(onSuccess)}
				successMessage={handleSuccessMesage}
			/>
		</Paper>
	)
}

export default LoginForm
