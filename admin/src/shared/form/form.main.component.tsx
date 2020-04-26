import BaseForm from 'shared/form/form.base.component'
import { DeepPartial } from 'react-hook-form'
import { Form as FormType } from 'shared/form/form.types'
import { MutationTuple } from '@apollo/react-hooks'
import React from 'react'
import { UseMutationReturn } from 'core/graphql/graphql.hooks'
import { useSnackbar } from 'notistack'

export type FormProps<FormData, FormSchema, MutationReturn> = {
	form: FormType
	schema: FormSchema
	useMutation: (
		onCompleted?: (result: MutationReturn) => unknown,
	) => UseMutationReturn<MutationReturn, { input: FormData }>

	onSuccess?: (result: MutationReturn) => unknown

	/** If set, displays a snackbar notification upon a successfull mutation response */
	successMessage?: string | Function

	loading?: boolean

	formData?: DeepPartial<FormData>
}

/**
 * Generic abstraction for integrating graphql mutations
 * with react-hook form
 *
 * Also handles snackbar notifications for success and error graphql events
 */
function Form<
	FormData, // Comes from extracting the schema, must match variables used in graphql mutation
	FormSchema,
	MutationReturn
>({
	form,
	schema,
	useMutation,
	onSuccess,
	successMessage,
	loading,
	formData,
}: FormProps<FormData, FormSchema, MutationReturn>) {
	const { mutate, data, loading: inProgress, error } = useMutation()
	const { enqueueSnackbar } = useSnackbar()

	const handleSubmit = (formData: FormData) => {
		mutate({ variables: { input: formData } })
	}

	if (error) {
		enqueueSnackbar(error.message, { variant: 'error' })
	}

	// Display the snackbar notification success, if successMessage is defined
	if (data && successMessage) {
		// If we want to handle the success message outside, pass the mutation result
		if (typeof successMessage === 'function') {
			successMessage(data)
		} else {
			// Otherwise, default to showing the success message, if it's passed in the props
			enqueueSnackbar(successMessage, { variant: 'success' })
		}

		if (onSuccess) {
			onSuccess(data)
		}
	}

	return (
		<BaseForm<FormData, FormSchema>
			form={form}
			schema={schema}
			onSubmit={handleSubmit}
			loading={loading}
			formData={formData}
		/>
	)
}

export default Form
