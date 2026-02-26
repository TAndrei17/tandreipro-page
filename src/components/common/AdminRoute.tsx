import { Navigate } from 'react-router';

import { selectUserStatus } from '@store/app/selectors';
import { useAppSelector } from '@store/index';

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
	const auth = useAppSelector(selectUserStatus);

	if (auth !== 'admin') {
		return <Navigate to="/contact" />;
	}

	return children;
};

export default AdminRoute;
