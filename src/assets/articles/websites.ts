export const websitesTextRu = `Сайт — это ваше собственное цифровое пространство в интернете, которое работает на вас 24/7. В отличие от соцсетей, здесь вы не зависите от чужих правил и алгоритмов: вы полностью контролируете подачу информации, базу клиентов и всю логику работы.

### Зачем вам нужен сайт

- **Личный кабинет бизнеса в сети.** Удобная площадка, где клиенты могут в любое время изучить услуги, оставить заявку, записаться или оплатить заказ.
- **Доверие и статус.** Профессионально сделанный сайт формирует первое впечатление, повышает узнаваемость и показывает серьезный подход к делу.
- **Автоматизация рутины.** Сайт может сам принимать обращения, отправлять уведомления, выдавать чеки и передавать данные напрямую в вашу CRM.
- **Полная независимость.** Вы владеете своим ресурсом и сохраняете прямую связь с аудиторией.

### Как заказать разработку

1. **Обсуждение.** Вы рассказываете о своих задачах и бизнесе. Я помогаю сформулировать требования и продумать структуру будущего сайта.
2. **Проектирование и дизайн.** Создаю прототип и разрабатываю понятный, удобный интерфейс.
3. **Разработка и интеграция.** Настраиваю логику, верстаю, подключаю необходимые внешние сервисы и тестирую работу на всех устройствах.
4. **Запуск.** Переношу сайт на ваш домен, передаю все доступы и показываю, как им управлять.

### Сроки и стоимость

- **Сроки:** в среднем разработка занимает от 2 до 6 недель, в зависимости от сложности и масштаба проекта.
- **Стоимость:** рассчитывается индивидуально под вашу задачу. Итоговая цена зависит от объема работ, наличия серверной части (бэкенда), сложности дизайна и необходимости подключать внешние сервисы (эквайринг, CRM, системы бронирования и др.).`;

export const websitesTextEn = `A website is your own digital space on the internet, working for you 24/7. Unlike social media, you do not depend on someone else's rules and algorithms: you fully control your information, customer base, and the way everything works.

### Why you need a website

- **Your business office online.** A convenient place where clients can explore your services, send a request, book an appointment, or pay for an order at any time.
- **Trust and credibility.** A professionally built website creates a strong first impression, increases recognition, and shows a serious approach to your work.
- **Routine automation.** Your website can receive inquiries, send notifications, issue receipts, and transfer data directly to your CRM.
- **Complete independence.** You own your resource and keep a direct connection with your audience.

### How to order a website

1. **Discussion.** You tell me about your business and goals. I help define the requirements and plan the structure of the future website.
2. **Planning and design.** I create a prototype and develop a clear, convenient interface.
3. **Development and integration.** I set up the logic, build the interface, connect the required external services, and test everything on all devices.
4. **Launch.** I move the website to your domain, hand over all access details, and show you how to manage it.

### Timeline and pricing

- **Timeline:** development usually takes 2 to 6 weeks, depending on the project's complexity and scope.
- **Pricing:** calculated individually for your project. The final price depends on the workload, whether a backend is needed, design complexity, and any external services such as payment processing, CRM, or booking systems.`;

