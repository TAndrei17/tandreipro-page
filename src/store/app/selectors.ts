import type { RootState } from '../index';

const selectAppStatus = (state: RootState) => state.app.status;

export default selectAppStatus;
