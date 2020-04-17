import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  authReducer
} from 'modules/auth/redux/auth.redux'

const rootReducer = combineReducers({
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const middlewares: any[] = []
if (process.env.NODE_ENV === 'development') {
  // middlewares.push(secretMiddleware)
}

const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

export const store = createStore(
  rootReducer,
  undefined,
  composedEnhancers,
)
