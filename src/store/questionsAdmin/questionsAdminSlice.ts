import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { getQuestionsAdmin } from './services';

import type { Question } from 'models/Question';

export const questionsAdminAdapter = createEntityAdapter<Question>();

const initialState = questionsAdminAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
	error: null,
});

const questionsAdminSlice = createSlice({
	name: 'questionsAdmin',
	initialState,
	reducers: {
		removedAdminQuestions: (state) => {
			questionsAdminAdapter.removeAll(state);
			state.loadingStatus = 'idle';
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getQuestionsAdmin.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(getQuestionsAdmin.fulfilled, (state, action: PayloadAction<Question[]>) => {
				questionsAdminAdapter.setAll(state, action.payload);
				state.loadingStatus = 'idle';
				state.error = null;
			})
			.addCase(getQuestionsAdmin.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error;
			});
	},
});

export const { removedAdminQuestions } = questionsAdminSlice.actions;
export default questionsAdminSlice.reducer;
