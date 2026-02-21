/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Middleware } from '@reduxjs/toolkit';

const logger: Middleware = (store) => (next) => (action: any) => {
	const { type } = action;

	// PREPARE DATA STORE
	const appState = store.getState().app;
	const tagsState = store.getState().tags;

	console.group(`Getting data for store. Action '${type}'`);
	const result = next(action);

	switch (type) {
		// SITE START
		case 'app/startApp':
			console.log('App has started', JSON.stringify(appState, null, 2));
			break;

		case 'tags/getTags':
			console.log('Tags in the state:', JSON.stringify(tagsState.entities, null, 2));
			break;
	}
	console.groupEnd();
	return result;
};

export default logger;
