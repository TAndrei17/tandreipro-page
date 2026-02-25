import type { Middleware } from '@reduxjs/toolkit';

const logger: Middleware = (store) => (next) => (action: any) => {
	const { type } = action;
	const result = next(action);

	// PREPARE DATA STORE
	const appState = store.getState().app;
	const authState = store.getState().app.auth;
	const tagsState = store.getState().tags;
	const userState = store.getState().user;

	console.group(`Getting data for store. Action '${type}'`);

	switch (type) {
		// SITE START
		case 'app/startApp':
			console.log('App has started', JSON.stringify(appState, null, 2));
			break;

		case 'tags/getTags/fulfilled':
			console.log('Tags in the state:', JSON.stringify(tagsState.entities, null, 2));
			break;

		case 'user/login/fulfilled':
			console.log(
				'LOGIN: User in the state:',
				JSON.stringify(userState, null, 2),
				'LOGIN: Auth status:',
				authState
			);
			break;
	}
	console.groupEnd();
	return result;
};

export default logger;
