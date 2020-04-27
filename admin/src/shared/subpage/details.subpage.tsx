import { Button, Typography } from '@material-ui/core'
import { DetailsFormProps, DetailsRenderer } from './details.subpage.form.props'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import ButtonsToggleMode from 'shared/subpage/details.subpage.toggler'
import DetailSubheader from 'shared/subpage/common.subpage.header'
import { GraphqlResponse } from 'core/graphql/graphql.types'
import Grid from '@material-ui/core/Grid/Grid'
import Modal from 'shared/modal/modal'
import Paper from '@material-ui/core/Paper/Paper'
import RemoveData from './details.subpage.modal.remove'
import { SubpageMode } from './details.subpage.constants'
import { UseMutationReturn } from 'core/graphql/graphql.hooks'
import { extractIdFromLocation } from 'core/router/router.utils'
import i18n from 'core/i18n/i18n'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/app.theme'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(4),
	},
	paper: {
		flexGrow: 1,
		marginTop: theme.spacing(2),
	},
	container: {
		maxWidth: '50rem',
		marginTop: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(2),
		},
	},
	header: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		flexGrow: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(1),
	},
	deleteInnerContent: {
		opacity: '0.25',
	},
})

interface Props<
	QueryData,
	UpdateMutationData,
	DeleteMutationReturn,
	DeleteMutationInput
> {
	backUrl: string
	detailsRenderer: React.FC<DetailsRenderer<QueryData>>
	updateDataForm: React.FC<DetailsFormProps<QueryData, UpdateMutationData>>
	useQuery: (variables: { id: number }) => GraphqlResponse<QueryData>
	useDeleteMutation: (
		onCompleted?: (result: DeleteMutationReturn) => unknown,
	) => UseMutationReturn<DeleteMutationReturn, { input: DeleteMutationInput }>

	// Use for extracting the title that will be used in the header
	getTitle: (data: QueryData) => string
}

function DetailsSubpage<
	QueryData,
	UpdateMutationData,
	DeleteMutationReturn,
	DeleteMutationInput
>({
	backUrl,
	updateDataForm: UpdateDataForm,
	detailsRenderer: DetailsRenderer,
	useDeleteMutation,
	useQuery,
	getTitle,
}: Props<
	QueryData,
	UpdateMutationData,
	DeleteMutationReturn,
	DeleteMutationInput
>) {
	const classes = useStyles()
	const history = useHistory()
	const location = useLocation()
	const [mode, setMode] = useState<SubpageMode>(SubpageMode.VIEW_DETAILS)

	const handleBack = (updateMutationData: UpdateMutationData) => {
		history.push(backUrl)
	}

	const dataId = extractIdFromLocation(location.pathname)

	if (!dataId) {
		return null // Return an error message
	}

	const { data, loading, error } = useQuery({ id: dataId })

	return (
		<Grid container className={classes.root}>
			<Grid container className={classes.container}>
				<DetailSubheader title={getTitle(data)} backUrl={backUrl} />

				<Paper className={classes.paper}>
					<ButtonsToggleMode mode={mode} onClick={setMode} />
					{(mode === SubpageMode.VIEW_DETAILS ||
						mode === SubpageMode.REMOVE_DETAILS) && (
						<div
							className={
								mode === SubpageMode.REMOVE_DETAILS
									? classes.deleteInnerContent
									: ''
							}
						>
							<DetailsRenderer data={data} loading={loading} />
						</div>
					)}
					{mode === SubpageMode.UPDATE_DETAILS && (
						<UpdateDataForm
							data={data}
							dataId={dataId}
							loading={loading}
							onSuccess={handleBack}
						/>
					)}
				</Paper>
				<RemoveData
					mode={mode}
					setMode={setMode}
					modalTitle={i18n.t('modals.delete.modalTitle')}
					modalContent={i18n.t('modals.delete.message')}
					data={data}
					useDeleteMutation={useDeleteMutation}
				/>
			</Grid>
		</Grid>
	)
}

export default DetailsSubpage
