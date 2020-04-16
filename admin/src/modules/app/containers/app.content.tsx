import React, { Fragment } from 'react'
import ScrollToTop from 'core/router/scroll-to-top'
import Routes from '../routes/app.routes'

const Content = () => {

  return (
    <Fragment>
      <ScrollToTop />
      <Routes />
    </Fragment>
  )
}

export default Content
