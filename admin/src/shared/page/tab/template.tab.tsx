import React from 'react'
import Tab from 'shared/tab/tab.component'
import { TabOption } from 'shared/tab/tab.types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from 'modules/app/config/app.theme'
import { Grid, Typography } from '@material-ui/core'
import { SvgIcon } from 'shared/icons/icons.types'

interface Props {
  title?: string,
  titleIcon?: SvgIcon,
  tabs: TabOption[],
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

const TabPageTemplate = ({ title, titleIcon: TitleIcon, tabs }: Props) => {
  const classes = useStyles()

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      xs={12}
    >
        <Grid
          className={classes.content}
          direction="column"
          justify="center"
          alignContent="center"
          xs={12}
          md={6}
          lg={4}
        >
          {title && (
            <Typography className={classes.title} variant="h4">
              {TitleIcon && <TitleIcon className={classes.titleIcon} />}
              <strong>{title}</strong>
            </Typography>
          )}
          <Tab tabs={tabs} />
        </Grid>
    </Grid>
  )
}

export default TabPageTemplate
