import React from 'react'
import DashboardPageTemplate from 'shared/page/dashboard/template'
import { navbarDefaultConfiguration } from 'shared/navbar/configurations/navbar.configuration.default'

const HomePage = () => {

  return (
    <DashboardPageTemplate
      title="Home"
      navbarConfiguration={navbarDefaultConfiguration}
    >
      <h2>Content</h2>
    </DashboardPageTemplate>
  )
}

export default HomePage
