import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import Form from 'shared/form/form.component'
import { loginForm, loginFormSchema } from './login-form.data'
import { useGetUserByUsername } from 'modules/user/user.hooks'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
  }
}))

const LoginForm = () => {
  const classes = useStyles();

  const { data } = useGetUserByUsername({ username: 'peter_sanches' })

  console.log(data)

  return (
    <Paper className={classes.paper}>
      <Form form={loginForm} schema={loginFormSchema} />
    </Paper>
  )
}

export default LoginForm
