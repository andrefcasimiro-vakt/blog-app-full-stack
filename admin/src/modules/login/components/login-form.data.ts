import { Form } from 'shared/form/form.types'

export const loginForm: Form = {
  fields: [
    [
      {
        name: "username",
        type: "text",
      },
      {
        name: "password",
        type: "password",
      },
    ]
  ],
  submitName: "Login",
}
