import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SeoMetadata = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		const canonicalUrl = new URL(pathname, window.location.origin).toString();
		const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
		const openGraphUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');

		if (canonicalLink) {
			canonicalLink.href = canonicalUrl;
		}

		if (openGraphUrl) {
			openGraphUrl.content = canonicalUrl;
		}

		document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]').forEach((link) => {
			link.href = canonicalUrl;
		});
	}, [pathname]);

	return null;
};

export default SeoMetadata;
