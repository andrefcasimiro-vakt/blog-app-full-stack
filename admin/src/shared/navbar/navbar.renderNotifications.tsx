import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { config } from 'modules/app/config/app.config'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography/Typography'
import { fade } from '@material-ui/core/styles/colorManipulator'
import InputBase from '@material-ui/core/InputBase/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton/IconButton'
import Badge from '@material-ui/core/Badge/Badge'
import theme from 'modules/app/config/app.theme';
import { NavbarProps } from './navbar.types';

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
      <IconButton aria-label="show 17 new notifications" color="default">
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </div>
  )
}

export default renderNotifications

