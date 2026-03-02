import type { ThunkDispatch } from '@reduxjs/toolkit';

import type { Question } from '@models/Question';
import type { AdminQuestionUpdateRequest } from '@models/questionsAdmin';
import { updateQuestionAdmin } from '@store/questionsAdmin/services';

// Deep comparison of values, supports arrays
const areEqual = (arrayA: any, arrayB: any): boolean => {
	if (Array.isArray(arrayA) && Array.isArray(arrayB)) {
		return (
			arrayA.length === arrayB.length && arrayA.every((value, index) => value === arrayB[index])
		);
	}
	return arrayA === arrayB;
};

const updateQuestionData = async (
	id: number,
	original: Question,
	updated: Question,
	dispatch: ThunkDispatch<any, any, any>
): Promise<'success' | 'fail' | 'noChanges'> => {
	const allowedKeys: (keyof Omit<AdminQuestionUpdateRequest, 'id'>)[] = [
		'name',
		'email',
		'content',
		'tags',
	];

	const params: AdminQuestionUpdateRequest = { id };

	allowedKeys.forEach((key) => {
		const value = updated[key as keyof Question];
		const originalValue = original[key as keyof Question];

		if (!areEqual(value, originalValue)) {
			(params as any)[key] = value;
		}
	});

	// If there are no changes (only id remains)
	if (Object.keys(params).length === 1) {
		return 'noChanges';
	}

	try {
		await dispatch(updateQuestionAdmin(params));
		return 'success';
	} catch {
		return 'fail';
	}
};

export default updateQuestionData;
