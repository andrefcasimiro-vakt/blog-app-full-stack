import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import Form from 'shared/form/form.component'
import { loginForm, loginFormSchema } from './login-form.data'
import { useGetUserByUsername } from 'modules/user/hooks/user.hooks'
import { useLogin } from 'modules/auth/hooks/auth.hooks'
import { ExtractSchemaFields } from 'shared/form/form.types'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
  }
}))

type FormData = ExtractSchemaFields<typeof loginFormSchema.fields>
const LoginForm = () => {
  const [mutate, { data, error }] = useLogin()
  const classes = useStyles();

  
  const handleSubmit = (formData: FormData) => {
    const { username, password } = formData

    mutate({ variables: { username, password }})
  }
  
  return (
    <Paper className={classes.paper}>
      <Form<FormData, typeof loginFormSchema>
        form={loginForm}
        schema={loginFormSchema}
        onSubmit={handleSubmit}
      />
    </Paper>
  )
}

export default LoginForm
