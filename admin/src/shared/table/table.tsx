import React, { useEffect } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/config/app.theme'
import Grid from '@material-ui/core/Grid/Grid'
import MaterialTable, { Column } from 'material-table'
import { tableIcons } from './table.icons'
import { Query } from 'core/graphql/graphql.types'
import { path, pathOr } from 'ramda'
import { useQuery } from 'core/graphql/graphql.hooks'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles({
	table: {
		width: '100%',
	},
})

interface TableState<TableRow> {
	// @ts-ignore
	columns: Column<TableRow>[]
	data: TableRow[]
}

export interface TableProps<TableData, TableRow> {
	title?: string

	query: Query<TableData[]>

	// @ts-ignore
	columns: Column<TableRow>[]
}

interface Props<TableData, TableRow> {
	tableProps: TableProps<TableData, TableRow>
}

function Table<TableData, TableRow>({
	tableProps,
}: Props<TableData, TableRow>) {
	const classes = useStyles()

	const [state, setState] = React.useState<
		Partial<TableProps<TableData, TableRow>>
	>({
		columns: pathOr([], ['columns'], tableProps),
		// @ts-ignore
		data: [],
	})

	const { data, loading, error } = useQuery(tableProps.query, {})

	useEffect(() => {
		if (data) {
			setState({ ...state, data })
		}
	}, [data])

	return (
		// @ts-ignore
		<MaterialTable<TableData>
			title={tableProps?.title}
			columns={state.columns}
			data={state.data}
			icons={tableIcons}
			style={{ width: '100%' }}
			isLoading={loading}
			editable={
				{
					/*
				onRowAdd: (newData: TableData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve()
							setState((prevState) => {
								// @ts-ignore

								const data = [...prevState.data]
								data.push(newData)
								return { ...prevState, data }
							})
						}, 600)
					}),
				onRowUpdate: (newData: TableData, oldData: TableData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve()
							if (oldData) {
								setState((prevState: any) => {
									// @ts-ignore
									const data = [...prevState.data]
									data[data.indexOf(oldData)] = newData
									return { ...prevState, data }
								})
							}
						}, 600)
					}),
				onRowDelete: (oldData: TableData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve()
							setState((prevState) => {
								// @ts-ignore
								const data = [...prevState.data]
								data.splice(data.indexOf(oldData), 1)
								return { ...prevState, data }
							})
						}, 600)
					}),
			*/
				}
			}
		/>
	)
}

export default Table
