import type { RootState } from '../index';

import { questionUserAdapter } from './questionUserSlice';

export const questionUserSelectors = questionUserAdapter.getSelectors<RootState>(
	(state) => state.questionUser
);
