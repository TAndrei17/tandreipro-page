import type { TFunction } from 'i18next';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

const list = (t: TFunction): string[] => {
	return [t('web'), t('shop'), t('mobile'), t('maintain')];
};

const ServicesList = ({
	bookmark,
	setBookmark,
}: {
	bookmark: number;
	setBookmark: Dispatch<SetStateAction<number>>;
}) => {
	const { t, i18n } = useTranslation('translation', { keyPrefix: 'services' });
	const servises = list(t);

	return (
		<div className={'services-list'}>
			{servises.map((item, index) => {
				const isActiveItem = index === bookmark;

				return (
					<div
						key={index}
						role="button"
						tabIndex={0}
						onClick={() => setBookmark(index)}
						onKeyDown={(e) => e.key === 'Enter' && setBookmark(index)}
						className={`services-bookmark ${isActiveItem ? 'active-bookmark' : ''}`}
						aria-label={i18n.t('open')}
						title={isActiveItem ? '' : i18n.t('open')}>
						{item}
					</div>
				);
			})}
		</div>
	);
};

export default ServicesList;
