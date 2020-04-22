import { persistStore } from 'redux-persist'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { appReducer } from 'modules/app/redux/app.redux'
import { authReducer } from 'modules/auth/redux/auth.redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import authEpics from 'modules/auth/epics/auth.epics'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

export const rootEpic = combineEpics(...authEpics)

const epicMiddleware = createEpicMiddleware()

const rootReducer = combineReducers({
	app: appReducer,
	auth: persistReducer(
		{
			key: 'auth',
			whitelist: ['currentUser'],
			storage,
		},
		authReducer,
	),
})

export type RootState = ReturnType<typeof rootReducer>

const middlewares: any[] = [epicMiddleware]

if (process.env.NODE_ENV === 'development') {
	// middlewares.push(secretMiddleware)
}

const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

export const store = createStore(rootReducer, undefined, composedEnhancers)

// Run after creating the store
// @ts-ignore
epicMiddleware.run(rootEpic)

export const persistor = persistStore(store)
