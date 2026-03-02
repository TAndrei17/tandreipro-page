import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { TFunction } from 'i18next';

import createAlert from './createAlert';

import { updateQuestionAdmin } from '@store/questionsAdmin/services';

const updateQuestionStatus = async (
	id: number,
	status: boolean,
	dispatch: ThunkDispatch<any, any, any>,
	t: TFunction
) => {
	const newStatus = !status;
	try {
		await dispatch(updateQuestionAdmin({ id, approved: newStatus }));
		createAlert(
			newStatus ? 'success' : 'info',
			t(newStatus ? 'updateStatusTrue' : 'updateStatusFalse', { count: id })
		);
	} catch {
		createAlert('error', t('updateStatusFail'));
	}
};

export default updateQuestionStatus;
