import type { RootState } from '../index';

import { answersAdminAdapter } from './answersAdminSlice';

export const answersAdminSelectors = answersAdminAdapter.getSelectors<RootState>(
	(state) => state.answersAdmin
);
