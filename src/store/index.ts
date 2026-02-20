import { configureStore /* Tuple */ } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { listenerMiddleware } from './middlewares/listenerMiddleware';
import logger from './middlewares/logger';

import appReducer from './app/appSlice';
import questionsPublicReducer from './questionsPublic/questionsPublicSlice';
import questionUserReducer from './questionUser/questionUserSlice';

const ENV = import.meta.env.DEV;
const middlewares = [listenerMiddleware.middleware];

if (ENV) {
	middlewares.push(logger);
}

const store = configureStore({
	reducer: {
		app: appReducer,
		questionsPublic: questionsPublicReducer,
		questionUser: questionUserReducer,
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
