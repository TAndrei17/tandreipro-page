import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from 'store';

import api from '../../api';
import type { PublicAllTagsResponse, Tag } from '@models/Tag';

export const getTags = createAsyncThunk<Tag[], void, { state: RootState }>(
	'tags/getTags',
	async () => {
		const url = '/public/tags';
		const { data } = await api.get<PublicAllTagsResponse>(url);

		if (!data.data) {
			throw new Error('Tags not found');
		}

		return data.data;
	},
	{
		condition: (_, { getState }) => getState().tags.loadingStatus !== 'loading',
	}
);