export const websitesTextEs = `Un sitio web es tu propio espacio digital en internet, que trabaja para ti las 24 horas. A diferencia de las redes sociales, no dependes de reglas ni algoritmos ajenos: controlas por completo la información, la base de clientes y toda la lógica de funcionamiento.

### Por qué necesitas un sitio web

- **Tu oficina de negocio en internet.** Un espacio cómodo donde los clientes pueden consultar tus servicios, enviar una solicitud, reservar una cita o pagar un pedido en cualquier momento.
- **Confianza y credibilidad.** Un sitio web profesional crea una buena primera impresión, aumenta el reconocimiento y demuestra una actitud seria hacia el trabajo.
- **Automatización de tareas.** El sitio puede recibir solicitudes, enviar notificaciones, emitir recibos y transferir los datos directamente a tu CRM.
- **Independencia total.** Eres dueño de tu recurso y mantienes una relación directa con tu audiencia.

### Cómo encargar el desarrollo

1. **Conversación.** Me cuentas tus objetivos y tu negocio. Te ayudo a definir los requisitos y la estructura del futuro sitio.
2. **Planificación y diseño.** Creo un prototipo y desarrollo una interfaz clara y cómoda.
3. **Desarrollo e integración.** Configuro la lógica, maqueto el sitio, conecto los servicios externos necesarios y pruebo su funcionamiento en todos los dispositivos.
4. **Lanzamiento.** Traslado el sitio a tu dominio, te entrego todos los accesos y te muestro cómo gestionarlo.

### Plazos y precio

- **Plazos:** el desarrollo suele durar entre 2 y 6 semanas, según la complejidad y el alcance del proyecto.
- **Precio:** se calcula de forma individual. El coste final depende del volumen de trabajo, la necesidad de un backend, la complejidad del diseño y la conexión de servicios externos como pagos, CRM o sistemas de reservas.`;

export type WebsiteContent = {
	intro: string;
	benefitsTitle: string;
	benefits: Array<{ title: string; text: string }>;
	stepsTitle: string;
	steps: Array<{ title: string; text: string }>;
	timeline: { label: string; value: string };
	pricing: { label: string; value: string };
	ctaTitle: string;
	ctaText: string;
	ctaButton: string;
};

export type ShopContent = {
	intro: string;
	optionsTitle: string;
	options: Array<{ title: string; label: string; audience: string; advantage: string }>;
	benefitsTitle: string;
	benefits: Array<{ title: string; text: string }>;
	timeline: { label: string; value: string };
	pricing: { label: string; value: string };
	ctaTitle: string;
	ctaText: string;
	ctaButton: string;
};

export type MobileContent = {
	intro: string;
	useCasesTitle: string;
	useCases: Array<{ title: string; label: string; text: string }>;
	capabilitiesTitle: string;
	capabilities: Array<{ title: string; text: string }>;
	timeline: { label: string; value: string };
	pricing: { label: string; value: string };
	ctaTitle: string;
	ctaText: string;
	ctaButton: string;
};

export const mobileContentRu: MobileContent = {
	intro:
		'Мобильное приложение — это не инструмент для привлечения первичного холодного трафика, а мощный канал работы с вашей текущей аудиторией. Оно создается тогда, когда важен быстрый доступ к услугам со смартфона и максимальный уровень вовлеченности.',
	useCasesTitle: 'Кому и зачем нужно мобильное приложение',
	useCases: [
		{
			title: 'Постоянные клиенты',
			label: 'Для повторных продаж и лояльности',
			text: 'Приложение всегда под рукой: отправляйте PUSH-уведомления, храните историю заказов, открывайте личный кабинет и удерживайте аудиторию.',
		},
		{
			title: 'Внутренние процессы',
			label: 'Для сотрудников и выездных команд',
			text: 'Закрытые сервисы для курьеров, мастеров и специалистов: таск-трекеры, чаты, отчеты, заявки и управление объектами.',
		},
		{
			title: 'Цифровой продукт',
			label: 'Для стартапов и уникальных сервисов',
			text: 'Площадки объявлений, специализированные калькуляторы, маркетплейсы услуг и другие продукты под вашу бизнес-модель.',
		},
	],
	capabilitiesTitle: 'Что я делаю',
	capabilities: [
		{
			title: 'iOS и Android',
			text: 'Создаю кроссплатформенное приложение сразу для двух основных операционных систем, экономя время и бюджет.',
		},
		{
			title: 'Backend и API',
			text: 'Настраиваю серверную часть, базу данных и безопасный обмен данными с сайтом или CRM.',
		},
		{
			title: 'Публикация в сторах',
			text: 'Беру на себя аккаунты разработчика, модерацию и публикацию в App Store и Google Play.',
		},
	],
	timeline: { label: 'Сроки', value: '1,5–3 месяца' },
	pricing: { label: 'Стоимость', value: 'Индивидуальный расчет' },
	ctaTitle: 'Есть идея мобильного продукта?',
	ctaText: 'Обсудим аудиторию, ключевые сценарии и состав функций для первой версии приложения.',
	ctaButton: 'Обсудить приложение',
};

