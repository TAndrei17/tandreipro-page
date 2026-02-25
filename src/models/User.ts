import type { AuthStatus } from './Auth';

export type User = {
	id: number;
	name: string;
	role: AuthStatus;
};
