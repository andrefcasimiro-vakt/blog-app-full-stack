import React from 'react'
import { makeStyles, Toolbar } from '@material-ui/core'
import { defaultLayout, layoutMapper } from './navbar.mapper.layout'
import { NavbarProps } from './navbar.types'

export const NAVBAR_HEIGHT = 56

const useStyles = makeStyles((theme) => ({
	grow: {
		background: theme.palette.common.white,
		border: 'none',
		flexGrow: 1,
	},
	appBar: {
		background: theme.palette.common.white,
	},
	toolbar: {
		background: theme.palette.common.white,
		margin: theme.spacing(0.5),
		minHeight: `${NAVBAR_HEIGHT}px`,
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
}))

const Navbar = ({ layout = defaultLayout, ...rest }: NavbarProps) => {
	const classes = useStyles()

	return (
		<div className={classes.grow}>
			<Toolbar className={classes.toolbar}>
				{layout.map((element, index) => {
					if (layoutMapper[element]) {
						const C = layoutMapper[element]
						return <C key={index} {...rest} />
					} else {
						console.error(
							`Error rendering layout element: '${element}' on Navbar`,
						)
						return null
					}
				})}
			</Toolbar>
		</div>
	)
}

export default Navbar
