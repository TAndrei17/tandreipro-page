export type Answer = {
	id: number;
	question_id: number;
	content: string;
	created_at: string;
};

export interface AnswerAdminCreateRequest {
	question_id: number;
	content: string;
}

export interface AnswerAdminCreateResponse {
	success: boolean;
	message: string;
	data?: {
		id: number;
		created_at: string;
	};
}

export interface AnswerAdminDeleteRequest {
	id: number;
}

export interface AnswerAdminDeleteResponse {
	success: boolean;
	message: string;
}

export interface AnswersAdminResponse {
	success: boolean;
	message: string;
	data?: Answer[];
}
