import { configureStore /* Tuple */ } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { listenerMiddleware } from './middlewares/listenerMiddleware.js';
import siteReducer from '../store/site/siteSlice.js';
import logger from './middlewares/logger.js';

const ENV = import.meta.env.DEV;
const middlewares = [listenerMiddleware.middleware];

if (ENV) {
	middlewares.push(logger);
}

const store = configureStore({
	reducer: {
		site: siteReducer,
	},

	// https://redux-toolkit.js.org/api/getDefaultMiddleware#intended-usage
	// middleware: () => new Tuple(logger),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export type { RootState, AppDispatch };
export { useAppDispatch, useAppSelector };
export default store;
