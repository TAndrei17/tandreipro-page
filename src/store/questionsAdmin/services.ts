import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type { Question } from '@models/Question';
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
