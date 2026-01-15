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
		<dt>{label}</dt>
		<dd>
			<div className="contact-row">
				<a href={createUrl(value, type)} itemProp={itemProp}>
					{type === 'telegram' ? `@${value}` : value}
				</a>
				<span onClick={() => (window.location.href = createUrl(value, type))}>
					<img src={logo} alt={label} className="contact-logo" />
				</span>
			</div>
		</dd>
	</>
);

export default ContactItem;
