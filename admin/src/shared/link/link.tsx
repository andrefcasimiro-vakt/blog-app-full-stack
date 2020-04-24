/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		link: {
			color: theme.palette.primary[500],
		},
	}),
)

interface Props {
	to: string
	children: React.ReactChild | React.ReactNode
}

export default function StyledLink({ to, children }: Props) {
	const classes = useStyles()
	const preventDefault = (event: React.SyntheticEvent) => event.preventDefault()

	return (
		<Typography className={classes.root}>
			<Link to={to} className={classes.link}>
				{children}
			</Link>
		</Typography>
	)
}
