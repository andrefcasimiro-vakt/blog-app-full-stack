import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/config/app.theme'
import Grid from '@material-ui/core/Grid/Grid'
import Table, { TableProps } from 'shared/table/table'
import { useSelector } from 'react-redux'
import { selectDrawerStatus } from 'modules/app/redux/app.redux'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
})

/**
 * Template for creating generic subpages for lists
 */

interface Props {
	title: string
	tableProps?: TableProps
}
const ListSubpage = ({ title, tableProps }: Props) => {
	const classes = useStyles()

	return (
		<React.Fragment>
			<Grid container className={classes.root}>
				{/** Table */}
				<Table tableProps={tableProps} />
			</Grid>
		</React.Fragment>
	)
}

export default ListSubpage
