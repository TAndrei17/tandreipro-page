import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type { Question } from '@models/Question';
import type { QuestionsPublicResponse } from '@models/QuestionsPublic';
import type { RootState } from 'store';

export const getQuestionsPublic = createAsyncThunk<Question[], void, { state: RootState }>(
	'questionsPublic/getQuestionsPublic',
	async () => {
		const url = '/public/questions';
		const { data } = await api.get<QuestionsPublicResponse>(url);

		if (!data.data) {
			throw new Error('Questions not found');
		}

		return data.data;
	},
	{
		condition: (_, { getState }) => getState().questionsPublic.loadingStatus !== 'loading',
	}
);
