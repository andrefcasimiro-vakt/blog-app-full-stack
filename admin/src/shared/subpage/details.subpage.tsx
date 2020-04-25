import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/app.theme'
import Grid from '@material-ui/core/Grid/Grid'
import Table, { TableProps } from 'shared/table/table'
import AddFloatButton from 'shared/buttons/button.action.create'
import { useHistory, useLocation } from 'react-router'
import { CreateProps } from './create.subpage.props'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	actionNavbar: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'row',
		marginTop: theme.spacing(2.5),
		marginBottom: theme.spacing(2.5),
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
})

interface Props<TableData, TableRow, DTO> {
	title: string

	/**
	 * For creating the creation routes
	 *
	 * Includes:
	 * the create query that is passed to the create page
	 * the icon for the add floating button
	 * the aria label for the add floating button
	 */
	createProps: CreateProps<DTO>

	/** For populating the table.
	 *
	 * Includes:
	 * table name,
	 * columns,
	 * the graphql query for fetching the table data
	 */
	tableProps: TableProps<TableData, TableRow>
}

/**
 * Template for creating generic subpages for lists
 */
function ListSubpage<
	TableData, // The data that will be injected in the table (e. g. Partial<UserModel>)
	TableRow, // The column definitions for the table
	DTO // The GRAPHQL model for operating the crud mutations (e. g. UserModel)
>({ title, createProps, tableProps }: Props<TableData, TableRow, DTO>) {
	const classes = useStyles()
	return (
		<React.Fragment>
			<Grid container className={classes.root}>
				<Grid className={classes.actionNavbar}>
					{/* Add Button */}
					<AddFloatButton {...createProps.addButton} />
				</Grid>

				{/** Table */}
				<Table tableProps={tableProps} />
			</Grid>
		</React.Fragment>
	)
}

export default ListSubpage
