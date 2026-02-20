import { createListenerMiddleware } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from '../index';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

// Get favorite podcasts from AsyncStorage after app start
/* startAppListening({
	actionCreator: startApp,
	effect: async (_, { getState, dispatch }) => {},
}); */
