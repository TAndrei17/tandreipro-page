import { useTranslation } from 'react-i18next';
import './SectionStyles.css';
import ButtonRight from '@components/common/UI/ButtonRight';
import { useNavigate } from 'react-router';

type SectionType = {
	title: string;
	subtitle: string;
	description: string;
	buttonText?: string;
	image?: React.ReactNode;
	reverse?: boolean;
};

const HomeSection = ({
	title,
	subtitle,
	description,
	buttonText,
	image,
	reverse = false,
}: SectionType) => {
	const { t } = useTranslation('translation', { keyPrefix: 'home' });
	const navigate = useNavigate();
	const buttonTitle = buttonText ? buttonText : t('sectionButton');

	const navigateToServices: VoidFunction = () => {
		// здесь нужно будет добавить якоря для перехода к конкретному месту страницы
		// navigate('/services#web');
		// якорь - это id в компоненте (id='web')
		// Сам по себе React Router не скроллит к элементу с id="web". Здесь логика скролла - ScrollToHash
		navigate('/services');
	};

	return (
		<section className={`section ${reverse ? 'section-reverse' : ''}`}>
			<div className={reverse ? 'section-content-reverse' : 'section-content'}>
				<h3 className="section-subtitle">{subtitle}</h3>
				<h2
					className="section-title"
					onClick={navigateToServices}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => e.key === 'Enter' && navigateToServices()}>
					{title}
				</h2>
				<p className="section-desc">{description}</p>

				<ButtonRight
					className={'section-btn'}
					onClick={navigateToServices}
					buttonTitle={buttonTitle}
				/>
			</div>

			<div className="section-image-wrapper">
				<div className="section-image-placeholder">{image}</div>
			</div>
		</section>
	);
};

export default HomeSection;
