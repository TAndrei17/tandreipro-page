/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Middleware } from '@reduxjs/toolkit';

const logger: Middleware = (store) => (next) => (action: any) => {
	const { type } = action;

	// PREPARE DATA STORE
	const siteState = store.getState().site;

	console.group(`Getting data for store. Action '${type}'`);
	const result = next(action);

	switch (type) {
		// SITE START
		case 'site/startSite':
			console.log('Site has started', JSON.stringify(siteState, null, 2));
			break;
	}
	console.groupEnd();
	return result;
};

export default logger;
