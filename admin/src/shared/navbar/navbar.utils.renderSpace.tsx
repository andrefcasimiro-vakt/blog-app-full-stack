import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { NavbarProps } from './navbar.types'

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
}))

const renderSpace = ({ ...rest }: NavbarProps) => {
	const classes = useStyles()

	return <div className={classes.grow} />
}

export default renderSpace
