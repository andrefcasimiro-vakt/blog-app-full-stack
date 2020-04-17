import { RootState } from "core/redux/redux.store"
import { useSelector } from "react-redux"

// ----------------------------------------------------------------
// Types & interfaces

export interface AuthUser {
  /** The authenticated user id */
  id: string,
  /** The authenticated username */
  username: string,
  /** The authenticated user email */
  email: string,
  /** The role of the authenticated user */
  role: string,
}

export interface AuthState {
  currentUser: AuthUser | null,
}

// ----------------------------------------------------------------
// Actions
export const AUTH_LOGIN = 'AUTH/LOGIN'
export const AUTH_LOGOUT = 'AUTH/LOGOUT'

interface AuthLoginAction {
  type: typeof AUTH_LOGIN,
  payload: AuthUser,
}

interface AuthLogoutAction {
  type: typeof AUTH_LOGOUT,
}

export type AuthActionTypes = AuthLoginAction | AuthLogoutAction

export const authLogin = (payload: AuthUser): AuthActionTypes => ({
  type: AUTH_LOGIN,
  payload,
})

export const authLogout = (): AuthActionTypes => ({
  type: AUTH_LOGOUT,
})

// ----------------------------------------------------------------
// Selectors
export const selectCurrentUser = () =>
  useSelector((state: RootState) => state.auth.currentUser)

// ----------------------------------------------------------------
// Reducers
const initialState: AuthState = {
  currentUser: null,
}

export const authReducer = (
  state = initialState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        currentUser: null,
      }
    default:
      return state
  }
}
