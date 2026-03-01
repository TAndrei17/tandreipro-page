import type { Question } from './Question';

export interface QuestionsAdminRequest {
	page?: number;
	limit?: number;
}

export interface QuestionsAdminResponse {
	success: boolean;
	message: string;
	data?: Question[];
	page?: number;
	limit?: number;
	total?: number;
	totalPages?: number;
}

export interface QuestionDeleteRequest {
	id: number;
}

export interface QuestionDeleteResponse {
	success: boolean;
	message: string;
}
