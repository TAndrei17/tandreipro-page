import type { RootState } from '../index';

const selectTags = (state: RootState) => state.tags.entities;
const selecttagsIds = (state: RootState) => state.tags.ids;
const selectTagsStatus = (state: RootState) => state.tags.loadingStatus;

export { selectTags, selecttagsIds, selectTagsStatus };
