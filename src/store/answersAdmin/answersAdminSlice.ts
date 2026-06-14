import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { deleteAnswerAdmin, getAnswersAdmin, postAnswerAdmin } from './service';

import type { Answer } from '@models/AnswersAdmin';

export const answersAdminAdapter = createEntityAdapter<Answer>();

const initialState = answersAdminAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	creatingStatus: 'idle' | 'creating' | 'failed';
	deletingStatus: 'idle' | 'deleting' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
	creatingStatus: 'idle',
	deletingStatus: 'idle',
	error: null,
});

const answersAdminSlice = createSlice({
	name: 'answersAdmin',
	initialState,
	reducers: {
		removedAdminAnswers: (state) => {
			answersAdminAdapter.removeAll(state);
			state.loadingStatus = 'idle';
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			// GET ALL ADMIN ANSWERS
			.addCase(getAnswersAdmin.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(getAnswersAdmin.fulfilled, (state, action: PayloadAction<Answer[]>) => {
				answersAdminAdapter.setAll(state, action.payload);
				state.loadingStatus = 'idle';
				state.error = null;
			})
			.addCase(getAnswersAdmin.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error;
			})
			// ADD ONE ANSWER
			.addCase(postAnswerAdmin.pending, (state) => {
				state.creatingStatus = 'creating';
				state.error = null;
			})
			.addCase(postAnswerAdmin.fulfilled, (state, action: PayloadAction<Answer>) => {
				answersAdminAdapter.addOne(state, action.payload);
				state.creatingStatus = 'idle';
				state.error = null;
			})
			.addCase(postAnswerAdmin.rejected, (state, action) => {
				state.creatingStatus = 'failed';
				state.error = action.error;
			})
			// DELETE ONE ANSWER BY ID
			.addCase(deleteAnswerAdmin.pending, (state) => {
				state.deletingStatus = 'deleting';
				state.error = null;
			})
			.addCase(deleteAnswerAdmin.fulfilled, (state, action: PayloadAction<number>) => {
				answersAdminAdapter.removeOne(state, action.payload);
				state.deletingStatus = 'idle';
				state.error = null;
			})
			.addCase(deleteAnswerAdmin.rejected, (state, action) => {
				state.deletingStatus = 'failed';
				state.error = action.error;
			});
	},
});

export const { removedAdminAnswers } = answersAdminSlice.actions;
export default answersAdminSlice.reducer;
