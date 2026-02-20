export type Question = {
	id: number;
	name: string;
	email?: string;
	content: string;
	approved: boolean;
	tags?: number[];
	created_at: string;
};

export interface QuestionUserRequest {
	name: string;
	email: string;
	question: string;
}

export interface QuestionUserResponse {
	success: boolean;
	message: string;
	data?: {
		id: string;
		created_at: string;
	};
	fields?: {
		name?: string;
		email?: string;
		question?: string;
	};
}

export type QuestionUser = {
	id: string;
	name: string;
	question: string;
	created_at: string;
};
