import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/config/app.theme'
import Grid from '@material-ui/core/Grid/Grid'
import Table, { TableProps } from 'shared/table/table'
import AddFloatButton from 'shared/buttons/float/buttons.float.add'
import { CreateProps } from '../create/create.props'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
})

interface Props {}

/**
 * Template for creating generic subpages for lists
 */
function CreateSubpage({}: Props) {
	const classes = useStyles()

	return (
		<React.Fragment>
			<Grid container className={classes.root}></Grid>
		</React.Fragment>
	)
}

export default CreateSubpage
