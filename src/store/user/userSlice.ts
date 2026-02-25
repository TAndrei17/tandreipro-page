import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { login, logout } from './services';

import type { User } from '@models/User';

export const userAdapter = createEntityAdapter<User>();

const initialState = userAdapter.getInitialState<{
	loadingStatus: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}>({
	loadingStatus: 'idle',
	error: null,
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<User[]>) => {
				userAdapter.setAll(state, action.payload);
				state.loadingStatus = 'idle';
				state.error = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error;
			})

			.addCase(logout.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(logout.fulfilled, (state) => {
				userAdapter.removeAll(state);
				state.loadingStatus = 'idle';
				state.error = null;
			})
			.addCase(logout.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error;
			});
	},
});

// export const {} = questionsPublicSlice.actions;
export default userSlice.reducer;
