import React, { useCallback } from 'react'
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
import { useCreateUser } from '../hooks/user.hooks'
import theme from 'modules/app/config/app.theme'
import { urls } from 'modules/app/routes/app.urls'
import { useHistory } from 'react-router'
import DetailSubheader from 'shared/subpage/detail/subpage.header'
import Paper from '@material-ui/core/Paper/Paper'

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
		marginTop: theme.spacing(1),
	},
	form: {
		maxWidth: '50rem',
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

const UserPageCreate = ({}: Props) => {
	const classes = useStyles()
	const history = useHistory()

	const handleBack = useCallback((mutationResult: User) => {
		// On successfully creating a user, return to the user's list view
		history.push(urls.users)
	}, [])

	return (
		<Grid container className={classes.root}>
			<Grid container className={classes.form}>
				<DetailSubheader
					backUrl={urls.users}
					title={i18n.t('forms.users.create.title')}
				/>

				<Paper className={classes.paper}>
					<Form<CreateUserFormData, typeof createUserSchema, User>
						form={createUserForm}
						schema={createUserSchema}
						useMutation={useCreateUser}
						successMessage={i18n.t('forms.users.create.successMessage')}
						onSuccess={handleBack}
					/>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default UserPageCreate
