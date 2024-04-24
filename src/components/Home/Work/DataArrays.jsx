//Experience
export const ITWORK_ITEMS = [
	{
		id: 1,
		position: 'Frontend Developer with React.ts',
		company: 'DevsMentoring',
		where: 'Remotely',
		date: '08.2023-02.2024',
		reference: 'reference',
		intro: 'My experience at DevsMentoring:',
		point1: 'Working under the guidance of an experienced senior fullstack developer',
		point2: 'Building apps and extending functionalities with the use of React with Type Script',
		point3: 'Developing my knowledge of React, its libraries and frameworks',
		skill1: 'JavaScript/ TypeScript',
		skill2: 'React',
		skill3: 'Context API',
	},
	{
		id: 2,
		position: 'Frontend Developer with React.ts',
		company: 'SoftwareHouse360',
		where: 'Łódź',
		date: '10.2023-01.2024',
		reference: 'reference',
		intro: 'My experience at SoftwareHouse360:',
		point1: 'Creating views, functionalities as well as improvements in the company’s CRM system',
		point2: 'Working in SCRUM methodology',
		point3: 'Understanding of CRM systems and how they are designed.',
		skill1: 'TypeScript',
		skill2: 'React',
		skill3: 'SCSS',
	},
];

export const WORK_ITEMS = [
	{
		id: 3,
		position: 'Junior Process Officer',
		company: 'Nordea',
		where: 'Łódź',
		date: '08.2023-now',
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
		id: 4,
		position: 'English Language Translator',
		company: 'Word of Life Poland',
		where: 'Zgierz/Remotely',
		date: '10.2023-01.2024',
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
//Goals
export const GOALS_DATA = [
	{
		id: 1,
		p: 'Perfecting my skills in React with TypeScript by developing another project.',
		data: 'April-June',
	},
	{
		id: 2,
		p: 'Expanding my knowledge of new technologies- Java and Python.',
		data: 'July-September',
	},
	{
		id: 3,
		p: 'Begin studying Applied IT on the Masters level at the University of Lodz. (part-time)',
		data: 'October',
	},
];
//Projects -Project SLIDER
export const PROJECT_ITEMS = [
	{
		id: 1,
		title: 'Give',
		link: 'https://give-pi.vercel.app/',
		code: 'https://github.com/KrzysztofPardel/Give',
		more: '',
		description:
			'Donate items or organize a collection with just few clicks.Be the connection between those who HAVE and those who NEED.',
		tech1: 'React',
		tech2: 'TypeScript',
		tech3: 'Redux Toolkit',
		tech4: 'Firebase',
		tech5: 'SCSS',
		tech6: 'Vite',
	},
	{
		id: 2,
		title: 'CRM',
		link: '',
		code: '',
		more: '',
		description: 'As part of my internship, I took was developing the fornt-end layer for a CRM for SoftwareHouse360.',
		tech1: 'React',
		tech2: 'TypeScript',
		tech3: 'SCSS',
		tech4: 'Vite',
		tech5: 'SCRUM methodology',
		tech6: '',
	},
	{
		id: 3,
		title: 'Portfolio Website',
		link: '',
		code: 'https://github.com/KrzysztofPardel/PortfolioWebsite',
		more: '',
		description: 'Personal website showcasing my experience, skills and personality',
		tech1: 'Next',
		tech2: 'JavaScript',
		tech3: 'SCSS',
		tech4: 'Vercel',
		tech5: '',
		tech6: '',
	},
	{
		id: 4,
		title: 'New Project!',
		link: '',
		code: '',
		more: '',
		description: 'Under development. Stay tuned!',
		tech1: '',
		tech2: '',
		tech3: '',
		tech4: '',
		tech5: '',
		tech6: '',
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
		logo: <SiSass />,
		technology: 'SCSS/SASS (RWD)',
	},
	{
		logo: <SiTailwindcss />,
		technology: 'TailwindCSS',
	},
	{
		logo: <SiBootstrap />,
		technology: 'Bootstrap',
	},
	{
		logo: <SiMui />,
		technology: 'MUI',
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
		logo: <SiFigma />,
		technology: 'Figma',
	},
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

	{
		logo: <SiEslint />,
		technology: 'ESLint/TSLint',
	},
];