export const mobileContentEn: MobileContent = {
	intro:
		'A mobile app is not a tool for attracting initial cold traffic, but a powerful channel for working with your existing audience. It makes sense when fast smartphone access to your services and maximum engagement matter.',
	useCasesTitle: 'Who needs a mobile app and why',
	useCases: [
		{
			title: 'Returning customers',
			label: 'For repeat sales and loyalty',
			text: 'The app is always at hand: send push notifications, keep order history, provide an account, and retain your audience.',
		},
		{
			title: 'Internal processes',
			label: 'For employees and field teams',
			text: 'Private tools for couriers, technicians, and specialists: task trackers, chats, reports, requests, and field management.',
		},
		{
			title: 'Digital products',
			label: 'For startups and unique services',
			text: 'Classified platforms, specialized calculators, service marketplaces, and other products built around your business model.',
		},
	],
	capabilitiesTitle: 'What I do',
	capabilities: [
		{
			title: 'iOS and Android',
			text: 'I build a cross-platform app for both major operating systems, saving time and development budget.',
		},
		{
			title: 'Backend and API',
			text: 'I set up the server side, database, and secure data exchange with your website or CRM.',
		},
		{
			title: 'Store publishing',
			text: 'I handle developer accounts, review, and publishing on the App Store and Google Play.',
		},
	],
	timeline: { label: 'Timeline', value: '1.5–3 months' },
	pricing: { label: 'Pricing', value: 'Individual estimate' },
	ctaTitle: 'Have an idea for a mobile product?',
	ctaText:
		'Let’s discuss your audience, key scenarios, and the feature set for the first version of the app.',
	ctaButton: 'Discuss the app',
};

export const mobileContentEs: MobileContent = {
	intro:
		'Una aplicación móvil no es una herramienta para atraer tráfico frío inicial, sino un canal potente para trabajar con tu audiencia actual. Tiene sentido cuando son importantes el acceso rápido a tus servicios desde el teléfono y el máximo nivel de interacción.',
	useCasesTitle: 'A quién y para qué sirve una aplicación móvil',
	useCases: [
		{
			title: 'Clientes habituales',
			label: 'Para compras recurrentes y fidelización',
			text: 'La aplicación está siempre a mano: permite enviar notificaciones push, guardar pedidos, ofrecer una cuenta personal y retener a la audiencia.',
		},
		{
			title: 'Procesos internos',
			label: 'Para empleados y equipos de campo',
			text: 'Servicios privados para repartidores, técnicos y especialistas: tareas, chats, informes, solicitudes y gestión de objetos.',
		},
		{
			title: 'Productos digitales',
			label: 'Para startups y servicios únicos',
			text: 'Plataformas de anuncios, calculadoras especializadas, marketplaces de servicios y otros productos adaptados a tu modelo de negocio.',
		},
	],
	capabilitiesTitle: 'Qué hago',
	capabilities: [
		{
			title: 'iOS y Android',
			text: 'Creo una aplicación multiplataforma para los dos sistemas principales, ahorrando tiempo y presupuesto de desarrollo.',
		},
		{
			title: 'Backend y API',
			text: 'Configuro el servidor, la base de datos y el intercambio seguro de datos con tu sitio o CRM.',
		},
		{
			title: 'Publicación en stores',
			text: 'Me encargo de las cuentas de desarrollador, la moderación y la publicación en App Store y Google Play.',
		},
	],
	timeline: { label: 'Plazos', value: '1,5–3 meses' },
	pricing: { label: 'Precio', value: 'Presupuesto individual' },
	ctaTitle: '¿Tienes una idea para un producto móvil?',
	ctaText: 'Hablemos de tu audiencia, los escenarios clave y las funciones de la primera versión.',
	ctaButton: 'Hablar de la aplicación',
};

