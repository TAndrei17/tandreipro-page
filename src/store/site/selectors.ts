import type { RootState } from '../index';

const selectSiteStatus = (state: RootState) => state.site.status;

export default selectSiteStatus;
