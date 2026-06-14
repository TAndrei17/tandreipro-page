import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { getAnswersPublic } from './service';

import type { Answer } from '@models/AnswersAdmin';

export const answersPublicAdapter = createEntityAdapter<Answer>();

const initialState = answersPublicAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
	error: null,
});

const answersPublicSlice = createSlice({
	name: 'answersPublic',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAnswersPublic.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(getAnswersPublic.fulfilled, (state, action: PayloadAction<Answer[]>) => {
				answersPublicAdapter.setAll(state, action.payload);
				state.loadingStatus = 'idle';
				state.error = null;
			})
			.addCase(getAnswersPublic.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error;
			});
	},
});

export default answersPublicSlice.reducer;
