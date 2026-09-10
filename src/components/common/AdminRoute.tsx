import { Navigate } from 'react-router';

import { CONTACT_PAGE_PATH } from '@constants/routes';
import { selectUserStatus } from '@store/app/selectors';
import { useAppSelector } from '@store/index';

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
	const auth = useAppSelector(selectUserStatus);

	if (auth !== 'admin') {
		return <Navigate to={CONTACT_PAGE_PATH} />;
	}

	return children;
};

export default AdminRoute;
