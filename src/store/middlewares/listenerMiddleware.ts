import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from '../index';

import { startApp } from '@store/app/appSlice';
import { removedAdminQuestions } from '@store/questionsAdmin/questionsAdminSlice';
import { getQuestionsAdmin } from '@store/questionsAdmin/services';
import { getQuestionsPublic } from '@store/questionsPublic/services';
import { getTags } from '@store/tags/services';
import { checkAuth, login, logout } from '@store/user/services';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

// Get approved questions after app start
startAppListening({
	actionCreator: startApp,
	effect: async (_, { dispatch }) => {
		dispatch(checkAuth());
		dispatch(getQuestionsPublic());
		dispatch(getTags());
	},
});

// Get all questions after login/checkAuth
startAppListening({
	matcher: isAnyOf(login.fulfilled, checkAuth.fulfilled),
	effect: async (_, { dispatch }) => {
		dispatch(getQuestionsAdmin());
	},
});

// Remove all questions after logout
startAppListening({
	actionCreator: logout.fulfilled,
	effect: async (_, { dispatch }) => {
		dispatch(removedAdminQuestions());
	},
});
