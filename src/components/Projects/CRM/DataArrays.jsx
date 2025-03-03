//What
export const SKILL_ITEMS = [
	{
		skill: 'React',
	},
	{
		skill: 'TypeScript',
	},
	{
		skill: 'SCSS',
	},
	{
		skill: 'Vite',
	},
	{
		skill: 'Context API',
	},
];

import LogIn from '../../../../public/assets/LogIn.png';
import PasswordChange from '../../../../public/assets/PasswordChange.png';
import PasswordChanged from '../../../../public/assets/PasswordChanged.png';
import Calendar from '../../../../public/assets/Calendar.png';
import CalendarPopUp from '../../../../public/assets/CalendarPopUp.png';
import Lead from '../../../../public/assets/Lead.png';

export const IMAGES_ITEMS = [
	{
		id: 1,
		src: LogIn,
		alt: 'log in screen',
	},
	{
		id: 2,
		src: PasswordChange,
		alt: 'change password',
	},
	{
		id: 3,
		src: PasswordChanged,
		alt: 'password changed screen',
	},
	{
		id: 4,
		src: Calendar,
		alt: 'calendar',
	},
	{
		id: 5,
		src: CalendarPopUp,
		alt: 'calendar pop-up',
	},
	{
		id: 6,
		src: Lead,
		alt: 'leading',
	},
];

//Purpose
export const PURPOSE_TEXT = [
	{
		id: 1,
		text: `360SoftwareHouse has been established in 2023 with a strong belief that the product delivered to the client will be only as good as their relationship with them. Over time, the company experienced the blessing of growth in capabilities and project opportunities and in order to keep a high level of customer service, the need for a system to manage the relationship with a client became obvious.`,
	},
	{
		id: 2,
		text: `Even though currently there are CRM platforms available for subscription ( Dynamics365 by Microsoft), the company understood nothing would suit their needs as their own, personalized system.`,
	},
	{
		id: 3,
		text: `Leveraging client's data to yield best service and optimalization of his product is the pinnacle, but the end. The system needs to integrate with other tool (eg. calendars, emails). It must anylize and automate processes in order to find ways to improve cooperation between the two sides.`,
	},
	{
		id: 4,
		text: ``,
	},
];
//Solution
import { TfiStatsUp } from 'react-icons/tfi';
import { CiViewTimeline } from 'react-icons/ci';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { IoPeopleSharp } from 'react-icons/io5';
export const ARTICLE_ITEMS = [
	{
		id: 1,
		icon: <IoPeopleSharp className="article-icon" />,
		p_text: 'Create an app which connects people willing to meet the need in this area.',
	},
	{
		id: 2,
		icon: <MdFormatListBulletedAdd className="article-icon" />,
		p_text: 'Provide a way for users to donate or to create collection events.',
	},
	{
		id: 3,
		icon: <TfiStatsUp className="article-icon" />,
		p_text: 'Allow users to track their porgress in helping so they feel empowered to make a bigger difference.',
	},
	{
		id: 4,
		icon: <CiViewTimeline className="article-icon" />,
		p_text: 'Let users enjoy the process of giving thanks to intuitive UI.',
	},
];

export const GRID_ARTICLES = [
	{
		id: 1,
		title: 'Analizing UI Interfaces',
		text: `I was able become familiar of how to retrive data I need from a UI/UX project built in Figma in order to
develop a particular view or functionality. In addition, I was contibute through suggestions which lated led
to enhancing particular functionalities or user experience in general.`,
	},
	{
		id: 2,
		title: 'Collaboration',
		text: `The project honored SCRUM Methodology, thus I was able to contrubute to daily meetings, achieve the goeals
		for particular sprints and aid anyone who needed it. I absolutely loved working in SCRUM since made me feel
		connected to the rest of the team and helped me stay motivated on the assignments before me.`,
	},
	{
		id: 3,
		title: 'Implemented functionalities',
		text: `Examples of things I have been involved in include: Authentication, HTML email responses
		templates, Calendar, Sidebars, Error screens.`,
	},
	{
		id: 4,
		title: 'Creating interfaces',
		text: `What is more, I was responsible for the creation of UI interfaces and their functionalities. To give an
		example, I was responsible for implementation of all authentication interfaces and connecting them to an API
		develped by the team's backend developers.`,
	},
];
export const FEATURE_ITEMS = [
	{
		id: 1,
		text: `Fully responsive views of each site. The application has been prepared for a desktop, tablet and a mobile
		device.`,
	},
	{
		id: 2,
		text: `I utilized Redux Toolkit to manage the state of the app, which can be seen especially in Multiforms whre
		Redux was used to pass data, which eventually is sent to Firebase.`,
	},
	{
		id: 3,
		text: `	On the one hand, Firebase is used to store data received through contact form, both multiforms and to
		provided data for pugination in Foundations section. On the other, Firebase is an authentication serivce.`,
	},
	{
		id: 4,
		text: `Protected routes have been applied so that without being a used certain pages and tracing your progress in inaccessible.Hook useRoutes is used for application routing`,
	},
	{
		id: 5,
		text: `Schema Yup library has been used for validation purposes. However, multifomrs are authenticated without it, through managing the state of data from Redux.`,
	},
	{
		id: 6,
		text: `Lazy loading of components.`,
	},
	{
		id: 7,
		text: `Error boundary secures the necessary errors screens.`,
	},
];

//Takeways
export const TAKEAWAYS_ITEMS = [
	{
		id: 1,
		p_text: 'SCRUM',
		p_comment:
			'It was my first time working in SCRUM methodology in a commercial setting it has been absolutley amazing. Daily meetings and short sprints helped me focus on the assignments and stay motivated. ',
	},
	{
		id: 2,
		p_text: 'Authentication',
		p_comment:
			'I enjoyed learning how in an authentication a user received a token and his data is stored in a cookie. I believe I developed a better understanding of how authentication works in commercial projects.',
	},
	{
		id: 3,
		p_text: 'Single devotion',
		p_comment:
			'In non-comercial projects one is responsible for the UI/UX of their own project. While working on this project, I was able implement screens designed by a designated UX/UI designer. This allowed me to entirely focus on the development side and make the most out of it.',
	},
	{
		id: 4,
		p_text: 'Connecting parts',
		p_comment:
			'Referring to the previous point, for the first time I have been able to witness the inriquing process of connecting every part of a project together (UX/UI Design, Frontend, Backend).',
	},
	{
		id: 5,
		p_text: 'Excel in what you know',
		p_comment:
			'This project has given ma a boost of motivation to further my understanding of technologies I have worked in before- React and TypeScript and see other options, which first led me to learning Reduxt and then Next.',
	},
];
