import type { Question } from './Question';

export interface QuestionsPublicResponse {
	success: boolean;
	message: string;
	data?: Question[];
}
