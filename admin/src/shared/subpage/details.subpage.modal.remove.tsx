import React, { useCallback } from 'react'

import Button from '@material-ui/core/Button/Button'
import { GraphqlResponse } from 'core/graphql/graphql.types'
import Grid from '@material-ui/core/Grid/Grid'
import Modal from 'shared/modal/modal'
import { SubpageMode } from './details.subpage.constants'
import Typography from '@material-ui/core/Typography/Typography'
import { UseMutationReturn } from 'core/graphql/graphql.hooks'
import i18n from 'core/i18n/i18n'
import { path } from 'ramda'
import { useSnackbar } from 'notistack'

interface Props<Data, DeleteMutationReturn, DeleteMutationInput> {
	mode: SubpageMode
	setMode: (v: SubpageMode) => void
	modalTitle: string
	modalContent: string | React.FC
	data: Data
	useDeleteMutation: (
		onCompleted?: (result: DeleteMutationReturn) => unknown,
	) => UseMutationReturn<DeleteMutationReturn, { input: DeleteMutationInput }>
}

function RemoveData<Data, DeleteMutationReturn, DeleteMutationInput>({
	mode,
	setMode,
	modalTitle,
	modalContent,
	data,
	useDeleteMutation,
}: Props<Data, DeleteMutationReturn, DeleteMutationInput>) {
	const { mutate } = useDeleteMutation()

	const handleRemove = () => {
		mutate({ variables: { input: { id: path(['id'], data) } } })
	}

	return (
		<Modal
			open={mode === SubpageMode.REMOVE_DETAILS}
			setOpen={() => setMode(SubpageMode.VIEW_DETAILS)}
			title={modalTitle}
			buttons={
				<>
					<Button color="primary" onClick={handleRemove}>
						{i18n.t('modals.generic.confirmButton')}
					</Button>
					<Button
						color="default"
						onClick={() => setMode(SubpageMode.VIEW_DETAILS)}
					>
						{i18n.t('modals.generic.cancelButton')}
					</Button>
				</>
			}
		>
			<Grid container xs={12}>
				<Typography>{modalContent}</Typography>
			</Grid>
		</Modal>
	)
}

export default RemoveData
