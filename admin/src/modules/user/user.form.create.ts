import i18n from 'core/i18n/i18n'
import { Form, ExtractSchemaFields } from 'shared/form/form.types'

import FaceIcon from '@material-ui/icons/Face'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import AssistantPhotoOutlinedIcon from '@material-ui/icons/AssistantPhotoOutlined'

import PersonIcon from '@material-ui/icons/Person'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'

import * as yup from 'yup'
import {
	stringRequired,
	password,
	optional,
	booleanOptional,
} from 'shared/form/form.validators'
import { UserRole } from './user.enums'

const translate = (key: string): string => i18n.t(`forms.users.create.${key}`)

export const createUserForm: Form = {
	fields: [
		[
			{
				name: 'username',
				label: translate('username'),
				type: 'text',
				icon: FaceIcon,
			},
		],
		[
			{
				name: 'email',
				label: translate('email'),
				type: 'email',
				icon: EmailOutlinedIcon,
			},
		],
		[
			{
				name: 'password',
				label: translate('password'),
				type: 'password',
				icon: LockOpenIcon,
			},
		],
		[
			{
				name: 'role',
				label: translate('role'),
				type: 'select',
				icon: AssistantPhotoOutlinedIcon,
				defaultChecked: true,
				options: [
					{
						name: i18n.t('users.roles.user'),
						value: UserRole.USER,
						icon: PersonIcon,
					},
					{
						name: i18n.t('users.roles.admin'),
						value: UserRole.ADMIN,
						icon: SupervisorAccountIcon,
					},
				],
			},
		],
		[
			{
				name: 'isActive',
				label: translate('isActive'),
				type: 'switch',
				icon: CheckCircleIcon,
				defaultChecked: true,
				tooltip: translate('isActiveTooltip'),
			},
		],
	],
	submitName: translate('submit'),
}

export const createUserSchema = yup.object().shape({
	username: stringRequired,
	email: stringRequired.email(i18n.t('validators.yup.invalidEmail')),
	password: password('login', translate('password')),
	role: optional,
	isActive: booleanOptional,
})

export type CreateUserFormData = ExtractSchemaFields<
	typeof createUserSchema.fields
>
