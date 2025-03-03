//Experience
export const ITWORK_ITEMS = [
	{
		id: 1,
		position: 'Frontend Developer with React.ts',
		company: 'SoftwareHouse360',
		where: 'Łódź',
		date: '11.2024-now',
		reference: '',
		intro: 'My experience at SoftwareHouse360:',
		point1: `Improving code's efficiency, compliance and integrity`,
		point2: 'Implementing RDW across the application prepared first for a desktop',
		skill1: 'TypeScript',
		skill2: 'React',
		skill3: 'SCSS',
	},
	{
		id: 2,
		position: 'Frontend Developer with React.ts',
		company: 'DevsMentoring',
		where: 'Remotely',
		date: '08.2023-02.2024',
		reference: '',
		intro: 'My experience at DevsMentoring:',
		point1: 'Working under the guidance of an experienced senior fullstack developer',
		point2: 'Building apps and extending functionalities with the use of React with Type Script',
		point3: 'Developing my knowledge of React, its libraries and frameworks',
		skill1: 'JavaScript/ TypeScript',
		skill2: 'React',
		skill3: 'Context API',
	},
	{
		id: 3,
		position: 'Frontend Developer with React.ts',
		company: 'SoftwareHouse360',
		where: 'Łódź',
		date: '10.2023-01.2024',
		reference: '',
		intro: 'My experience at SoftwareHouse360:',
		point1: 'Creating views, functionalities as well as improvements in the company’s CRM system',
		point2: 'Working in SCRUM methodology',
		point3: 'Understanding of CRM systems and how they are designed',
		skill1: 'TypeScript',
		skill2: 'React',
		skill3: 'SCSS',
	},
];

export const WORK_ITEMS = [
	{
		id: 3,
		position: 'Senior Process Executive',
		company: 'Infosys',
		where: 'Łódź',
		date: '11.2024-now',
		reference: '',
		intro: 'My experience at Inofsys:',
		point1: 'Successfully completing processes related to R2R financial operations',
		point2: `Processing client's accounting data with the usage of SAP ERP and SAP S/4 HANA software`,
		point3: `Communication in English with the client's representatives`,
		skill1: 'MS Office',
		skill2: 'English',
		skill3: 'SAP',
	},
	{
		id: 4,
		position: 'Process Officer',
		company: 'Nordea',
		where: 'Łódź',
		date: '08.2023-10.2024',
		reference: '',
		intro: 'My experience at Nordea:',
		point1: 'Processing data related to operations between clients and the bank',
		point2: 'Mediating in the process of adjusting contracts related to debts, leasings etc.',
		point3: 'Utilizing English in a bank-related environment',
		skill1: 'MS Office',
		skill2: 'English',
		skill3: 'Team work',
	},
	{
		id: 5,
		position: 'English Language Translator',
		company: 'Word of Life Poland',
		where: 'Zgierz/Remotely',
		date: '11.2018-08.2023',
		reference: '',
		intro: 'My experience at Word of Life Poland:',
		point1: 'Translating complex documents and articles',
		point2: 'Live interpreting',
		point3: 'Translation of mobile applications',
		skill1: 'English',
		skill2: 'Affinity Designer',
		skill3: 'MS Office',
	},
];

//Projects - Project SLIDER
import GiveHome from '../../../../public/assets/GiveHome.png';
import Calendar from '../../../../public/assets/Calendar.png';
import hourglass3 from '../../../../public/assets/hourglass3.jpg';

export const PROJECT_ITEMS = [
	{
		id: 0,
		title: 'Give',
		description: 'Conntecting those who HAVE with those who NEED.',
		href: 'give',
		src: GiveHome,
	},
	{
		id: 1,
		title: 'CRM',
		description: 'Fornt-end layer of a CRM system for 360SoftwareHouse.',
		href: 'crm',
		src: Calendar,
	},
	{
		id: 2,
		title: 'Eventer',
		description: 'The MVP of a handy event organizer (Under development)',
		href: 'eventer',
		src: hourglass3,
	},
];
//TechStack
import { TbApi } from 'react-icons/tb';
import { FaGitAlt } from 'react-icons/fa';
import { DiScrum } from 'react-icons/di';
import {
	SiTypescript,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiBootstrap,
	SiMui,
	SiHtml5,
	SiVite,
	SiWebpack,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiFirebase,
	SiSupabase,
	SiFigma,
	SiAffinityphoto,
	SiAffinitydesigner,
	SiAffinitypublisher,
	SiJira,
	SiMicrosoftoffice,
	SiMicrosoft,
	SiApple,
	SiEslint,
} from 'react-icons/si';

export const FRONT_ITEMS = [
	{
		logo: <SiJavascript />,
		technology: 'JavaScript',
	},
	{
		logo: <SiTypescript />,
		technology: 'TypeScript',
	},
	{
		logo: <SiReact />,
		technology: 'React',
	},
	{
		logo: <SiNextdotjs />,
		technology: 'Next',
	},
	{
		logo: <SiRedux />,
		technology: 'Redux',
	},
	{
		logo: <TbApi />,
		technology: 'Context API',
	},
	{
		logo: <SiTailwindcss />,
		technology: 'TailwindCSS',
	},
	{
		logo: <SiSass />,
		technology: 'SCSS/SASS (RWD)',
	},
	{
		logo: <SiMui />,
		technology: 'MUI',
	},
	{
		logo: <SiBootstrap />,
		technology: 'Bootstrap',
	},
	{
		logo: <SiHtml5 />,
		technology: 'HTML',
	},
	{
		logo: <SiVite />,
		technology: 'Vite',
	},
	{
		logo: <SiWebpack />,
		technology: 'Webpack',
	},
	{
		logo: <SiEslint />,
		technology: 'ESLint/TSLint',
	},
];
export const BACK_ITEMS = [
	{
		logo: <SiNodedotjs />,
		technology: 'Node',
	},
	{
		logo: <SiExpress />,
		technology: 'Express',
	},
	{
		logo: <SiMongodb />,
		technology: 'MongoDB',
	},
	{
		logo: <SiFirebase />,
		technology: 'Firebase',
	},
	{
		logo: <SiSupabase />,
		technology: 'Supabase',
	},
];

export const GRAPHICS_ITEMS = [
	{
		logo: <SiAffinityphoto />,
		technology: 'Affinity Photo',
	},
	{
		logo: <SiAffinitydesigner />,
		technology: 'Affinity Designer',
	},
	{
		logo: <SiAffinitypublisher />,
		technology: 'Affinity Publisher',
	},
	{
		logo: <SiFigma />,
		technology: 'Figma',
	},
];

export const OTHER_ITEMS = [
	{
		logo: <SiMicrosoft />,
		technology: 'Widows',
	},
	{
		logo: <SiApple />,
		technology: 'MacOS',
	},
	{
		logo: <FaGitAlt />,
		technology: 'GIT',
	},
	{
		logo: <DiScrum />,
		technology: 'SCRUM Methodology',
	},
	{
		logo: <SiJira />,
		technology: 'Jira',
	},
	{
		logo: <SiMicrosoftoffice />,
		technology: 'MS Office/ Office 365',
	},
];

//Goals
export const GOALS_DATA = [
	{
		id: 1,
		p: 'Complete work on the CRM proejct',
		data: 'March',
	},
	{
		id: 2,
		p: 'Learn and implement unit testing across Eventer application',
		data: 'April',
	},
	{
		id: 3,
		p: 'Complete work on the Eventer project',
		data: 'April-May',
	},
];
