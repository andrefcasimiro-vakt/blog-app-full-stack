import { AUTH_LOGIN, AUTH_LOGOUT } from '../redux/auth.redux'
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

			return noopAction()
		}),
	)

export default [loginEpic, logoutEpic]
