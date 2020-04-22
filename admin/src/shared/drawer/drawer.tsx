import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
	useTheme,
	Theme,
	createStyles,
} from '@material-ui/core/styles'
import MaterialUIDrawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { DrawerMenu } from './drawer.types'
import DrawerMenuItem from './drawer.menu-item'
import { config } from 'modules/app/config/app.config'
import Typography from '@material-ui/core/Typography/Typography'

export const drawerWidth = 240
export const drawerWidthMinimized = 57

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'row',
		},
		appBar: {
			width: `calc(100% - ${drawerWidthMinimized}px)`,
			flexDirection: 'row',
			alignItems: 'center',
			alignContent: 'center',
			backgroundColor: theme.palette.common.white,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			width: '2.5rem',
			height: '2.5rem',
			padding: 0,
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
		},
		drawerOpen: {
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: 'hidden',
			width: drawerWidthMinimized,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
		},
		contentShift: {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
	}),
)

type Props = {
	children: React.ReactChild | React.ReactNode
	drawerMenu: DrawerMenu[]
}

const Drawer = ({ children, drawerMenu }: Props) => {
	const classes = useStyles()
	const theme = useTheme()
	const [open, setOpen] = React.useState(true)

	const handleDrawer = () => {
		setOpen(!open)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				{children}
			</AppBar>
			<MaterialUIDrawer
				variant="permanent"
				anchor="left"
				open={open}
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.drawerHeader}>
					{open && (
						<Typography variant="h5">
							<strong>{config.app.name}</strong>
						</Typography>
					)}
					<IconButton className={classes.menuButton} onClick={handleDrawer}>
						{theme.direction === 'ltr' && open ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					{/* Menu Items */}
					{drawerMenu.map((menu, index) => (
						<DrawerMenuItem drawerMenuItem={menu} drawerMinimized={!open} />
					))}
				</List>
			</MaterialUIDrawer>
		</div>
	)
}

export default Drawer
