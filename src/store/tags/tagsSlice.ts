import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { getTags } from './services';

import type { Tag } from '@models/Tag';

export const tagsAdapter = createEntityAdapter<Tag>();

const initialState = tagsAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
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
			});
	},
});

// export const {} = questionsPublicSlice.actions;
export default tagsSlice.reducer;
