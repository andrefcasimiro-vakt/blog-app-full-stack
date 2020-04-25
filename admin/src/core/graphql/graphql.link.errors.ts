import { onError } from 'apollo-link-error'
import { store } from 'core/redux/redux.store'
import { selectCurrentUser, authLogout } from 'modules/auth/auth.redux'
import { purgeEverything } from './graphql.utils'
import { path, pathOr } from 'ramda'
import { config } from 'modules/app/app.config'

// TODO: Check that backend is throwing a custom authorization and not a INTERNAL SERVER ERROR on gql guards

const logoutErrors = ['E_AUTHORIZATION', 'INTERNAL_SERVER_ERROR']
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
		graphQLErrors &&
		graphQLErrors.find((x) =>
			logoutErrors.includes(pathOr('', ['extensions', 'code'], x)),
		)
	) {
		if (logUserOutOnAuthError) {
			store.dispatch(authLogout())
		}
	}
})

export default linkErrors
