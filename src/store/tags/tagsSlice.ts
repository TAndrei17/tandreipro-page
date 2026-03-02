import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { createTag, deleteTag, getTags } from './services';

import type { Tag } from '@models/Tag';

export const tagsAdapter = createEntityAdapter<Tag>();

const initialState = tagsAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	creatingStatus: 'idle' | 'loading' | 'failed';
	deletingStatus: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
	creatingStatus: 'idle',
	deletingStatus: 'idle',
	error: null,
});

const tagsSlice = createSlice({
	name: 'tags',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTags.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(getTags.fulfilled, (state, action: PayloadAction<Tag[]>) => {
				tagsAdapter.setAll(state, action);
				state.loadingStatus = 'idle';
				state.error = null;
			})
			.addCase(getTags.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error;
			})

			.addCase(createTag.pending, (state) => {
				state.creatingStatus = 'loading';
				state.error = null;
			})
			.addCase(createTag.fulfilled, (state, action: PayloadAction<Tag>) => {
				tagsAdapter.addOne(state, action.payload);
				state.creatingStatus = 'idle';
				state.error = null;
			})
			.addCase(createTag.rejected, (state, action) => {
				state.creatingStatus = 'failed';
				state.error = action.error;
			})

			.addCase(deleteTag.pending, (state) => {
				state.deletingStatus = 'loading';
				state.error = null;
			})
			.addCase(deleteTag.fulfilled, (state, action: PayloadAction<number>) => {
				const id = action.payload;
				tagsAdapter.removeOne(state, id);
				state.deletingStatus = 'idle';
				state.error = null;
			})
			.addCase(deleteTag.rejected, (state, action) => {
				state.deletingStatus = 'failed';
				state.error = action.error;
			});
	},
});

// export const {} = questionsPublicSlice.actions;
export default tagsSlice.reducer;
