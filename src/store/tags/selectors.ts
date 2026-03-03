import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../index';

import { tagsAdapter } from './tagsSlice';

export const tagsSelectors = tagsAdapter.getSelectors<RootState>((state) => state.tags);

export const selectTagsByIds = createSelector(
	[tagsSelectors.selectEntities, (_: RootState, ids?: number[]) => ids],
	(entities, ids) => {
		if (!ids || ids.length === 0) {
			return [];
		}

		return ids.map((id) => entities[id]).filter(Boolean);
	}
);
