import React from 'react'
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
import SubpageHeader from 'shared/subpage-header/subpage-header'
import { Divider, Card } from '@material-ui/core'
import { urls } from 'modules/app/routes/app.urls'

interface Props {}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(4),
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

	return (
		<Grid container className={classes.root}>
			<Grid container className={classes.form}>
				<Grid container className={classes.header}>
					<Card variant="outlined" className={classes.card}>
						<SubpageHeader
							title={i18n.t('forms.users.create.title')}
							backUrl={urls.users}
						/>
					</Card>
				</Grid>
				<Form<CreateUserFormData, typeof createUserSchema, User>
					form={createUserForm}
					schema={createUserSchema}
					useMutation={useCreateUser}
					successMessage={i18n.t('forms.users.create.successMessage')}
				/>
			</Grid>
		</Grid>
	)
}

export default UserPageCreate
