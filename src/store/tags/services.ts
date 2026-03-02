import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type {
	PublicAllTagsResponse,
	Tag,
	TagCreateAdminRequest,
	TagCreateAdminResponse,
	TagDeleteAdminRequest,
	TagDeleteAdminResponse,
} from '@models/Tag';
import type { RootState } from 'store';

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

export const createTag = createAsyncThunk<Tag, TagCreateAdminRequest, { state: RootState }>(
	'tags/createTag',
	async (params) => {
		const url = '/admin/tags';
		const { data } = await api.post<TagCreateAdminResponse>(url, params);

		if (!data.success) {
			throw new Error('Failed to create tag');
		}

		return data.data;
	},
	{
		condition: (_, { getState }) => getState().tags.creatingStatus !== 'loading',
	}
);

export const deleteTag = createAsyncThunk<number, TagDeleteAdminRequest, { state: RootState }>(
	'tags/deleteTag',
	async (params) => {
		const { id } = params;
		const url = `/admin/tags/${id}`;
		const { data } = await api.delete<TagDeleteAdminResponse>(url);

		if (!data.success) {
			throw new Error('Failed to delete tag');
		}

		return id;
	},
	{
		condition: (_, { getState }) => getState().tags.deletingStatus !== 'loading',
	}
);
