import React, { useState } from 'react'
import ListItemLink from 'shared/drawer/drawer.list-item'
import Collapse from '@material-ui/core/Collapse/Collapse'
import List from '@material-ui/core/List/List'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { DrawerMenu } from './drawer.types'
import { pathOr } from 'ramda'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		buttonContent: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			alignContent: 'center',
			justifyContent: 'flex-start',
		},
		nested: {
			paddingLeft: theme.spacing(4),
		},
		displayName: {
			// Spacing after the icon
			marginLeft: theme.spacing(1),
		},
		subMenus: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		},
	}),
)

type Props = {
	drawerMenuItem: DrawerMenu

	/** If drawer is minimize, we want to render only the icon and no text */
	drawerMinimized?: boolean
}

const DrawerMenuItem = ({ drawerMenuItem, drawerMinimized }: Props) => {
	const classes = useStyles()
	const [open, setOpen] = useState<boolean>(false)

	const handleClick = () => setOpen(!open)

	const Icon = drawerMenuItem.icon

	return (
		<React.Fragment>
			<ListItemLink
				open={open}
				onClick={handleClick}
				renderArrow={!drawerMinimized}
			>
				<div className={classes.buttonContent}>
					<Icon />
					<Typography
						className={classes.displayName}
						variant="h6"
						color="textPrimary"
					>
						{!drawerMinimized && drawerMenuItem.displayName}
					</Typography>
				</div>
			</ListItemLink>
			<Collapse component="li" in={open} timeout="auto" unmountOnExit>
				{pathOr([], ['children'], drawerMenuItem).map(
					(Component: any, index) => (
						<List className={classes.subMenus} key={index} disablePadding>
							{React.cloneElement(Component, { drawerMinimized })}
						</List>
					),
				)}
			</Collapse>
		</React.Fragment>
	)
}

export default DrawerMenuItem
