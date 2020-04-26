import { UserRow, userColumns } from './user.table.listUsers'

import Grid from '@material-ui/core/Grid/Grid'
import ListSubpage from 'shared/subpage/list.subpage'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import React from 'react'
import { User } from './user.types'
import i18n from 'core/i18n/i18n'
import { listUsers } from './user.queries'
import makeStyles from '@material-ui/core/styles/makeStyles'

// Icons

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
