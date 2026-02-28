import type { RootState } from '../index';

import { questionsAdminAdapter } from './questionsAdminSlice';

export const questionsAdminSelectors = questionsAdminAdapter.getSelectors<RootState>(
	(state) => state.questionsAdmin
);
