import type { ThunkDispatch } from '@reduxjs/toolkit';

import { updateQuestionAdmin } from '@store/questionsAdmin/services';

const updateQuestionStatus = async (
	id: number,
	status: boolean,
	dispatch: ThunkDispatch<any, any, any>
) => {
	const newStatus = !status;
	try {
		await dispatch(updateQuestionAdmin({ id, approved: newStatus }));
		return 'success';
	} catch {
		return 'fail';
	}
};

export default updateQuestionStatus;
