import { contactTextEn } from '@assets/articles/contact';
import { legalTextEn } from '@assets/articles/legal';
import { positionTextEn } from '@assets/articles/position';
import { skillsTextEn } from '@assets/articles/skills';
import { summaryTextEn } from '@assets/articles/summary';
import { teamWorkTextEn } from '@assets/articles/team';

const en = {
	translation: {
		browserTabs: {
			browserTabDefault: 'Andrei Trunkin | Frontend Developer',
			browserTabPageNotFound: 'This page does not exist',
			browserTabServices: 'Andrei Trunkin | Services',
			browserTabAboutMe: 'Andrei Trunkin | About Me',
			browserTabContact: 'Andrei Trunkin | Contact',
			browserTabLegal: 'Andrei Trunkin | Legal & Privacy',
			browserTabDashboard: 'AT | Dashboard',
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
			dashboard: 'Dashboard',
			changeLngAlt: 'Change website language',
			openNavAlt: 'Open website navigation',
			ru: 'РУ',
			es: 'ES',
			en: 'EN',
		},

		home: {
			sectionButton: 'Learn More',
			cookieAlert: 'This site uses cookies to protect against bots (reCAPTCHA)',
			cookieApprove: 'Good',
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
				'I create websites for businesses and professionals: landing pages, business card sites, and portfolios.\n' +
				'Visitors see what you do, view examples of your work, and can get in touch with you.',

			webClients:
				'I work with independent specialists, entrepreneurs, and companies.\n' +
				'If you provide services, develop a personal brand, or are starting a business — I will create a website to help attract clients.',

			webTasks:
				'We solve tasks related to attracting and managing your audience.\n' +
				'– Showcase your services, prices, and work examples.\n' +
				'– Organize the reception of inquiries and requests.\n' +
				'– Set up online booking for your services.\n' +
				'– Configure a section for publishing articles and updates.\n' +
				'– Make the website multilingual for users in different languages.',

			webWhyMe:
				'I manage the project from idea to launch.\n' +
				'I build the website, host it online, and set up Google indexing. ' +
				'I structure the site clearly and with proper markup — search engines correctly index the pages.\n' +
				'I explain decisions in plain language and show how to use the site after launch.',

			shopHelp:
				'I create websites for online stores: design, platform setup, and hosting.\n' +
				'You get a ready-to-use store for selling products and services on a user-friendly e-commerce platform, easy to manage and scale.',

			shopClients:
				'I work with independent specialists, entrepreneurs, and companies.\n' +
				'If you have a small business and want to sell online without big upfront costs — I build a store that works immediately and can grow with your business.',

			shopTasks:
				'E-commerce setup requires time and technical knowledge: layout, styling, platform configuration, and service integrations.\n' +
				'I handle these tasks so you can focus on sales and growing your store.',

			shopWhyMe:
				'I manage the project from idea to launch.\n' +
				'I explain decisions in plain language and show how to run the store after launch.\n' +
				'Fast timelines, transparent pricing, and the store works right after launch.',

			mobileHelp:
				'Create a mobile app for iOS and Android and publish it on the App Store and Google Play.\n' +
				'With the app, you can: easily manage your team and clients; track working hours and tasks; accept bookings and orders directly from a smartphone.\n\nAll your business functions — in one convenient app.',
			mobileClients:
				'I work with individual specialists, entrepreneurs, and companies. If needed, I can join your team to create a mobile version of your service.\n' +
				'A mobile app will help your small company easily manage staff and tasks — all in one place.',
			mobileTasks:
				'I help turn your idea into a convenient mobile app that solves business tasks and brings value.\n' +
				'Together, we will understand your project goals, look at your processes, and find the best solution for you. I take care of the analysis, design, and launch of the app so it helps your business grow and develop.',
			mobileWhyMe:
				'I take full responsibility for the project, explain decisions in simple terms, and stay in touch at every stage of the work. You can be sure your mobile app will be ready and function exactly as intended. My prices are affordable, and I will not only develop the app but also deploy it online. I am ready to consider your design preferences and pay close attention to your needs.',

			maintenanceHelp:
				'I take care of the support and maintenance of your website or mobile app.\n' +
				'Launching a project is only the beginning. Like any home, a website or app needs care: fixing small issues, making updates, and improving how it looks or works. I make sure everything runs smoothly, stays up to date, and does not break over time.',

			maintenanceClients:
				'I help freelancers, entrepreneurs, and companies take care of their websites and apps.\n' +
				'If you already have a project, I will look at how it works and honestly tell you if I can take it on for support and further development.',

			maintenanceTasks:
				'We take care of your website or app together. I handle all the technical issues: fix errors, update features and design, and ensure security and stability. This way, you can focus on growing your business without worrying about technical problems.\n' +
				'Together, we analyze what works well and what can be improved so that your website or app remains user-friendly, up-to-date, and helps your business grow.',

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
				password: 'Password',
				question: 'Question',
				consent:
					'I give my consent for the processing of my personal data and the publication of my name and question on this website',
				check: "Verify I'm not a robot",

				submit: 'Submit',
				submitSuccess: 'Your question has been successfully submitted',

				loginSuccess: 'Login successful',
				save: 'Save',
				cancel: 'Cancel',
			},

			errors: {
				nameRequire: 'Please enter your name',
				nameMin: 'Name is too short',
				nameMax: 'Name is too long',

				emailRequire: 'Please enter your email address',
				emailIncorrect: 'Please enter a valid email address',

				questionRequire: 'Please enter your question',
				questionMin: 'The question is too short (minimum {{count}} characters)',
				questionMax: 'The question is too long (maximum {{count}} characters)',

				consentFail: 'Consent for the processing of personal data is required',

				passwordRequire: 'Please enter a password',
				passwordMin: 'Password must be at least {{count}} characters long',
				passwordLowercase: 'Password must contain at least one lowercase letter',
				passwordUppercase: 'Password must contain at least one uppercase letter',
				passwordNumber: 'Password must contain at least one number',
				passwordSpecial: 'Password must contain at least one special character',

				submitFail: 'Failed to send the question. Please try again',
				loginFail: 'Login failed. Please try again',
			},

			modal: {
				login: 'Log in',
				logout: 'Logout',
				logoutSuccess: 'Session successfully ended',
				logoutFail: 'Failed to end the session',
				editQuestion: 'Question Moderation',
			},
		},

		dashboard: {
			nav: {
				admin: 'Administrator',
				questions: 'Questions',
				tags: 'Tags',
			},
			admin: {
				name: 'Active User',
				role: 'Role',
				id: 'ID',
			},
			questions: {
				updateStatusTrue: 'Question {{count}} is visible to everyone',
				updateStatusFalse: 'Only the administrator can see question {{count}}',
				updateStatusFail: 'Failed to change the status',
				deleteSuccess: 'Question {{count}} deleted successfully',
				deleteFail: 'Failed to delete question {{count}}',
				deleteAll: 'Delete all questions',
				deleteAllSuccess: 'All questions deleted successfully',
				deleteAllFail: 'Failed to delete questions',
				edit: 'Edit',

				updateDataTrue: 'Question {{count}} updated',
				nothingChanged: 'No changes were made',
				updateDataFail: 'Failed to update question {{count}}',
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
