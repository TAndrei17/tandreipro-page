import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type {
	AnswerAdminCreateRequest,
	AnswerAdminCreateResponse,
	Answer,
	AnswerAdminDeleteRequest,
	AnswerAdminDeleteResponse,
	AnswersAdminResponse,
} from '@models/AnswersAdmin';
import type { RootState } from '@store/index';

export const getAnswersAdmin = createAsyncThunk<Answer[], void, { state: RootState }>(
	'answersAdmin/getAnswersAdmin',
	async () => {
		const url = '/admin/answers';
		const { data } = await api.get<AnswersAdminResponse>(url);

		if (!data.success || !data.data) {
			throw new Error(data.message);
		}

		// return Answer[]
		return data.data;
	},
	{
		condition: (_, { getState }) => getState().answersAdmin.loadingStatus !== 'loading',
	}
);

export const postAnswerAdmin = createAsyncThunk<
	Answer,
	AnswerAdminCreateRequest,
	{ state: RootState }
>(
	'answersAdmin/postAnswerAdmin',
	async (params) => {
		const { question_id, content } = params;

		const { data } = await api.post<AnswerAdminCreateResponse>('/admin/answers', params);

		if (!data.success || !data.data) {
			throw new Error(data.message);
		}

		const { id, created_at } = data.data;

		// return Answer
		return {
			id,
			question_id,
			content,
			created_at,
		};
	},
	{
		condition: (_, { getState }) => getState().answersAdmin.creatingStatus !== 'creating',
	}
);

export const deleteAnswerAdmin = createAsyncThunk<
	number,
	AnswerAdminDeleteRequest,
	{ state: RootState }
>(
	'answersAdmin/deleteAnswerAdmin',
	async (params) => {
		const { id } = params;
		const url = `/admin/answers/${id}`;
		const { data } = await api.delete<AnswerAdminDeleteResponse>(url);

		if (!data.success) {
			throw new Error(data.message);
		}

		// return number
		return id;
	},
	{
		condition: (_, { getState }) => getState().answersAdmin.deletingStatus !== 'deleting',
	}
);
