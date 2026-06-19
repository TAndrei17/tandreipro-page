import type { TFunction } from 'i18next';
import * as Yup from 'yup';

export const createAnswerValidationSchema = (t: TFunction) =>
	Yup.object({
		question_id: Yup.number().required(),
		content: Yup.string()
			.trim()
			.required(t('answerRequire'))
			.min(10, t('answerMin', { count: 10 }))
			.max(2000, t('answerMax', { count: 2000 })),
	});
