import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type { QuestionUser, QuestionUserRequest, QuestionUserResponse } from '@models/Question';
import type { RootState } from 'store';

export const postQuestionUser = createAsyncThunk<
	QuestionUser[],
	QuestionUserRequest,
	{ state: RootState }
>(
	'questionUser/postQuestionUser',
	async (params) => {
		const { name, question } = params;

		const { data } = await api.post<QuestionUserResponse>('/public/questions', params);

		if (!data.data) {
			throw new Error('Question was not created');
		}

		const { id, created_at } = data.data;

		return [
			{
				id,
				name,
				question,
				created_at,
			},
		];
	},
	{
		condition: (_, { getState }) => getState().questionUser.loadingStatus !== 'loading',
	}
);
