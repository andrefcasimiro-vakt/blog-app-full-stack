import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/config/app.theme'
import { SvgIcon } from 'shared/icons/icons.types'
import Navbar from 'shared/navbar/navbar'
import { NavbarProps } from 'shared/navbar/navbar.types'
import Drawer from 'shared/drawer/drawer'
import { Grid } from '@material-ui/core'

interface Props {
  title?: string,
  titleIcon?: SvgIcon,
  children?: React.ReactChild,

  navbarConfiguration?: NavbarProps,
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop: theme.spacing(10),
    // border: '1px solid red',
  },
  content: {
    // border: '1px solid green',
  },
  title: {
    color: theme.palette.primary[500],
    marginBottom: theme.spacing(2),
  },
  titleIcon: {
    marginRight: theme.spacing(1),
  },
});

const DashboardPageTemplate = ({
  title,
  titleIcon: TitleIcon,
  navbarConfiguration,
}: Props) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Drawer>
        <Navbar {...navbarConfiguration} />
      </Drawer>

    </React.Fragment>
  )
}

export default DashboardPageTemplate
