import { RootState } from 'core/redux/redux.store'

// ----------------------------------------------------------------
// Types & interfaces

type DrawerStatus = 'open' | 'closed'

export interface AppState {
	drawerStatus: DrawerStatus
}

// ----------------------------------------------------------------
// Actions
export const OPEN_DRAWER = 'APP/OPEN_DRAWER'
export const CLOSE_DRAWER = 'APP/CLOSE_DRAWER'

interface OpenDrawerAction {
	type: typeof OPEN_DRAWER
}

interface CloseDrawerAction {
	type: typeof CLOSE_DRAWER
}

export type AppActions = OpenDrawerAction | CloseDrawerAction

export const updateDrawer = (type: DrawerStatus) =>
	type === 'open' ? openDrawer() : closeDrawer()

export const openDrawer = (): AppActions => ({
	type: OPEN_DRAWER,
})

export const closeDrawer = (): AppActions => ({
	type: CLOSE_DRAWER,
})

// ----------------------------------------------------------------
// Selectors

export const selectDrawerStatus = (state: RootState) => state.app.drawerStatus

// ----------------------------------------------------------------
// Reducers
const initialState: AppState = {
	drawerStatus: 'open',
}

export const appReducer = (
	state = initialState,
	action: AppActions,
): AppState => {
	switch (action.type) {
		case OPEN_DRAWER:
			return {
				...state,
				drawerStatus: 'open',
			}
		case CLOSE_DRAWER:
			return {
				...state,
				drawerStatus: 'closed',
			}
		default:
			return state
	}
}
