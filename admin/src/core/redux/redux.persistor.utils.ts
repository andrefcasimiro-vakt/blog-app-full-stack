import { persistor } from './redux.store'

export const purgePersistor = (): Promise<void> => persistor.purge()
