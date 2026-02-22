import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const COOKIE_KEY = 'cookie_consent';

export const useAlertCookie = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'home' });

	useEffect(() => {
		if (localStorage.getItem(COOKIE_KEY)) {
			return;
		}

		toast.info(
			({ closeToast }) => (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: '0 20px',
						gap: 10,
					}}>
					<div
						style={{
							fontSize: '1em',
							color: '#000',
							textAlign: 'center',
						}}>
						{t('cookieAlert')}
					</div>

					<button
						className="btn"
						onClick={() => {
							localStorage.setItem(COOKIE_KEY, 'true');
							closeToast?.();
						}}
						style={{
							alignSelf: 'center',
							backgroundColor: '#e6e6ff',
							color: '#000',
						}}>
						{t('cookieApprove')}
					</button>
				</div>
			),
			{
				position: 'bottom-right',
				autoClose: false,
				closeOnClick: false,
				closeButton: false,
				toastId: 'cookie-consent',
				transition: Slide,
				style: {
					background: '#fff',
					borderRadius: 12,
					padding: '16px 24px',
				},
			}
		);
	}, []);
};
