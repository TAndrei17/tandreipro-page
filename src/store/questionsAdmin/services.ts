import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type { Question } from '@models/Question';
import type { QuestionDeleteRequest } from '@models/questionsAdmin';
import type { QuestionsPublicResponse } from '@models/QuestionsPublic';
import type { RootState } from 'store';

export const getQuestionsAdmin = createAsyncThunk<Question[], void, { state: RootState }>(
	'questionsAdmin/getQuestionsAdmin',
	async () => {
		const url = '/admin/questions';
		const { data } = await api.get<QuestionsPublicResponse>(url);

		if (!data.data) {
			throw new Error('Questions not found');
		}

		return data.data;
	},
	{
		condition: (_, { getState }) => getState().questionsAdmin.loadingStatus !== 'loading',
	}
);

export const deleteQuestionAdmin = createAsyncThunk<
	number,
	QuestionDeleteRequest,
	{ state: RootState }
>(
	'questionsAdmin/deleteQuestionAdmin',
	async (params) => {
		const { id } = params;
		const url = `/admin/questions/${id}`;
		await api.delete(url);
		return id;
	},
	{
		condition: (_, { getState }) => getState().questionsAdmin.deletingStatus !== 'loading',
	}
);
