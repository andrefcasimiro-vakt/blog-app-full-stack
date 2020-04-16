import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-components'

import App from './modules/app/containers/app.container'
import { config } from './modules/app/config/app.config'

const httpLink = createHttpLink({
  uri: config.graphql.uri,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const WrappedApp = (
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
