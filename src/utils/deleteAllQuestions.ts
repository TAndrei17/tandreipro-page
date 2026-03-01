import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { TFunction } from 'i18next';

import createAlert from './createAlert';

import { deleteAllQuestionsAdmin } from '@store/questionsAdmin/services';

const deleteAllQuestions = async (dispatch: ThunkDispatch<any, any, any>, t: TFunction) => {
	try {
		await dispatch(deleteAllQuestionsAdmin());
		createAlert('success', t('deleteAllSuccess'));
	} catch {
		createAlert('error', t('deleteAllfail'));
	}
};

export default deleteAllQuestions;
