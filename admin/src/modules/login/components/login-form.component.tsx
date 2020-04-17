import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import Form from 'shared/form/form.component'
import { loginForm } from './login-form.data'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
  }
}))

const LoginForm = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Form
        form={loginForm}
      />
    </Paper>
  )
}

export default LoginForm