export const shopsContentRu: ShopContent = {
	intro:
		'Интернет-магазин — это точка продаж, которая принимает заказы и платежи без вашего прямого участия. Чтобы не переплачивать и запуститься вовремя, важно правильно выбрать подход к разработке.',
	optionsTitle: 'Какой вариант выбрать',
	options: [
		{
			title: 'Готовая платформа',
			label: 'Быстро, доступно и надежно',
			audience:
				'Малому бизнесу, стартапам и брендам, которым нужен быстрый запуск при ограниченном бюджете.',
			advantage:
				'Платформа берет на себя каталог, склад и корзину. Вы получаете полноценный магазин в короткие сроки без лишних расходов на поддержку.',
		},
		{
			title: 'Индивидуальная разработка',
			label: 'Для сложных задач',
			audience:
				'Проектам с нетипичным каталогом, сложной логикой продаж или специфическими требованиями к интеграциям.',
			advantage:
				'Полная свобода в функциях, но потребуется собственный бэкенд, больше времени и существенно больший бюджет.',
		},
	],
	benefitsTitle: 'Что вы получаете в итоге',
	benefits: [
		{
			title: 'Удобный каталог',
			text: 'Фильтры, вариации товаров, размеры и цвета помогают покупателю быстро найти нужный продукт.',
		},
		{ title: 'Безопасная оплата', text: 'Подключаем прием онлайн-платежей прямо на сайте.' },
		{
			title: 'Доставка и склад',
			text: 'Автоматический расчет доставки и актуальный учет остатков.',
		},
		{
			title: 'Клиенты и уведомления',
			text: 'База клиентов и уведомления о заказах на почту или напрямую в CRM.',
		},
	],
	timeline: { label: 'Сроки', value: 'от 2–3 недель' },
	pricing: { label: 'Стоимость', value: 'Платформа выгоднее' },
	ctaTitle: 'Готовы запустить продажи онлайн?',
	ctaText: 'Обсудим ассортимент, подходящую платформу и нужные интеграции для вашего магазина.',
	ctaButton: 'Обсудить магазин',
};

export const shopsContentEn: ShopContent = {
	intro:
		'An online store is a sales point that accepts orders and payments without your direct involvement. To avoid overpaying and launch on time, it is important to choose the right development approach.',
	optionsTitle: 'Which option to choose',
	options: [
		{
			title: 'Ready-made platform',
			label: 'Fast, affordable, and reliable',
			audience:
				'Small businesses, startups, and brands that need a quick launch with a limited budget.',
			advantage:
				'The platform handles the catalog, inventory, and cart. You get a complete store quickly, without unnecessary maintenance costs.',
		},
		{
			title: 'Custom development',
			label: 'For complex requirements',
			audience:
				'Projects with unusual catalogs, complex sales logic, or specific integration requirements.',
			advantage:
				'Complete freedom of functionality, but it requires a custom backend, more time, and a significantly larger budget.',
		},
	],
	benefitsTitle: 'What you get in the end',
	benefits: [
		{
			title: 'Convenient catalog',
			text: 'Filters and product variations such as sizes and colors help customers find the right product quickly.',
		},
		{
			title: 'Secure payments',
			text: 'We connect online payment processing directly on the website.',
		},
		{
			title: 'Delivery and inventory',
			text: 'Automatic delivery calculation and up-to-date stock tracking.',
		},
		{
			title: 'Customers and notifications',
			text: 'A customer database and order notifications by email or directly in your CRM.',
		},
	],
	timeline: { label: 'Timeline', value: 'from 2–3 weeks' },
	pricing: { label: 'Pricing', value: 'Platform is more affordable' },
	ctaTitle: 'Ready to start selling online?',
	ctaText:
		'Let’s discuss your products, the right platform, and the integrations your store needs.',
	ctaButton: 'Discuss the store',
};

