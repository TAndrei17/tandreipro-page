import type { RootState } from '../index';

import { questionsPublicAdapter } from './questionsPublicSlice';

export const questionsPublicSelectors = questionsPublicAdapter.getSelectors<RootState>(
	(state) => state.questionsPublic
);
