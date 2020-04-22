import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { LinkProps } from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { selectDrawerStatus } from 'modules/app/redux/app.redux'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		arrow: {},
		listItem: {
			display: 'flex',
		},
		listWrapper: {
			width: '100%',
		},
		drawerMaximized: {
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between',
		},
		drawerMinimized: {},
		drawerOpened: {
			boxShadow: '1px 5px 5px rgba(0, 0, 0, 0.1)',
		},
	}),
)

interface ListItemLinkProps extends LinkProps {
	children?: React.ReactChild | React.ReactNode
	open?: boolean
	renderArrow?: boolean
	icon?: React.FC
	onClick?: any
}

/**
 * The sub-menu item of a main menu
 */
function DrawerMenuMainItem(props: Omit<ListItemLinkProps, 'ref'>) {
	const { children, open, icon: Icon, onClick, href, ...other } = props

	const classes = useStyles()

	// React router
	const history = useHistory()

	// Redux
	const drawerMinimized =
		useSelector(selectDrawerStatus) === 'open' ? false : true

	return (
		<li
			onClick={
				href // If we pass a href to the ListItemLink, use React Router history to handle the route switch
					? () => history.push(href)
					: onClick
			}
			className={classes.listWrapper}
		>
			<ListItem
				button
				{...other}
				className={`
					${drawerMinimized ? classes.drawerMinimized : classes.drawerMaximized}
					${open && classes.drawerOpened}
					`}
			>
				{children}
				{!drawerMinimized &&
					(open !== null ? (
						open ? (
							<ExpandLess className={classes.arrow} />
						) : (
							<ExpandMore className={classes.arrow} />
						)
					) : null)}
			</ListItem>
		</li>
	)
}

export default DrawerMenuMainItem
