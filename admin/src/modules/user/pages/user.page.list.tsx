import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid/Grid'
import { Typography } from '@material-ui/core'

interface Props {}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
})

const UserPageList = ({}: Props) => {
	const classes = useStyles()

	return (
		<React.Fragment>
			<Grid container>
				<Typography variant="h2">User List</Typography>
			</Grid>
		</React.Fragment>
	)
}

export default UserPageList
