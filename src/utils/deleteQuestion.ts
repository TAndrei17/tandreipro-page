import type { ThunkDispatch } from '@reduxjs/toolkit';

import type { QuestionDeleteRequest } from '@models/questionsAdmin';
import { deleteQuestionAdmin } from '@store/questionsAdmin/services';

const deleteQuestion = (request: QuestionDeleteRequest, dispatch: ThunkDispatch<any, any, any>) => {
	try {
		dispatch(deleteQuestionAdmin(request));
		return 'success';
	} catch {
		return 'fail';
	}
};

export default deleteQuestion;
