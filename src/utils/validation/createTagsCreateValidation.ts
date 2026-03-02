import type { TFunction } from 'i18next';
import * as Yup from 'yup';

export const createTagsCreateValidationSchema = (t: TFunction) =>
	Yup.object({
		name: Yup.string().required(t('tagRequire')).matches(/^\S+$/, t('tagNoSpaces')),
	});
