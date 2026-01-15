export type ContactType = 'phone' | 'email' | 'whatsApp' | 'telegram' | 'linkedIn';

const createUrl = (contact: string, type: ContactType): string => {
	if (!contact) {
		return '';
	}

	const sanitized = contact.replace(/\s+/g, '');

	const urlMap: Record<ContactType, string> = {
		phone: `tel:${sanitized}`,
		email: `mailto:${contact}`,
		whatsApp: `https://wa.me/${sanitized}`,
		telegram: `https://t.me/${contact}`,
		linkedIn: `https://www.linkedin.com/in/${contact}`,
	};

	return urlMap[type] ?? '';
};

export default createUrl;
