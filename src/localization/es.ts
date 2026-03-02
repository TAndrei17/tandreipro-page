import { contactTextEs } from '@assets/articles/contact';
import { legalTextEs } from '@assets/articles/legal';
import { positionTextEs } from '@assets/articles/position';
import { skillsTextEs } from '@assets/articles/skills';
import { summaryTextEs } from '@assets/articles/summary';
import { teamWorkTextEs } from '@assets/articles/team';

const es = {
	translation: {
		browserTabs: {
			browserTabDefault: 'Andrei Trunkin | Frontend Desarrollador',
			browserTabPageNotFound: 'Esta página no existe',
			browserTabServices: 'Andrei Trunkin | Servicios',
			browserTabAboutMe: 'Andrei Trunkin | Sobre mí',
			browserTabContact: 'Andrei Trunkin | Contacto',
			browserTabLegal: 'Andrei Trunkin | Aviso Legal',
			browserTabDashboard: 'AT | Panel de control',
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
			dashboard: 'Panel de control',
			changeLngAlt: 'Cambiar el idioma del sitio web',
			openNavAlt: 'Abrir la navegación del sitio web',
			ru: 'РУ',
			es: 'ES',
			en: 'EN',
		},

		home: {
			sectionButton: 'Saber más',
			cookieAlert: 'Este sitio utiliza cookies para proteger contra bots (reCAPTCHA)',
			cookieApprove: 'Vale',
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
				'Creo sitios web para negocios y profesionales: landing pages, sitios de presentación y portafolios.\n' +
				'Los visitantes ven a qué te dedicas, consultan ejemplos de tu trabajo y pueden ponerse en contacto contigo.',

			webClients:
				'Trabajo con especialistas independientes, emprendedores y empresas.\n' +
				'Si ofreces servicios, desarrollas una marca personal o estás iniciando un negocio — crearé un sitio web para ayudar a atraer clientes.',

			webTasks:
				'Resolvemos tareas relacionadas con la captación y gestión de tu audiencia.\n' +
				'– Mostrar tus servicios, precios y ejemplos de trabajos.\n' +
				'– Organizar la recepción de solicitudes y consultas.\n' +
				'– Configurar la reserva en línea de tus servicios.\n' +
				'– Crear una sección para publicar artículos y novedades.\n' +
				'– Hacer el sitio web multilingüe para usuarios en distintos idiomas.',

			webWhyMe:
				'Gestiono el proyecto desde la idea hasta el lanzamiento.\n' +
				'Construyo el sitio web, lo alojaré en internet y configuro la indexación en Google. ' +
				'Estructuro el sitio de manera clara y con un marcado correcto — los motores de búsqueda indexan las páginas correctamente.\n' +
				'Explico las decisiones en lenguaje sencillo y muestro cómo utilizar el sitio después del lanzamiento.',

			shopHelp:
				'Creo sitios web para tiendas en línea: diseño, configuración de la plataforma y alojamiento.\n' +
				'Recibirás una tienda lista para vender productos y servicios en una plataforma e-commerce fácil de usar, sencilla de gestionar y escalar.',

			shopClients:
				'Trabajo con especialistas independientes, emprendedores y empresas.\n' +
				'Si tienes un pequeño negocio y quieres vender en línea sin grandes inversiones iniciales — creo una tienda que funciona de inmediato y puede crecer junto con tu negocio.',

			shopTasks:
				'Configurar una tienda online requiere tiempo y conocimientos técnicos: maquetación, estilización, configuración de la plataforma e integración de servicios.\n' +
				'Me encargo de estas tareas para que puedas concentrarte en las ventas y en hacer crecer tu tienda.',

			shopWhyMe:
				'Gestiono el proyecto desde la idea hasta el lanzamiento.\n' +
				'Explico las decisiones en lenguaje sencillo y muestro cómo manejar la tienda después del lanzamiento.\n' +
				'Plazos rápidos, precios transparentes y la tienda funciona desde el primer día.',

			mobileHelp:
				'Crearé una aplicación móvil para iOS y Android y la publicaré en App Store y Google Play.\n\nCon la aplicación, puedes: gestionar fácilmente a tu equipo y clientes; registrar el tiempo de trabajo y las tareas; recibir reservas y pedidos directamente desde el teléfono.\n\nTodas las funciones de tu negocio — en una sola aplicación conveniente.',
			mobileClients:
				'Trabajo con profesionales independientes, emprendedores y empresas. Si es necesario, puedo unirme a su equipo para crear la versión móvil de su servicio.\n\nUna aplicación móvil ayudará a su pequeña empresa a gestionar fácilmente al personal y las tareas — todo en un solo lugar.',
			mobileTasks:
				'Te ayudo a convertir tu idea en una aplicación móvil cómoda que resuelve las tareas del negocio y aporta valor.\n\nJuntos analizaremos los objetivos de tu proyecto, revisaremos los procesos y encontraremos la mejor solución para ti. Me encargo del análisis, el diseño y el lanzamiento de la aplicación para que ayude a tu negocio a crecer y desarrollarse.',
			mobileWhyMe:
				'Asumo la responsabilidad total del proyecto, explico las decisiones en términos sencillos y estoy en contacto en todas las etapas del trabajo. Puede estar seguro de que su aplicación móvil estará lista y funcionará tal como se planeó. Mis precios son accesibles, y no solo desarrollaré la aplicación, sino que también la publicaré en internet. Estoy dispuesto a tener en cuenta sus preferencias de diseño y prestar atención a sus necesidades.',

			maintenanceHelp:
				'Me encargo del soporte y mantenimiento de tu sitio web o aplicación móvil.\n\nLanzar un proyecto es solo el comienzo. Como cualquier casa, un sitio web o una aplicación necesitan cuidado: corregir pequeños problemas, hacer actualizaciones y mejorar su aspecto o funcionamiento. Me aseguro de que todo funcione bien, se mantenga actualizado y no se rompa con el tiempo.',

			maintenanceClients:
				'Ayudo a profesionales independientes, emprendedores y empresas a cuidar sus sitios web y aplicaciones.\n\nSi ya tienes un proyecto, lo revisaré y te diré sinceramente si puedo encargarme de su soporte y desarrollo.',

			maintenanceTasks:
				'Nos ocupamos juntos de tu sitio web o aplicación. Me encargo de todos los asuntos técnicos: corrijo errores, actualizo funciones y diseño, y aseguro la seguridad y estabilidad. Así puedes centrarte en hacer crecer tu negocio sin preocuparte por problemas técnicos.\n' +
				'Juntos analizamos lo que funciona bien y lo que se puede mejorar para que tu sitio web o aplicación siga siendo fácil de usar, moderno y ayude a que tu negocio crezca.',

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

		contact: {
			contactIntro: contactTextEs,
			phone: 'Teléfono',
			whatsApp: 'WhatsApp',
			telegram: 'Telegram',
			email: 'Correo\nelectrónico',
			linkedIn: 'LinkedIn',

			form: {
				title: 'Haz tu pregunta',
				name: 'Nombre',
				email: 'Correo electrónico',
				password: 'Contraseña',
				question: 'Pregunta',
				consent:
					'Doy mi consentimiento para el tratamiento de mis datos personales y la publicación de mi nombre y pregunta en este sitio web',
				check: 'Verificar que no soy un robot',

				submit: 'Enviar',
				submitSuccess: 'Tu pregunta ha sido enviada con éxito',

				loginSuccess: 'Inicio de sesión exitoso',
				save: 'Guardar',
				cancel: 'Cancelar',
			},

			errors: {
				nameRequire: 'Por favor, introduce tu nombre',
				nameMin: 'El nombre es demasiado corto',
				nameMax: 'El nombre es demasiado largo',

				emailRequire: 'Por favor, introduce tu correo electrónico',
				emailIncorrect: 'Introduce una dirección de correo electrónico válida',

				questionRequire: 'Por favor, escribe tu pregunta',
				questionMin: 'La pregunta es demasiado corta (mínimo {{count}} caracteres)',
				questionMax: 'La pregunta es demasiado larga (máximo {{count}} caracteres)',

				consentFail: 'Se requiere consentimiento para el tratamiento de datos personales',

				passwordRequire: 'Por favor, ingrese una contraseña',
				passwordMin: 'La contraseña debe tener al menos {{count}} caracteres',
				passwordLowercase: 'La contraseña debe contener al menos una letra minúscula',
				passwordUppercase: 'La contraseña debe contener al menos una letra mayúscula',
				passwordNumber: 'La contraseña debe contener al menos un número',
				passwordSpecial: 'La contraseña debe contener al menos un carácter especial',

				submitFail: 'No se pudo enviar la pregunta. Inténtalo de nuevo',
				loginFail: 'Error al iniciar sesión. Por favor, inténtalo de nuevo',
			},

			modal: {
				login: 'Iniciar sesión',
				logout: 'Cerrar sesión',
				logoutSuccess: 'Sesión cerrada con éxito',
				logoutFail: 'No se pudo cerrar la sesión',
				editQuestion: 'Moderación de la pregunta',
			},
		},

		dashboard: {
			nav: {
				admin: 'Administrador',
				questions: 'Preguntas',
				tags: 'Etiquetas',
			},
			admin: {
				name: 'Usuario activo',
				role: 'Rol',
				id: 'ID',
			},
			questions: {
				updateStatusTrue: 'La pregunta {{count}} es visible para todos',
				updateStatusFalse: 'Sólo el administrador puede ver la pregunta {{count}}',
				updateStatusFail: 'No se pudo cambiar el estado',
				deleteSuccess: 'La pregunta {{count}} se eliminó correctamente',
				deleteFail: 'No se pudo eliminar la pregunta {{count}}',
				deleteAll: 'Eliminar todas las preguntas',
				deleteAllSuccess: 'Todas las preguntas se eliminaron correctamente',
				deleteAllFail: 'No se pudieron eliminar las preguntas',
				edit: 'Editar',
			},
		},

		legal: {
			title: 'Aviso Legal y Política de Privacidad',
			terms: legalTextEs,
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
