import React, { Fragment } from 'react'
import { SnackbarProvider } from 'notistack';
import ScrollToTop from 'core/router/scroll-to-top'
import Routes from '../routes/app.routes'

const Content = () => {

  return (
    <Fragment>
      <SnackbarProvider maxSnack={3}>
        <ScrollToTop />
        <Routes />
      </SnackbarProvider>
    </Fragment>
  )
}

export default Content
