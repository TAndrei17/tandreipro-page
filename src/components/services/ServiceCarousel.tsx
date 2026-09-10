import { type ReactNode } from 'react';

type ServiceCarouselProps = {
	items: ReactNode[];
	className: string;
	label: string;
};

const ServiceCarousel = ({ items, className, label }: ServiceCarouselProps) => {
	return (
		<div className={'service-carousel'}>
			<div className={'service-carousel-viewport'} aria-label={label}>
				<div className={className}>{items}</div>
			</div>
		</div>
	);
};

export default ServiceCarousel;
