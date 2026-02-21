import { summaryTextEn } from '@assets/articles/summary';
import { skillsTextEn } from '@assets/articles/skills';
import { teamWorkTextEn } from '@assets/articles/team';
import { positionTextEn } from '@assets/articles/position';
import { contactTextEn } from '@assets/articles/contact';
import { legalTextEn } from '@assets/articles/legal';

const en = {
	translation: {
		browserTabs: {
			browserTabDefault: 'Andrei Trunkin | Frontend Developer',
			browserTabPageNotFound: 'This page does not exist',
			browserTabServices: 'Andrei Trunkin | Services',
			browserTabAboutMe: 'Andrei Trunkin | About Me',
			browserTabContact: 'Andrei Trunkin | Contact',
			browserTabLegal: 'Andrei Trunkin | Legal & Privacy',
		},

		pageNotFoundDescription: 'The page you are looking for does not exist or has been moved',
		toHome: 'Back to Home',

		open: 'Open',

		appHeader: {
			logoAria: 'Home',
			navAria: 'Main navigation',
			logoAlt: 'Website logo',
			services: 'Services',
			aboutMe: 'About me',
			contact: 'Contact',
			changeLngAlt: 'Change website language',
			openNavAlt: 'Open website navigation',
			ru: 'РУ',
			es: 'ES',
			en: 'EN',
		},

		home: {
			sectionButton: 'Learn More',
		},

		services: {
			web: 'Websites',
			shop: 'Online Stores',
			mobile: 'Mobile Apps',
			maintain: 'Project Support',

			helpTitle: 'How I Help',
			targetClientsTitle: 'Who I Can Help',
			tasksTitle: 'What We Can Solve Together',
			whyWorkWithMeTitle: 'Why Choose Me',

			webHelp:
				'I will create a website tailored to your goals: a landing page, a business card website, or a portfolio.\n\nThe site will become your online office — a place where clients can get to know you and contact you quickly.\n\nResponsive websites — they look equally neat on both computers and phones. Resize this window and see how everything works.',
			webClients:
				"I collaborate with freelancers, individual entrepreneurs, and companies.\n\nIf you run a blog and want to gather your social media in one place — let's create a one-page website with your portfolio. Do you have a manicure salon and are looking for clients — a personal website will help you. Have you opened a window manufacturing factory — tell your clients about it on your company website.",
			webTasks:
				'You run a business and want to establish your presence online, you need a service for client appointment booking or you plan to run a blog on your own platform — these tasks can be solved with a personal website.',
			webWhyMe:
				'I take full responsibility for the project, explain decisions in simple terms, and stay in touch at every stage of the work. You can be sure your website will be ready and function exactly as intended. My prices are affordable, and I will not only build your website but also deploy it online. I am ready to consider your design preferences and pay close attention to your needs.',

			shopHelp:
				'I will create a functional website for an online store: prepare the design, set it up, and publish it online.\n\nI will help you launch an online store for selling products and services on a modern and user-friendly e-commerce platform.\n\nYou will get a store that is ready to use, easy to manage, and easy to scale.',
			shopClients:
				'I work with independent professionals, entrepreneurs, and businesses.\n\nIf you have a small business and want to sell products or services online, but a full launch seems too expensive, I will help you find a simple and affordable solution. I will create an online store that works and can grow without large upfront investments.',
			shopTasks:
				'Even the most user-friendly e-commerce platforms require time and technical knowledge: setup, layout, styling, and service integrations.\n\nI take care of this work so you can focus on your business and sales instead of technical details.',
			shopWhyMe:
				'I take full responsibility for the project, explain decisions in simple terms, and stay in touch at every stage of the work. My prices are affordable, and the development timeline is fast. You can be sure your online store will be ready and will function exactly as intended.',

			mobileHelp:
				'Create a mobile app for iOS and Android and publish it on the App Store and Google Play.\n\nWith the app, you can: easily manage your team and clients; track working hours and tasks; accept bookings and orders directly from a smartphone.\n\nAll your business functions — in one convenient app.',
			mobileClients:
				'I work with individual specialists, entrepreneurs, and companies. If needed, I can join your team to create a mobile version of your service.\n\nA mobile app will help your small company easily manage staff and tasks — all in one place.',
			mobileTasks:
				'I help turn your idea into a convenient mobile app that solves business tasks and brings value.\n\nTogether, we will understand your project goals, look at your processes, and find the best solution for you. I take care of the analysis, design, and launch of the app so it helps your business grow and develop.',
			mobileWhyMe:
				'I take full responsibility for the project, explain decisions in simple terms, and stay in touch at every stage of the work. You can be sure your mobile app will be ready and function exactly as intended. My prices are affordable, and I will not only develop the app but also deploy it online. I am ready to consider your design preferences and pay close attention to your needs.',

			maintenanceHelp:
				'I take care of the support and maintenance of your website or mobile app.\n\nLaunching a project is only the beginning. Like any home, a website or app needs care: fixing small issues, making updates, and improving how it looks or works. I make sure everything runs smoothly, stays up to date, and does not break over time.',
			maintenanceClients:
				'I help freelancers, entrepreneurs, and companies take care of their websites and apps.\n\nIf you already have a project, I will look at how it works and honestly tell you if I can take it on for support and further development.',
			maintenanceTasks:
				'We take care of your website or app together. I handle all the technical issues: fix errors, update features and design, and ensure security and stability. This way, you can focus on growing your business without worrying about technical problems.\n\nTogether, we analyze what works well and what can be improved so that your website or app remains user-friendly, up-to-date, and helps your business grow.',
			maintenanceWhyMe:
				'I take full responsibility for the project, explain decisions in simple terms, and am always available at every stage of the work.',
		},

		personal: {
			summaryTitle: 'Professional Summary',
			summaryDesc: summaryTextEn,
			skillsTitle: 'Skills',
			skillsDesc: skillsTextEn,
			projectsTitle: 'Personal Projects',
			positionTitle: 'Employment Collaboration',
			positionDesc: positionTextEn,
			teamTitle: 'Teamwork',
			teamDesc: teamWorkTextEn,
		},

		contact: {
			contactIntro: contactTextEn,
			phone: 'Phone',
			whatsApp: 'WhatsApp',
			telegram: 'Telegram',
			email: 'Email',
			linkedIn: 'LinkedIn',

			form: {
				title: 'Ask your question',
				name: 'Name',
				email: 'Email',
				question: 'Question',
				submit: 'Submit',
			},

			errors: {
				nameRequire: 'Please enter your name',
				nameMin: 'Name is too short',
				nameMax: 'Name is too long',

				emailRequire: 'Please enter your email address',
				emailIncorrect: 'Please enter a valid email address',

				questionRequire: 'Please enter your question',
				questionMin: 'The question is too short (minimum 10 characters)',
				questionMax: 'The question is too long (maximum 2000 characters)',
			},
		},

		legal: {
			title: 'Legal & Privacy',
			terms: legalTextEn,
		},

		entites: {
			webSectionSubtitle: 'Creating',
			webSectionTitle: 'Websites',
			webSectionDescription:
				'Modern, fast, and visually striking websites — from sleek landing pages to large-scale projects.',

			shopSectionSubtitle: 'Launching',
			shopSectionTitle: 'Online Stores',
			shopSectionDescription:
				'Scalable online stores: manage products and inventory, easy payments, customer database, and tools that help boost sales.',

			mobileSectionSubtitle: 'Developing',
			mobileSectionTitle: 'Mobile Apps',
			mobileSectionDescription:
				'Fast, stable, and user-friendly apps for iOS and Android — tailored for any business needs.',

			maintainSectionSubtitle: 'Maintaining',
			maintainSectionTitle: 'Existing Projects',
			maintainSectionDescription:
				'React websites and React Native apps — refresh the design, fix issues, and bring the project up to date.',
		},
	},
};

export default en;
