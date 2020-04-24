import React, { useCallback, useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid/Grid'
import Form from 'modules/form/form'
import {
	createUserForm,
	CreateUserFormData,
	createUserSchema,
} from '../forms/user.forms.create'
import { User } from '../types/user.types'
import i18n from 'core/i18n/i18n'
import { useCreateUser, useGetUserByUserId } from '../hooks/user.hooks'
import theme from 'modules/app/config/app.theme'
import { urls } from 'modules/app/routes/app.urls'
import { useHistory, useLocation } from 'react-router'
import DetailSubheader from 'shared/subpage/detail/subpage.header'
import { extractIdFromLocation } from 'core/router/router.utils'
import { pathOr } from 'ramda'
import Paper from '@material-ui/core/Paper/Paper'
import InputSwitch from 'shared/form/inputs/inputs.switch'
import { Switch, CircularProgress } from '@material-ui/core'
import UserDetails from 'shared/details/details.user'
import ButtonsToggleMode from 'shared/subpage/detail/details.toggler'

interface Props {}

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
})

const UserPageDetail = ({}: Props) => {
	const classes = useStyles()
	const history = useHistory()
	const location = useLocation()
	const [editMode, setEditMode] = useState<'view' | 'edit'>('view')

	const handleBack = useCallback((mutationResult: User) => {
		// On successfully creating a user, return to the user's list view
		history.push(urls.users)
	}, [])

	const userId = extractIdFromLocation(location.pathname)

	if (!userId) {
		return null // Return an error message
	}

	const { data, loading, error } = useGetUserByUserId({ id: userId })

	const title = `${pathOr('', ['username'], data)}`

	return (
		<Grid container className={classes.root}>
			<Grid container className={classes.container}>
				<DetailSubheader title={title} backUrl={urls.users} />

				<Paper className={classes.paper}>
					<ButtonsToggleMode mode={editMode} onClick={setEditMode} />

					{editMode === 'edit' ? (
						<Form<CreateUserFormData, typeof createUserSchema, User>
							form={createUserForm}
							schema={createUserSchema}
							useMutation={useCreateUser}
							successMessage={i18n.t('forms.users.create.successMessage')}
							onSuccess={handleBack}
							loading={loading}
							formData={{
								username: data.username,
								password: '',
								email: data.email,
								role: data.role,
								isActive: data.isActive,
							}}
						/>
					) : (
						<UserDetails data={data} loading={loading} />
					)}
				</Paper>
			</Grid>
		</Grid>
	)
}

export default UserPageDetail
