// Slice for interacting with listenerMiddleware
import { createSlice } from '@reduxjs/toolkit';

type AppStatus = 'idle' | 'started';

interface AppState {
	status: AppStatus;
}

const initialState: AppState = {
	status: 'idle',
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		startApp: (state) => {
			state.status = 'started';
		},
	},
});

export const { startApp } = appSlice.actions;
export default appSlice.reducer;
