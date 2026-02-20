import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import type { QuestionUser } from 'models/Question';
import { postQuestionUser } from './services';

export const questionUserAdapter = createEntityAdapter<QuestionUser>();

const initialState = questionUserAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
	error: null,
});

const questionUserSlice = createSlice({
	name: 'questionUser',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(postQuestionUser.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(postQuestionUser.fulfilled, (state, action: PayloadAction<QuestionUser[]>) => {
				questionUserAdapter.setAll(state, action);
				state.loadingStatus = 'idle';
				state.error = null;
			})
			.addCase(postQuestionUser.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error;
			});
	},
});

// export const {} = questionsPublicSlice.actions;
export default questionUserSlice.reducer;
