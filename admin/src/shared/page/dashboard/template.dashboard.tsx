import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/config/app.theme'
import { SvgIcon } from 'shared/icons/icons.types'
import Navbar, { NAVBAR_HEIGHT } from 'shared/navbar/navbar'
import { NavbarProps } from 'shared/navbar/navbar.types'
import Drawer, { drawerWidth, drawerWidthMinimized } from 'shared/drawer/drawer'
import { defaultDrawerMenu } from 'shared/drawer/configs/drawer.config.default'
import Grid from '@material-ui/core/Grid/Grid'
import { navbarDefaultConfiguration } from 'shared/navbar/configurations/navbar.configuration.default'
import { useSelector } from 'react-redux'
import { selectDrawerStatus } from 'modules/app/redux/app.redux'

interface Props {
	title?: string
	titleIcon?: SvgIcon
	children?: React.ReactChild

	navbarConfiguration?: NavbarProps
}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		padding: theme.spacing(1),
		marginTop: theme.spacing(10),
		// border: '1px solid red',
	},
	drawerMinimized: {
		width: `calc(100% - ${drawerWidthMinimized}px)`,
		marginTop: `${NAVBAR_HEIGHT}px`,
	},
	drawerMaximized: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginTop: `${NAVBAR_HEIGHT}px`,
	},
	title: {
		color: theme.palette.primary[500],
		marginBottom: theme.spacing(2),
	},
	titleIcon: {
		marginRight: theme.spacing(1),
	},
})

const DashboardPageTemplate = ({
	title,
	titleIcon: TitleIcon,
	children,
}: Props) => {
	const classes = useStyles()
	const navbarConfiguration = navbarDefaultConfiguration

	const drawerMinimized =
		useSelector(selectDrawerStatus) === 'open' ? false : true

	return (
		<React.Fragment>
			<Grid container>
				{/** Side menu and navbar */}
				<Drawer drawerMenu={defaultDrawerMenu}>
					<Navbar {...navbarConfiguration} />
				</Drawer>

				{/** Internal Content */}
				<Grid
					className={
						drawerMinimized ? classes.drawerMinimized : classes.drawerMaximized
					}
					container
				>
					{children}
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default DashboardPageTemplate
