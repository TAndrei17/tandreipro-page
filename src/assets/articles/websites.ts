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
