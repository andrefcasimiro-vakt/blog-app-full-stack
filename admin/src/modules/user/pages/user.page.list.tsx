import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid/Grid'
import { Typography } from '@material-ui/core'
import ListSubpage from 'shared/subpage/list/subpage.list'
import i18n from 'core/i18n/i18n'

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
				<ListSubpage
					title={userTitle}
					tableProps={{
						title: i18n.t('tables.titles.users'),
					}}
				/>
			</Grid>
		</React.Fragment>
	)
}

export default UserPageList
