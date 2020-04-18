import i18n from 'core/i18n/i18n'
import { Form } from 'shared/form/form.types'
import FaceIcon from '@material-ui/icons/Face';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import * as yup from 'yup'
import { stringRequired, password } from 'shared/form/form.validators';

const translate = (key: string): string => i18n.t(`pages.login.form.${key}`)

export const loginForm: Form = {
  fields: [
    [
      {
        name: 'username',
        label: translate('username'),
        type: "text",
        icon: FaceIcon,
      },
      {
        name: 'password',
        label: translate('password'),
        type: "password",
        icon: LockOpenIcon,
      },
    ]
  ],
  submitName: translate('submit')
}

export const loginFormSchema = yup.object().shape({
  username: stringRequired,
  password: password('login'),
})

