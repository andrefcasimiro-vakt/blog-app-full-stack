import * as yup from 'yup'

import { ExtractSchemaFields, Form } from 'shared/form/form.types'
import {
	booleanOptional,
	numberRequired,
	optional,
	optionalPassword,
	password,
	stringRequired,
} from 'shared/form/form.validators'

import AssistantPhotoOutlinedIcon from '@material-ui/icons/AssistantPhotoOutlined'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import FaceIcon from '@material-ui/icons/Face'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PersonIcon from '@material-ui/icons/Person'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import { UserRole } from './user.enums'
import i18n from 'core/i18n/i18n'

type TranslateOptions = {
	isUpdate?: boolean
}

const translate = (key: string, options?: TranslateOptions): string =>
	i18n.t(`forms.users.${options?.isUpdate ? `update` : `create`}.${key}`)

const fields = [
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
]

export const createUserForm: Form = {
	fields,
	submitName: translate('submit'),
}

export const updateUserForm: Form = {
	fields: [
		[
			{
				name: 'id',
				label: translate('id'),
				type: 'hidden',
			},
		],
		...fields,
	],
	submitName: translate('submit', { isUpdate: true }),
}

const commonFields = {
	username: stringRequired,
	email: stringRequired.email(i18n.t('validators.yup.invalidEmail')),
	password: password('login', translate('password')),
	role: optional,
	isActive: booleanOptional,
}

export const createUserSchema = yup.object().shape({
	...commonFields,
})

export const updateUserSchema = yup.object().shape({
	...commonFields,

	id: numberRequired,
	password: optionalPassword(translate('password')),
})

export type CreateUserFormData = ExtractSchemaFields<
	typeof createUserSchema.fields
>

export type UpdateUserFormData = ExtractSchemaFields<
	typeof updateUserSchema.fields
>
