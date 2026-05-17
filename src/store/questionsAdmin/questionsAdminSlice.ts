import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import {
	deleteAllQuestionsAdmin,
	deleteQuestionAdmin,
	getQuestionsAdmin,
	updateQuestionAdmin,
} from './services';

import type { Question } from 'models/Question';

export const questionsAdminAdapter = createEntityAdapter<Question>();

const initialState = questionsAdminAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	deletingStatus: 'idle' | 'loading' | 'failed';
	deletingAllStatus: 'idle' | 'loading' | 'failed';
	updatingStatus: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
	deletingStatus: 'idle',
	deletingAllStatus: 'idle',
	updatingStatus: 'idle',
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
			// GET ONE
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
			})

			// DELETE ONE
			.addCase(deleteQuestionAdmin.pending, (state) => {
				state.deletingStatus = 'loading';
				state.error = null;
			})
			.addCase(deleteQuestionAdmin.fulfilled, (state, action) => {
				const id = action.payload;
				questionsAdminAdapter.removeOne(state, id);
				state.deletingStatus = 'idle';
				state.error = null;
			})
			.addCase(deleteQuestionAdmin.rejected, (state, action) => {
				state.deletingStatus = 'failed';
				state.error = action.error;
			})

			// DELETE ALL
			.addCase(deleteAllQuestionsAdmin.pending, (state) => {
				state.deletingAllStatus = 'loading';
				state.error = null;
			})
			.addCase(deleteAllQuestionsAdmin.fulfilled, (state) => {
				questionsAdminAdapter.removeAll(state);
				state.deletingAllStatus = 'idle';
				state.error = null;
			})
			.addCase(deleteAllQuestionsAdmin.rejected, (state, action) => {
				state.deletingAllStatus = 'failed';
				state.error = action.error;
			})

			// UPDATE QUESTION
			.addCase(updateQuestionAdmin.pending, (state) => {
				state.updatingStatus = 'loading';
				state.error = null;
			})
			.addCase(
				updateQuestionAdmin.fulfilled,
				(state, action: PayloadAction<{ id: number; changes: Partial<Omit<Question, 'id'>> }>) => {
					const { id, changes } = action.payload;
					questionsAdminAdapter.updateOne(state, {
						id,
						changes,
					});
					state.updatingStatus = 'idle';
					state.error = null;
				}
			)
			.addCase(updateQuestionAdmin.rejected, (state, action) => {
				state.updatingStatus = 'failed';
				state.error = action.error;
			});
	},
});

export const { removedAdminQuestions } = questionsAdminSlice.actions;
export default questionsAdminSlice.reducer;
