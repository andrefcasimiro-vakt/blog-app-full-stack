import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid/Grid'
import theme from 'modules/app/config/app.theme'
import { Card, Typography, Divider } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(4),
	},
	header: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		flexGrow: 1,
		width: '90%',
		marginBottom: '2rem',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
		margin: theme.spacing(1),
		boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
	},
	field: {
		flexGrow: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(1),
	},
})

export interface Detail {
	icon?: React.FC
	field: string
	type: 'text' | 'link'
	value: string | number | React.FC
}

interface Props {
	data: Detail[]
}

/**
 * Renders generic data
 */
function Details({ data }: Props) {
	const classes = useStyles()

	return (
		<Grid container className={classes.header}>
			<Card className={classes.card}>
				{data.map((item, index) => (
					<div className={classes.field}>
						<Typography variant="subtitle2" color="primary">
							{item.icon ? <item.icon /> : null}
							<strong>{item.field}</strong>
						</Typography>
						<Typography>{item.value}</Typography>
					</div>
				))}
			</Card>
		</Grid>
	)
}

export default Details
