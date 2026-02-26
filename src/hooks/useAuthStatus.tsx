import type { AuthStatus } from '@models/Auth';
import { selectUserStatus } from '@store/app/selectors';
import { useAppSelector } from '@store/index';

export const useAuthStatus = (): AuthStatus => {
	const auth = useAppSelector(selectUserStatus);
	return auth;
};

export default useAuthStatus;