export const shopsContentEs: ShopContent = {
	intro:
		'Una tienda online es un punto de venta que recibe pedidos y pagos sin tu participación directa. Para no pagar de más y lanzar el proyecto a tiempo, es importante elegir el enfoque adecuado.',
	optionsTitle: 'Qué opción elegir',
	options: [
		{
			title: 'Plataforma preparada',
			label: 'Rápida, accesible y fiable',
			audience:
				'Pequeñas empresas, startups y marcas que necesitan un lanzamiento rápido con un presupuesto limitado.',
			advantage:
				'La plataforma se encarga del catálogo, el inventario y el carrito. Obtienes una tienda completa en poco tiempo y con menos costes de mantenimiento.',
		},
		{
			title: 'Desarrollo personalizado',
			label: 'Para necesidades complejas',
			audience:
				'Proyectos con catálogos poco habituales, una lógica de ventas compleja o integraciones específicas.',
			advantage:
				'Ofrece total libertad de funciones, pero requiere un backend propio, más tiempo y un presupuesto considerablemente mayor.',
		},
	],
	benefitsTitle: 'Qué obtienes al final',
	benefits: [
		{
			title: 'Catálogo cómodo',
			text: 'Filtros y variaciones como tallas y colores ayudan a encontrar rápidamente el producto adecuado.',
		},
		{
			title: 'Pagos seguros',
			text: 'Conectamos el procesamiento de pagos online directamente en el sitio.',
		},
		{
			title: 'Envíos e inventario',
			text: 'Cálculo automático del envío y control actualizado de las existencias.',
		},
		{
			title: 'Clientes y notificaciones',
			text: 'Base de clientes y avisos de pedidos por correo o directamente en tu CRM.',
		},
	],
	timeline: { label: 'Plazos', value: 'desde 2–3 semanas' },
	pricing: { label: 'Precio', value: 'La plataforma es más económica' },
	ctaTitle: '¿Listo para empezar a vender online?',
	ctaText:
		'Hablemos de tus productos, la plataforma adecuada y las integraciones que necesita tu tienda.',
	ctaButton: 'Hablar de la tienda',
};

export const websitesContentRu: WebsiteContent = {
	intro:
		'Сайт — это ваше собственное цифровое пространство в интернете, которое работает на вас 24/7. В отличие от соцсетей, здесь вы полностью контролируете подачу информации, базу клиентов и всю логику работы.',
	benefitsTitle: 'Зачем вам нужен сайт',
	benefits: [
		{
			title: 'Личный кабинет бизнеса',
			text: 'Клиенты могут изучить услуги, оставить заявку, записаться или оплатить заказ в любое время.',
		},
		{
			title: 'Доверие и статус',
			text: 'Профессиональный сайт формирует первое впечатление и показывает серьезный подход к делу.',
		},
		{
			title: 'Автоматизация рутины',
			text: 'Сайт принимает обращения, отправляет уведомления и передает данные напрямую в CRM.',
		},
		{
			title: 'Полная независимость',
			text: 'Вы владеете своим ресурсом и сохраняете прямую связь со своей аудиторией.',
		},
	],
	stepsTitle: 'Как заказать разработку',
	steps: [
		{
			title: 'Обсуждение',
			text: 'Разбираем задачи бизнеса, формулируем требования и продумываем структуру сайта.',
		},
		{
			title: 'Проектирование и дизайн',
			text: 'Создаю прототип и разрабатываю понятный, удобный интерфейс.',
		},
		{
			title: 'Разработка и интеграция',
			text: 'Настраиваю логику, подключаю внешние сервисы и тестирую сайт на всех устройствах.',
		},
		{
			title: 'Запуск',
			text: 'Переношу сайт на ваш домен, передаю доступы и показываю, как им управлять.',
		},
	],
	timeline: { label: 'Средний срок разработки', value: '2–6 недель' },
	pricing: { label: 'Стоимость', value: 'Индивидуальный расчет' },
	ctaTitle: 'Есть идея или задача?',
	ctaText: 'Обсудим, каким должен быть ваш сайт и какие задачи он будет решать.',
	ctaButton: 'Обсудить проект',
};

