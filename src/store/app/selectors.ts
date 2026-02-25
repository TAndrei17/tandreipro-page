import type { RootState } from '../index';

const selectAppStatus = (state: RootState) => state.app.status;
const selectUserStatus = (state: RootState) => state.app.auth;

export default selectAppStatus;
export { selectUserStatus };
