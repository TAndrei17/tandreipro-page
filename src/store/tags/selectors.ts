import type { RootState } from '../index';

import { tagsAdapter } from './tagsSlice';

export const tagsSelectors = tagsAdapter.getSelectors<RootState>((state) => state.tags);
