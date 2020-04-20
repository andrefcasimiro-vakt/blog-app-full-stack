import {
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable'

import authEpics from 'modules/auth/epics/auth.epics'

export const rootEpic = combineEpics(
  ...authEpics,
)

// @ts-ignore
const epicMiddleware = createEpicMiddleware()

export default epicMiddleware
