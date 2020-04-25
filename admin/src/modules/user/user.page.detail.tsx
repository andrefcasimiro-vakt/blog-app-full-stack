import {
	CreateUserFormData,
	UpdateUserFormData,
	createUserForm,
	createUserSchema,
	updateUserForm,
	updateUserSchema,
} from './user.form.create'
import React, { useCallback, useState } from 'react'
import { useGetUserByUserId, useUpdateUser } from './user.hooks'
import { useHistory, useLocation } from 'react-router'

import ButtonsToggleMode from 'shared/subpage/details.subpage.toggler'
import DetailSubheader from 'shared/subpage/common.subpage.header'
import Form from 'shared/form/form.main.component'
import Grid from '@material-ui/core/Grid/Grid'
import Paper from '@material-ui/core/Paper/Paper'
import { User } from './user.types'
import UserDetails from 'modules/user/user.details'
import { extractIdFromLocation } from 'core/router/router.utils'
import i18n from 'core/i18n/i18n'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { pathOr } from 'ramda'
import theme from 'modules/app/app.theme'
import { urls } from 'modules/routes/routes.constants.urls'

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
						<Form<UpdateUserFormData, typeof updateUserSchema, Partial<User>>
							form={updateUserForm}
							schema={updateUserSchema}
							useMutation={useUpdateUser}
							successMessage={i18n.t('forms.users.create.successMessage')}
							onSuccess={handleBack}
							loading={loading}
							formData={{
								id: userId,
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