export const websitesContentEn: WebsiteContent = {
	intro:
		'A website is your own digital space on the internet, working for you 24/7. Unlike social media, you fully control your information, customer base, and the way everything works.',
	benefitsTitle: 'Why you need a website',
	benefits: [
		{
			title: 'Your business office online',
			text: 'Clients can explore your services, send a request, book an appointment, or pay at any time.',
		},
		{
			title: 'Trust and credibility',
			text: 'A professional website creates a strong first impression and shows a serious approach to your work.',
		},
		{
			title: 'Routine automation',
			text: 'Your website receives inquiries, sends notifications, and transfers data directly to your CRM.',
		},
		{
			title: 'Complete independence',
			text: 'You own your resource and keep a direct connection with your audience.',
		},
	],
	stepsTitle: 'How to order a website',
	steps: [
		{
			title: 'Discussion',
			text: 'We discuss your business goals, define the requirements, and plan the website structure.',
		},
		{
			title: 'Planning and design',
			text: 'I create a prototype and develop a clear, convenient interface.',
		},
		{
			title: 'Development and integration',
			text: 'I set up the logic, connect external services, and test the website on all devices.',
		},
		{
			title: 'Launch',
			text: 'I move the website to your domain, hand over access details, and show you how to manage it.',
		},
	],
	timeline: { label: 'Average development time', value: '2–6 weeks' },
	pricing: { label: 'Pricing', value: 'Individual estimate' },
	ctaTitle: 'Have an idea or a business task?',
	ctaText: 'Let’s discuss what your website should look like and which tasks it should solve.',
	ctaButton: 'Discuss the project',
};

export const websitesContentEs: WebsiteContent = {
	intro:
		'Un sitio web es tu propio espacio digital en internet, que trabaja para ti las 24 horas. A diferencia de las redes sociales, controlas por completo la información, la base de clientes y toda la lógica de funcionamiento.',
	benefitsTitle: 'Por qué necesitas un sitio web',
	benefits: [
		{
			title: 'Tu oficina de negocio en internet',
			text: 'Los clientes pueden consultar tus servicios, enviar una solicitud, reservar una cita o pagar en cualquier momento.',
		},
		{
			title: 'Confianza y credibilidad',
			text: 'Un sitio web profesional crea una buena primera impresión y demuestra una actitud seria hacia el trabajo.',
		},
		{
			title: 'Automatización de tareas',
			text: 'El sitio recibe solicitudes, envía notificaciones y transfiere los datos directamente a tu CRM.',
		},
		{
			title: 'Independencia total',
			text: 'Eres dueño de tu recurso y mantienes una relación directa con tu audiencia.',
		},
	],
	stepsTitle: 'Cómo encargar el desarrollo',
	steps: [
		{
			title: 'Conversación',
			text: 'Analizamos tus objetivos, definimos los requisitos y pensamos la estructura del sitio.',
		},
		{
			title: 'Planificación y diseño',
			text: 'Creo un prototipo y desarrollo una interfaz clara y cómoda.',
		},
		{
			title: 'Desarrollo e integración',
			text: 'Configuro la lógica, conecto servicios externos y pruebo el sitio en todos los dispositivos.',
		},
		{
			title: 'Lanzamiento',
			text: 'Traslado el sitio a tu dominio, te entrego los accesos y te muestro cómo gestionarlo.',
		},
	],
	timeline: { label: 'Tiempo medio de desarrollo', value: '2–6 semanas' },
	pricing: { label: 'Precio', value: 'Presupuesto individual' },
	ctaTitle: '¿Tienes una idea o una tarea?',
	ctaText: 'Hablemos de cómo debe ser tu sitio y qué objetivos debe resolver.',
	ctaButton: 'Hablar del proyecto',
};
