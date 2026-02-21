import { createListenerMiddleware } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from '../index';

import { startApp } from '@store/app/appSlice';
import { getQuestionsPublic } from '@store/questionsPublic/services';
import { getTags } from '@store/tags/services';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

// Get approved questions after app start
startAppListening({
	actionCreator: startApp,
	effect: async (_, { dispatch }) => {
		dispatch(getQuestionsPublic());
		dispatch(getTags());
	},
});
