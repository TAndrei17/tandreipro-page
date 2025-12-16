// import { useTranslation } from 'react-i18next';
import '../home/SectionStyles.css';
import './SectionStyle.css';

const ServiceSection = ({
	id,
	bookmark,
	title,
}: {
	id: number;
	bookmark: number;
	title: string;
}) => {
	// const { t } = useTranslation();
	const sectionId = id.toString();

	if (id !== bookmark) {
		return null;
	}

	return (
		<section id={sectionId}>
			<article>
				<h2 className="section-title">{title}</h2>
			</article>
		</section>
	);
};

export default ServiceSection;
