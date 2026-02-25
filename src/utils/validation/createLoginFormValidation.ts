import type { TFunction } from 'i18next';
import * as Yup from 'yup';

export const createLoginValidationSchema = (t: TFunction) =>
	Yup.object({
		email: Yup.string().required(t('emailRequire')).email(t('emailIncorrect')),
		password: Yup.string()
			.required(t('passwordRequire'))
			.min(10, t('passwordMin', { count: 10 }))
			.matches(/(?=.*[a-z])/, t('passwordLowercase'))
			.matches(/(?=.*[A-Z])/, t('passwordUppercase'))
			.matches(/(?=.*\d)/, t('passwordNumber'))
			.matches(/(?=.*[@$!%*?&^#_~])/, t('passwordSpecial')),
	});
