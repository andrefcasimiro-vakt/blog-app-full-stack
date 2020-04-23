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

interface Props<TableData, TableRow> {
	title: string
	tableProps: TableProps<TableData, TableRow>
}
function ListSubpage<TableData, TableRow>({
	title,
	tableProps,
}: Props<TableData, TableRow>) {
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
