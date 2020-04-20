import { persistStore } from 'redux-persist'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  authReducer
} from 'modules/auth/redux/auth.redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage';
import epicMiddleware, { rootEpic } from './redux.middleware.epic';

const rootReducer = combineReducers({
  auth: persistReducer({
    key: 'auth',
    whitelist: ['currentUser'],
    storage,
  }, authReducer),
})

export type RootState = ReturnType<typeof rootReducer>

const middlewares: any[] = [
  epicMiddleware,
]

// @ts-ignore (FIX LATER)
epicMiddleware.run(rootEpic)

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

export const persistor = persistStore(store)
