import type { ThunkDispatch } from '@reduxjs/toolkit';

import { deleteAllQuestionsAdmin } from '@store/questionsAdmin/services';

const deleteAllQuestions = async (dispatch: ThunkDispatch<any, any, any>) => {
	try {
		await dispatch(deleteAllQuestionsAdmin());
		return 'success';
	} catch {
		return 'fail';
	}
};

export default deleteAllQuestions;
