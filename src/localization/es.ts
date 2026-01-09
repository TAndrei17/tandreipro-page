import { summaryTextEs } from '@assets/articles/summary';
import { skillsTextEs } from '@assets/articles/skills';
import { teamWorkTextEs } from '@assets/articles/team';
import { positionTextEs } from '@assets/articles/position';

const es = {
	translation: {
		browserTabs: {
			browserTabDefault: 'Andrei Trunkin | Frontend Desarrollador',
			browserTabPageNotFound: 'Esta página no existe',
			browserTabServices: 'Andrei Trunkin | Servicios',
			browserTabAboutMe: 'Andrei Trunkin | Sobre mí',
			browserTabContact: 'Andrei Trunkin | Contacto',
		},

		pageNotFoundDescription: 'La página que buscas no existe o ha sido movida',
		toHome: 'Volver al inicio',

		open: 'Abrir',

		appHeader: {
			logoAria: 'Inicio',
			navAria: 'Navegación principal',
			logoAlt: 'Logo del sitio web',
			services: 'Servicios',
			aboutMe: 'Sobre mí',
			contact: 'Contacto',
			changeLngAlt: 'Cambiar el idioma del sitio web',
			openNavAlt: 'Abrir la navegación del sitio web',
			ru: 'РУ',
			es: 'ES',
			en: 'EN',
		},

		home: {
			sectionButton: 'Saber más',
		},

		services: {
			web: 'Sitios web',
			shop: 'Tiendas en línea',
			mobile: 'Aplicaciones móviles',
			maintain: 'Apoyo a proyectos',

			helpTitle: 'Cómo Ayudo',
			targetClientsTitle: 'A Quién Puedo Ayudar',
			tasksTitle: 'Qué Podemos Resolver Juntos',
			whyWorkWithMeTitle: 'Por Qué Elegirme',

			webHelp:
				'Crearé un sitio web adaptado a tus objetivos: una landing page, un sitio web corporativo o un portafolio.\n\nEl sitio se convertirá en tu oficina online, un lugar donde los clientes podrán conocerte y ponerse en contacto contigo rápidamente.\n\nSitios web adaptativos — se ven igual de bien en ordenadores y teléfonos. Reduzca esta ventana y observe cómo funciona todo.',
			webClients:
				'Colaboro con profesionales independientes, autónomos y empresas.\n\nSi tienes un blog y quieres reunir tus redes sociales en un solo lugar — hagamos un sitio web de una sola página con tu portafolio. ¿Tienes un salón de manicura y buscas clientes? — un sitio web personal te ayudará. ¿Has abierto una fábrica de ventanas? — cuéntaselo a tus clientes en el sitio web de tu empresa.',
			webTasks:
				'Tienes un negocio y quieres darte a conocer en Internet, necesitas un servicio para que los clientes puedan reservar citas o planeas mantener un blog en tu propia plataforma — estas tareas se pueden resolver con un sitio web personal.',
			webWhyMe:
				'Asumo toda la responsabilidad del proyecto, explico las decisiones de manera sencilla y estoy siempre disponible en todas las etapas del trabajo. Puedes estar seguro de que tu sitio web estará listo y funcionará exactamente como se planeó.',

			shopHelp:
				'Crearé un sitio web funcional para una tienda online: prepararé el diseño, lo configuraré y lo publicaré en internet.\n\nTe ayudaré a lanzar una tienda online para vender productos y servicios en una plataforma de e-commerce moderna y fácil de usar.\n\nObtendrás una tienda lista para funcionar, fácil de gestionar y de escalar.',
			shopClients:
				'Trabajo con profesionales independientes, autónomos y empresas.\n\nSi tienes un pequeño negocio y quieres vender productos o servicios en línea, pero un lanzamiento completo parece demasiado costoso, te ayudaré a encontrar una solución simple y accesible. Crearé una tienda online que funcione y pueda crecer sin grandes inversiones iniciales.',
			shopTasks:
				'Incluso las plataformas de e-commerce más fáciles de usar requieren tiempo y conocimientos técnicos: configuración, maquetación, estilos e integración de servicios.\n\nYo me encargo de este trabajo para que puedas centrarte en tu negocio y en las ventas, y no en los detalles técnicos.',
			shopWhyMe:
				'Asumo toda la responsabilidad del proyecto, explico las decisiones de manera sencilla y estoy siempre disponible en todas las etapas del trabajo.',

			mobileHelp:
				'Crearé una aplicación móvil para iOS y Android y la publicaré en App Store y Google Play.\n\nCon la aplicación, puedes: gestionar fácilmente a tu equipo y clientes; registrar el tiempo de trabajo y las tareas; recibir reservas y pedidos directamente desde el teléfono.\n\nTodas las funciones de tu negocio — en una sola aplicación conveniente.',
			mobileClients:
				'Trabajo con profesionales independientes, emprendedores y empresas. Si es necesario, puedo unirme a su equipo para crear la versión móvil de su servicio.\n\nUna aplicación móvil ayudará a su pequeña empresa a gestionar fácilmente al personal y las tareas — todo en un solo lugar.',
			mobileTasks:
				'Te ayudo a convertir tu idea en una aplicación móvil cómoda que resuelve las tareas del negocio y aporta valor.\n\nJuntos analizaremos los objetivos de tu proyecto, revisaremos los procesos y encontraremos la mejor solución para ti. Me encargo del análisis, el diseño y el lanzamiento de la aplicación para que ayude a tu negocio a crecer y desarrollarse.',
			mobileWhyMe:
				'Asumo toda la responsabilidad del proyecto, explico las decisiones de manera sencilla y estoy siempre disponible en todas las etapas del trabajo.',

			maintenanceHelp:
				'Me encargo del soporte y mantenimiento de tu sitio web o aplicación móvil.\n\nLanzar un proyecto es solo el comienzo. Como cualquier casa, un sitio web o una aplicación necesitan cuidado: corregir pequeños problemas, hacer actualizaciones y mejorar su aspecto o funcionamiento. Me aseguro de que todo funcione bien, se mantenga actualizado y no se rompa con el tiempo.',
			maintenanceClients:
				'Ayudo a profesionales independientes, emprendedores y empresas a cuidar sus sitios web y aplicaciones.\n\nSi ya tienes un proyecto, lo revisaré y te diré sinceramente si puedo encargarme de su soporte y desarrollo.',
			maintenanceTasks:
				'Nos ocupamos juntos de tu sitio web o aplicación. Me encargo de todos los asuntos técnicos: corrijo errores, actualizo funciones y diseño, y aseguro la seguridad y estabilidad. Así puedes centrarte en hacer crecer tu negocio sin preocuparte por problemas técnicos.\n\nJuntos analizamos lo que funciona bien y lo que se puede mejorar para que tu sitio web o aplicación siga siendo fácil de usar, moderno y ayude a que tu negocio crezca.',
			maintenanceWhyMe:
				'Asumo toda la responsabilidad del proyecto, explico las decisiones de manera sencilla y estoy siempre disponible en todas las etapas del trabajo.',
		},

		personal: {
			summaryTitle: 'Resumen profesional',
			summaryDesc: summaryTextEs,
			skillsTitle: 'Habilidades',
			skillsDesc: skillsTextEs,
			projectsTitle: 'Proyectos personales',
			positionTitle: 'Colaboración en contratación',
			positionDesc: positionTextEs,
			teamTitle: 'Trabajo en equipo',
			teamDesc: teamWorkTextEs,
		},

		entites: {
			webSectionSubtitle: 'Creando',
			webSectionTitle: 'Sitios web',
			webSectionDescription:
				'Sitios web modernos, rápidos y visualmente impactantes — desde landing pages elegantes hasta proyectos a gran escala.',

			shopSectionSubtitle: 'Lanzando',
			shopSectionTitle: 'Tiendas en línea',
			shopSectionDescription:
				'Tiendas en línea escalables: gestión de productos e inventario, pagos sencillos, base de clientes y herramientas que ayudan a aumentar las ventas.',

			mobileSectionSubtitle: 'Desarrollando',
			mobileSectionTitle: 'Aplicaciones móviles',
			mobileSectionDescription:
				'Aplicaciones rápidas, estables y fáciles de usar para iOS y Android — adaptadas a cualquier necesidad de tu negocio.',

			maintainSectionSubtitle: 'Manteniendo',
			maintainSectionTitle: 'Proyectos existentes',
			maintainSectionDescription:
				'Sitios web en React y aplicaciones en React Native — actualizo el diseño, corrijo errores y pongo el proyecto al día.',
		},
	},
};

export default es;
