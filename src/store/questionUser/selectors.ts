import type { RootState } from '../index';

const selectQuestionUser = (state: RootState) => state.questionUser.entities;
const selectQuestionUserStatus = (state: RootState) => state.questionUser.loadingStatus;

export { selectQuestionUser, selectQuestionUserStatus };
