import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-components'

import GlobalStyle from './core/styled-components/global-style'
import App from './modules/app/containers/app.container'
import { ThemeProvider } from '@material-ui/core/styles'
import { getMaterialTheme } from 'modules/app/config/app.theme'
import { Provider } from 'react-redux'
import { store, persistor } from 'core/redux/redux.store'
import { client } from 'core/graphql/graphql.apollo-client'
import { PersistGate } from 'redux-persist/integration/react'

const WrappedApp = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={getMaterialTheme()}>
          <Router>
            <GlobalStyle />
            <App />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
