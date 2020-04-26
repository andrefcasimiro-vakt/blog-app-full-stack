import {
	UpdateUserFormData,
	updateUserForm,
	updateUserSchema,
} from './user.form.update'

import { DetailsFormProps } from 'shared/subpage/details.subpage.form.props'
import Form from 'shared/form/form.main.component'
import React from 'react'
import { User } from './user.types'
import i18n from 'core/i18n/i18n'
import { useUpdateUser } from './user.hooks'

const UpdateUserForm = ({
	data,
	dataId,
	loading,
	onSuccess,
}: DetailsFormProps<User, User>) => {
	return (
		<Form<UpdateUserFormData, typeof updateUserSchema, Partial<User>>
			form={updateUserForm}
			schema={updateUserSchema}
			useMutation={useUpdateUser}
			successMessage={i18n.t('forms.users.create.successMessage')}
			onSuccess={onSuccess}
			loading={loading}
			formData={{
				id: dataId,
				username: data.username,
				password: '',
				email: data.email,
				role: data.role,
				isActive: data.isActive,
			}}
		/>
	)
}

export default UpdateUserForm
