export type AuthStatus = 'guest' | 'user' | 'admin';

export type AuthRequest = {
	email: string;
	password: string;
	captchaToken?: string | null;
};

export type AuthResponse = {
	success: boolean;
	id: number;
	name: string;
	role: AuthStatus;
};
