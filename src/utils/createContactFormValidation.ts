import type { TFunction } from 'i18next';
import * as Yup from 'yup';

export const createQuestionValidationSchema = (t: TFunction) =>
	Yup.object({
		name: Yup.string()
			.required(t('contact.errors.nameRequire'))
			.min(2, t('contact.errors.nameMin'))
			.max(100, t('contact.errors.nameMax')),

		email: Yup.string()
			.required(t('contact.errors.emailRequire'))
			.email(t('contact.errors.emailIncorrect')),

		question: Yup.string()
			.required(t('contact.errors.questionRequire'))
			.min(10, t('contact.errors.questionMin'))
			.max(2000, t('contact.errors.questionMax')),
	});
