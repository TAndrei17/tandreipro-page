import type { RootState } from '../index';

import { userAdapter } from './userSlice';

export const userSelectors = userAdapter.getSelectors<RootState>((state) => state.user);
