import type { RootState } from '../index';

const selectQuestionsPublic = (state: RootState) => state.questionsPublic.entities;
const selectQuestionsPublicIds = (state: RootState) => state.questionsPublic.ids;
const selectQuestionsPublicStatus = (state: RootState) => state.questionsPublic.loadingStatus;

export { selectQuestionsPublic, selectQuestionsPublicIds, selectQuestionsPublicStatus };
