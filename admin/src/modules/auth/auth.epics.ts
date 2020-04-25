import { AUTH_LOGIN, AUTH_LOGOUT } from './auth.redux'
import { ofType } from 'redux-observable'
import { purgeEverything } from 'core/graphql/graphql.utils'
import { map } from 'rxjs/operators'
import { noopAction } from 'core/redux/redux.actions'

const loginEpic = (action$: any) =>
	action$.pipe(
		ofType(AUTH_LOGIN),
		map(() => noopAction()),
	)

const logoutEpic = (action$: any) =>
	action$.pipe(
		ofType(AUTH_LOGOUT),
		map(() => {
			purgeEverything({ resetStore: true })

			return noopAction() // we always need to return an action with rxjs
		}),
	)

export default [loginEpic, logoutEpic]
