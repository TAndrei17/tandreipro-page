export type AuthStatus = 'guest' | 'user' | 'admin';

export type AuthRequest = {
	email: string;
	password: string;
	turnstileToken?: string | null;
};

export type AuthResponse = {
	success: boolean;
	message: string;
	data?: { id: number; name: string; role: 'user' | 'admin' };
};
