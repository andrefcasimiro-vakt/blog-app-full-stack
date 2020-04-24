import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid/Grid'
import { Typography } from '@material-ui/core'
import ListSubpage from 'shared/subpage/list/subpage.list'
import i18n from 'core/i18n/i18n'
import { User } from '../types/user.types'
import { UserRow, userColumns } from '../tables/user.table.list'
import { listUsers } from '../graphql/user.queries'

// Icons
import PersonAddIcon from '@material-ui/icons/PersonAdd'

interface Props {}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
})

const UserPageList = ({}: Props) => {
	const classes = useStyles()

	const userTitle = i18n.t('users.users')

	return (
		<React.Fragment>
			<Grid container>
				<ListSubpage<User, UserRow, User>
					title={userTitle}
					createProps={{
						mutation: listUsers,
						addButton: {
							tooltip: i18n.t('buttons.users.create'),
							icon: PersonAddIcon,
						},
					}}
					tableProps={{
						title: i18n.t('tables.users.title'),
						columns: userColumns,
						query: listUsers,
					}}
				/>
			</Grid>
		</React.Fragment>
	)
}

export default UserPageList
