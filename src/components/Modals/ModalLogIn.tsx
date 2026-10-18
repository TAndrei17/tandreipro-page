import { lazy, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useAuthStatus from '@hooks/useAuthStatus';
import { useAppDispatch } from '@store/index';
import { logout } from '@store/user/services';
import createAlert from '@utils/createAlert';

const LoginFormModal = lazy(() => import('./LoginFormModal'));

const ModalLogin = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation('translation', { keyPrefix: 'contact.modal' });
	const whoami = useAuthStatus();
	const [isOpen, setIsOpen] = useState(false);

	const openSession = async () => {
		if (whoami === 'guest') {
			setIsOpen(true);
			return;
		}

		try {
			await dispatch(logout()).unwrap();
			createAlert('success', t('logoutSuccess'));
		} catch {
			createAlert('error', t('logoutFail'));
		}
	};

	return (
		<>
			<span className="modal-window-link" onClick={openSession}>
				{whoami === 'guest' ? t('login') : t('logout')}
			</span>
			{isOpen && (
				<Suspense fallback={null}>
					<LoginFormModal onClose={() => setIsOpen(false)} />
				</Suspense>
			)}
		</>
	);
};

export default ModalLogin;
