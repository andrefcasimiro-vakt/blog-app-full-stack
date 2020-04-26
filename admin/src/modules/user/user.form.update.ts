import * as yup from 'yup'

import { ExtractSchemaFields, Form } from 'shared/form/form.types'
import { commonFields, createUserFields } from './user.form.create'
import { numberRequired, optionalPassword } from 'shared/form/form.validators'

import i18n from 'core/i18n/i18n'

const translate = (key: string): string => i18n.t(`forms.users.update.${key}`)

export const updateUserForm: Form = {
	fields: [
		[
			{
				name: 'id',
				label: translate('id'),
				type: 'hidden',
			},
		],
		...createUserFields,
	],
	submitName: translate('submit'),
}

export const updateUserSchema = yup.object().shape({
	...commonFields,

	id: numberRequired,
	password: optionalPassword(translate('password')),
})

export type UpdateUserFormData = ExtractSchemaFields<
	typeof updateUserSchema.fields
>
