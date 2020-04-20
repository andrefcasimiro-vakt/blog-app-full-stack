import { AUTH_LOGIN, AUTH_LOGOUT } from '../redux/auth.redux'
import { urls } from 'modules/app/routes/app.urls'
import { ActionsObservable} from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';
import { purgeEverything } from 'core/graphql/graphql.utils';
import { ObservableInput } from 'rxjs';

type LoginEpic = ActionsObservable<{
  type: typeof AUTH_LOGIN
}>
const loginEpic = (action$: LoginEpic) =>
  action$
    .ofType(AUTH_LOGIN)
    .pipe(
      map((payload) => window.location.assign(urls.home)),
    )

type LogoutEpic =  ActionsObservable<{
  type: typeof AUTH_LOGOUT
}>
const logoutEpic = (action$: LogoutEpic) =>
  action$
    .ofType(AUTH_LOGOUT)
    .pipe(
      switchMap(
        () => purgeEverything({ resetStore: true })
      ),
      map((payload) => window.location.assign(urls.login)),
    )

export default [loginEpic, logoutEpic]
