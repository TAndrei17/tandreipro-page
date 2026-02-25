export type AuthRequest = {
	email: string;
	password: string;
	captchaToken?: string | null;
};
