import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { getQuestionsPublic } from './services';

import type { Question } from 'models/Question';

export const questionsPublicAdapter = createEntityAdapter<Question>();

const initialState = questionsPublicAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
	error: null,
});

const questionsPublicSlice = createSlice({
	name: 'questionsPublic',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getQuestionsPublic.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(getQuestionsPublic.fulfilled, (state, action: PayloadAction<Question[]>) => {
				questionsPublicAdapter.setAll(state, action);
				state.loadingStatus = 'idle';
				state.error = null;
			})
			.addCase(getQuestionsPublic.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error;
			});
	},
});

// export const {} = questionsPublicSlice.actions;
export default questionsPublicSlice.reducer;
