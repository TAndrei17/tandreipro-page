import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from 'store';

import api from '../../api';
import type { Question } from '@models/Question';
import type { QuestionsPublicResponse } from '@models/QuestionsPublic';

export const getQuestionsPublic = createAsyncThunk<Question[], void, { state: RootState }>(
	'questionsPublic/getQuestionsPublic',
	async () => {
		// Fetch approved questions
		const url = '/public/questions';
		const { data } = await api.get<QuestionsPublicResponse>(url);

		if (!data.data) {
			throw new Error('Questions not found'); // добавить переводы
		}

		return data.data;
	},
	{
		condition: (_, { getState }) => getState().questionsPublic.loadingStatus !== 'loading',
	}
);
