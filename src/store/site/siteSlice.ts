// Slice for interacting with listenerMiddleware
import { createSlice } from '@reduxjs/toolkit';

type SiteStatus = 'idle' | 'started';

interface SiteState {
	status: SiteStatus;
}

const initialState: SiteState = {
	status: 'idle',
};

const siteSlice = createSlice({
	name: 'site',
	initialState,
	reducers: {
		startSite: (state) => {
			state.status = 'started';
		},
	},
});

export const { startSite } = siteSlice.actions;
export default siteSlice.reducer;
