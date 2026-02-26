// Slice for interacting with listenerMiddleware
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AuthStatus } from '@models/Auth';
import type { User } from '@models/User';
import { checkAuth, login, logout } from '@store/user/services';

type AppStatus = 'idle' | 'started';

interface AppState {
	status: AppStatus;
	auth: AuthStatus;
}

const initialState: AppState = {
	status: 'idle',
	auth: 'guest',
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		startApp: (state) => {
			state.status = 'started';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action: PayloadAction<User[]>) => {
				const user = action.payload[0];
				state.auth = user?.role ?? 'guest';
			})
			.addCase(checkAuth.fulfilled, (state, action: PayloadAction<User[]>) => {
				const user = action.payload[0];
				state.auth = user?.role ?? 'guest';
			})
			.addCase(checkAuth.rejected, (state) => {
				state.auth = 'guest';
			})
			.addCase(logout.fulfilled, (state) => {
				state.auth = 'guest';
			});
	},
});

export const { startApp } = appSlice.actions;
export default appSlice.reducer;
