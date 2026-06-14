import type { RootState } from '../index';

import { answersPublicAdapter } from './answersPublicSlice';

export const answersPublicSelectors = answersPublicAdapter.getSelectors<RootState>(
	(state) => state.answersPublic
);
