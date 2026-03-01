import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { TFunction } from 'i18next';

import type { QuestionDeleteRequest } from '@models/questionsAdmin';
import { deleteQuestionAdmin } from '@store/questionsAdmin/services';
import createAlert from '@utils/createAlert';

const deleteQuestion = (
	request: QuestionDeleteRequest,
	dispatch: ThunkDispatch<any, any, any>,
	t: TFunction
) => {
	const id = request.id;
	try {
		dispatch(deleteQuestionAdmin(request));
		createAlert('success', t('deleteSuccess', { count: id }));
	} catch {
		createAlert('error', t('deleteFail', { count: id }));
	}
};

export default deleteQuestion;
