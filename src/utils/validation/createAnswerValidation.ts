import type { TFunction } from 'i18next';
import * as Yup from 'yup';

export const createAnswerValidationSchema = (t: TFunction) =>
	Yup.object({
		question_id: Yup.number().required(),
		content: Yup.string().trim().required(t('answerRequire')),
	});
