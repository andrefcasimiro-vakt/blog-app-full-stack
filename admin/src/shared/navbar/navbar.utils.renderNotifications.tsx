import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications'
import makeStyles from '@material-ui/core/styles/makeStyles'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Badge from '@material-ui/core/Badge/Badge'
import { NavbarProps } from './navbar.types'

const useStyles = makeStyles((theme) => ({
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}))

const renderNotifications = ({ ...rest }: NavbarProps) => {
	const classes = useStyles()

	return (
		<div className={classes.sectionDesktop}>
			<IconButton aria-label="show 17 new notifications">
				<Badge badgeContent={17} color="error">
					<NotificationsIcon />
				</Badge>
			</IconButton>
		</div>
	)
}

export default renderNotifications
