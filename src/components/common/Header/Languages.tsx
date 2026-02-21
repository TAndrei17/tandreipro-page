import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import icons from '@constants/icons';
import './Header.css';
import useDeviceType from '@hooks/useDeviceType';

const Languages = ({
	lngButtons,
	setLngButtons,
}: {
	lngButtons: 'open' | 'closed';
	setLngButtons: Dispatch<SetStateAction<'open' | 'closed'>>;
}) => {
	const { t, i18n } = useTranslation();
	const { isMobile } = useDeviceType();

	useEffect(() => {
		if (lngButtons === 'open') {
			const timer = setTimeout(() => setLngButtons('closed'), 10000);
			return () => clearTimeout(timer);
		}
	}, [lngButtons]);

	const changeLanguage = (lng: string) => {
		localStorage.setItem('userLang', lng);
		i18n.changeLanguage(lng);
		setLngButtons('closed');
	};

	return (
		<div className="languages__container">
			{lngButtons === 'closed' ? (
				<img
					role="button"
					title={t('appHeader.changeLngAlt')}
					alt={t('appHeader.changeLngAlt')}
					aria-haspopup="true"
					aria-expanded={lngButtons !== 'closed'}
					tabIndex={0}
					className="languages__icon"
					src={icons.languages}
					onClick={() => setLngButtons('open')}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							setLngButtons('open');
						}
					}}
				/>
			) : (
				<div className={isMobile ? 'languages__buttons_mobile' : 'languages__buttons'} role="menu">
					<button className="lang__button" role="menuitem" onClick={() => changeLanguage('es')}>
						{t('appHeader.es')}
					</button>
					<button className="lang__button" role="menuitem" onClick={() => changeLanguage('en')}>
						{t('appHeader.en')}
					</button>
					<button className="lang__button" role="menuitem" onClick={() => changeLanguage('ru')}>
						{t('appHeader.ru')}
					</button>
				</div>
			)}
		</div>
	);
};

export default Languages;
