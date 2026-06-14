import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type { Answer } from '@models/AnswersAdmin';
import type { AnswersAdminResponse } from '@models/AnswersAdmin';
import type { RootState } from 'store';

export const getAnswersPublic = createAsyncThunk<Answer[], void, { state: RootState }>(
	'answersPublic/getAnswersPublic',
	async () => {
		const url = '/public/answers';
		const { data } = await api.get<AnswersAdminResponse>(url);

		if (!data.success || !data.data) {
			throw new Error(data.message);
		}

		return data.data;
	},
	{
		condition: (_, { getState }) => getState().answersPublic.loadingStatus !== 'loading',
	}
);
