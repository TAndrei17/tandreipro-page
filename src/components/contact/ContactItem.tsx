import type { ContactType } from '@utils/createUrl';
import createUrl from '@utils/createUrl';
import './ContactItemStyle.css';

type ContactItemProps = {
	label: string;
	value: string;
	type: ContactType;
	logo: string;
	itemProp: string;
};

const ContactItem = ({ label, value, type, logo, itemProp }: ContactItemProps) => (
	<>
		<dt className={'contact-label'}>{label}</dt>
		<dd className={'contact-data'}>
			<div className="contact-row">
				<a href={createUrl(value, type)} itemProp={itemProp}>
					{type === 'telegram' || type === 'linkedIn' ? `@${value}` : value}
				</a>
				<span onClick={() => (window.location.href = createUrl(value, type))}>
					<img src={logo} alt={label} title={label} className="contact-logo" />
				</span>
			</div>
		</dd>
	</>
);

export default ContactItem;
