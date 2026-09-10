type ServiceFactsProps = {
	items: Array<{ label: string; value: string }>;
	className?: string;
};

const ServiceFacts = ({ items, className = '' }: ServiceFactsProps) => (
	<dl className={`service-facts ${className}`.trim()}>
		{items.map((item) => (
			<div key={item.label}>
				<dt>{item.label}</dt>
				<dd>{item.value}</dd>
			</div>
		))}
	</dl>
);

export default ServiceFacts;
