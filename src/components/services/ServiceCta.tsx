import { Link } from 'react-router-dom';

import { CONTACT_PAGE_PATH } from '@constants/routes';

type ServiceCtaProps = {
	title: string;
	text: string;
	button: string;
};

const ServiceCta = ({ title, text, button }: ServiceCtaProps) => (
	<div className={'service-cta'}>
		<div>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
		<Link className={'service-cta-link'} to={`${CONTACT_PAGE_PATH}#contact-form`}>
			{button}
			<span aria-hidden="true">→</span>
		</Link>
	</div>
);

export default ServiceCta;
