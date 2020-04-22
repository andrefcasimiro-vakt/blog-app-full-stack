import React, { useState } from 'react'
import DrawerMenuMainItem from 'shared/drawer/drawer.menu.main.item'
import Collapse from '@material-ui/core/Collapse/Collapse'
import List from '@material-ui/core/List/List'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { DrawerMenu as DrawerMenuType } from './drawer.types'
import { pathOr } from 'ramda'
import { Typography } from '@material-ui/core'
import { selectDrawerStatus, updateDrawer } from 'modules/app/redux/app.redux'
import { useSelector, useDispatch } from 'react-redux'

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
		menuOpen: {
			border: '1px solid red',
			boxShadow: '1px 5px 5px rgba(0, 0, 0, 0.1)',
		},
		menuClosed: {},
	}),
)

type Props = {
	drawerMenuItem: DrawerMenuType
	open?: boolean
}

/**
 * Draws a main menu that will have a collapse functionality to show / hide its sub-menus
 */
const DrawerMenuMain = ({ drawerMenuItem }: Props) => {
	const { icon: Icon } = drawerMenuItem

	const classes = useStyles()

	const [open, setOpen] = useState<boolean>(false)
	const handleClick = () => setOpen(!open)

	// Redux
	const drawerMinimized =
		useSelector(selectDrawerStatus) === 'open' ? false : true

	return (
		<React.Fragment>
			<DrawerMenuMainItem onClick={handleClick} open={open}>
				<div className={classes.buttonContent}>
					<Icon />
					{
						// Only render the menu display name if the drawer is maximized
						!drawerMinimized && (
							<Typography
								className={classes.displayName}
								variant="h6"
								color="textPrimary"
							>
								{drawerMenuItem.displayName}
							</Typography>
						)
					}
				</div>
			</DrawerMenuMainItem>
			<Collapse component="li" in={open} timeout="auto" unmountOnExit>
				{pathOr([], ['children'], drawerMenuItem).map(
					(Component: any, index) => (
						<List className={classes.subMenus} key={index} disablePadding>
							{Component}
						</List>
					),
				)}
			</Collapse>
		</React.Fragment>
	)
}

export default DrawerMenuMain
