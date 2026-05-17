import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

import type { AuthRequest, AuthResponse } from '@models/Auth';
import type { User } from '@models/User';
import type { RootState } from 'store';

export const login = createAsyncThunk<User[], AuthRequest, { state: RootState }>(
	'user/login',
	async (params): Promise<User[]> => {
		const { data } = await api.post<AuthResponse>('/auth/login', params);

		if (!data.data || !data.success) {
			throw new Error('Authentication failed');
		}

		const { id, name, role } = data.data;

		return [
			{
				id,
				name,
				role,
			},
		];
	},
	{
		condition: (_, { getState }) => getState().user.loadingStatus !== 'loading',
	}
);

export const checkAuth = createAsyncThunk<User[], void, { state: RootState }>(
	'user/checkAuth',
	async (): Promise<User[]> => {
		const { data } = await api.get<AuthResponse>('/auth/me');

		if (!data.data || !data.success) {
			throw new Error('Authentication failed');
		}

		const { id, name, role } = data.data;

		return [
			{
				id,
				name,
				role,
			},
		];
	},
	{
		condition: (_, { getState }) => getState().user.loadingStatus !== 'loading',
	}
);

export const logout = createAsyncThunk<void, void, { state: RootState }>(
	'user/logout',
	async (): Promise<void> => {
		const { data } = await api.post<AuthResponse>('/auth/logout');

		if (!data || !data.success) {
			throw new Error('Logout failed');
		}
	},
	{
		condition: (_, { getState }) => getState().user.loadingStatus !== 'loading',
	}
);
