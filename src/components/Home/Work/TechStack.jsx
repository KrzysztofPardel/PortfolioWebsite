'use client';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
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

const FRONT_ITEMS = [
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
const BACK_ITEMS = [
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
const GRAPHICS_ITEMS = [
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
const OTHER_ITEMS = [
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

const TechStack = () => {
	return (
		<div id="techstack" className="techstack-container">
			<h1 className="techstack-h">Tech Stack</h1>
			<Accordion style={{ width: '100%' }}>
				<AccordionSummary
					className="techstack-a_summary summary-front"
					aria-controls="panel1-content"
					id="panel1-header"
				>
					Front-End
				</AccordionSummary>
				<AccordionDetails className="techstack-accordionDetails">
					{FRONT_ITEMS.map(({ logo, technology }) => {
						return (
							<div key={technology} className="techstack-box">
								<div className="tech-log">{logo}</div>
								<div className="tech-technology">{technology}</div>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>
			<Accordion style={{ width: '100%' }}>
				<AccordionSummary
					className="techstack-a_summary summary-graphics"
					aria-controls="panel2-content"
					id="panel2-header"
				>
					Graphics
				</AccordionSummary>
				<AccordionDetails className="techstack-accordionDetails">
					{GRAPHICS_ITEMS.map(({ logo, technology }) => {
						return (
							<div key={technology} className="techstack-box">
								<div className="tech-log">{logo}</div>
								<div className="tech-technology">{technology}</div>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>
			<Accordion style={{ width: '100%' }}>
				<AccordionSummary
					className="techstack-a_summary summary-back"
					aria-controls="panel2-content"
					id="panel2-header"
				>
					Back-End
				</AccordionSummary>
				<AccordionDetails className="techstack-accordionDetails">
					{BACK_ITEMS.map(({ logo, technology }) => {
						return (
							<div key={technology} className="techstack-box">
								<div className="tech-log">{logo}</div>
								<div className="tech-technology">{technology}</div>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>

			<Accordion style={{ width: '100%' }}>
				<AccordionSummary
					className="techstack-a_summary summary-other"
					aria-controls="panel2-content"
					id="panel2-header"
				>
					Other
				</AccordionSummary>
				<AccordionDetails className="techstack-accordionDetails">
					{OTHER_ITEMS.map(({ logo, technology }) => {
						return (
							<div key={technology} className="techstack-box">
								<div className="tech-log">{logo}</div>
								<div className="tech-technology">{technology}</div>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default TechStack;
