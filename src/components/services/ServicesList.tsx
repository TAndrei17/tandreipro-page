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
	const { t } = useTranslation('translation', { keyPrefix: 'services' });
	const servises = list(t);

	return (
		<div className={'services-list'}>
			{servises.map((item, index) => (
				<div
					key={index}
					onClick={() => setBookmark(index)}
					className={`services-bookmark ${index === bookmark ? 'active-bookmark' : ''}`}>
					{item}
				</div>
			))}
		</div>
	);
};

export default ServicesList;
