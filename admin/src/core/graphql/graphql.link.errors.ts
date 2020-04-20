
import { onError } from 'apollo-link-error'
import { config } from 'modules/app/config/app.config'
import { store } from 'core/redux/redux.store'
import { selectCurrentUser, authLogout } from 'modules/auth/redux/auth.redux'
import { purgeEverything } from './graphql.utils'
import { path } from 'ramda'

const linkErrors = onError(({ graphQLErrors, networkError }) => {
  const { logUserOutOnAuthError } = config.app.options

  const currentUser = selectCurrentUser(store.getState())

  if (networkError) {
    if (currentUser) {
      store.dispatch(authLogout())
    } else {
      purgeEverything({ resetStore: false })
    }
  }

  if (
    graphQLErrors
    && graphQLErrors.find(x => path(['data', 'code'], x) === 'E_AUTHORIZATION')
  ) {
    if (logUserOutOnAuthError) {
      store.dispatch(authLogout())
    }
  }

})

export default linkErrors
