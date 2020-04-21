import React from 'react'
import { config } from 'modules/app/config/app.config'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography/Typography'
import { NavbarProps } from './navbar.types';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}))

const renderTitle = ({ navbarTitle, ...rest }: NavbarProps) => {
  const classes = useStyles()
  
  return (
    <Typography className={classes.title} variant="h6" noWrap>
      {navbarTitle || config.app.name }
    </Typography>
  )
}

export default renderTitle

