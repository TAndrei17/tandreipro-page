import { configureStore /* Tuple */ } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import appReducer from './app/appSlice';
import { listenerMiddleware } from './middlewares/listenerMiddleware';
import logger from './middlewares/logger';
import questionsAdminReducer from './questionsAdmin/questionsAdminSlice';
import questionsPublicReducer from './questionsPublic/questionsPublicSlice';
import questionUserReducer from './questionUser/questionUserSlice';
import tagsReducer from './tags/tagsSlice';
import userReducer from './user/userSlice';

const ENV_DEV = import.meta.env.DEV;
const middlewares = [listenerMiddleware.middleware];

if (ENV_DEV) {
	middlewares.push(logger);
}

const store = configureStore({
	reducer: {
		app: appReducer,
		questionsPublic: questionsPublicReducer,
		questionsAdmin: questionsAdminReducer,
		questionUser: questionUserReducer,
		tags: tagsReducer,
		user: userReducer,
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
