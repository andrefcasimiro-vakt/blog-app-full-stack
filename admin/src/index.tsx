import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-components'

import GlobalStyle from './core/styled-components/global-style'
import App from './modules/app/containers/app.container'
import { config } from './modules/app/config/app.config'
import { ThemeProvider } from '@material-ui/core/styles'
import { getMaterialTheme } from 'modules/app/config/app.theme'

const httpLink = createHttpLink({
  uri: config.graphql.uri,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const WrappedApp = (
  <ApolloProvider client={client}>
    <ThemeProvider theme={getMaterialTheme()}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </ThemeProvider>
  </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
