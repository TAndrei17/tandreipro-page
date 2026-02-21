import type { TFunction } from 'i18next';
import * as Yup from 'yup';

export const createQuestionValidationSchema = (t: TFunction) =>
	Yup.object({
		name: Yup.string().required(t('nameRequire')).min(2, t('nameMin')).max(100, t('nameMax')),

		email: Yup.string().required(t('emailRequire')).email(t('emailIncorrect')),

		question: Yup.string()
			.required(t('questionRequire'))
			.min(10, t('questionMin'))
			.max(2000, t('questionMax')),
	});
