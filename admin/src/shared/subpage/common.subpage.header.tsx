import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid/Grid'
import theme from 'modules/app/app.theme'
import SubpageHeader from 'shared/subpage/common.subpage.header.core'
import { Card } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(4),
	},
	form: {
		maxWidth: '50rem',
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(2),
		},
	},
	header: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		flexGrow: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(1),
	},
})

interface Props {
	title: string
	backUrl: string
}

const DetailSubheader = ({ title, backUrl }: Props) => {
	const classes = useStyles()

	return (
		<Grid container className={classes.header}>
			<Card variant="outlined" className={classes.card}>
				<SubpageHeader title={title} backUrl={backUrl} />
			</Card>
		</Grid>
	)
}

export default DetailSubheader
