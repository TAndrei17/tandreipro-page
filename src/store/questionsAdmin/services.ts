import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type { Question } from '@models/Question';
import type {
	AdminQuestionUpdateRequest,
	AdminQuestionUpdateResponse,
	AllQuestionsDeleteResponse,
	QuestionDeleteRequest,
	QuestionDeleteResponse,
} from '@models/questionsAdmin';
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

export const deleteAllQuestionsAdmin = createAsyncThunk<void, void, { state: RootState }>(
	'questionsAdmin/deleteAllQuestionsAdmin',
	async () => {
		const url = '/admin/questions';
		const { data } = await api.delete<AllQuestionsDeleteResponse>(url);

		if (!data.success) {
			throw new Error('Failed to delete questions');
		}

		return;
	},
	{
		condition: (_, { getState }) => getState().questionsAdmin.deletingAllStatus !== 'loading',
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
		const { data } = await api.delete<QuestionDeleteResponse>(url);

		if (!data.success) {
			throw new Error('Failed to delete question');
		}

		return id;
	},
	{
		condition: (_, { getState }) => getState().questionsAdmin.deletingStatus !== 'loading',
	}
);

export const updateQuestionAdmin = createAsyncThunk<
	{ id: number; changes: Partial<Omit<Question, 'id'>> },
	AdminQuestionUpdateRequest,
	{ state: RootState }
>(
	'questionsAdmin/updateQuestionAdmin',
	async ({ id, ...changes }) => {
		const url = `/admin/questions/${id}`;
		const { data } = await api.patch<AdminQuestionUpdateResponse>(url, changes);

		if (!data.success) {
			throw new Error('Failed to update the question');
		}

		return { id, changes };
	},
	{
		condition: (_, { getState }) => getState().questionsAdmin.updatingStatus !== 'loading',
	}
);
