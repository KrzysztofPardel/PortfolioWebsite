'use client';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FRONT_ITEMS, GRAPHICS_ITEMS, BACK_ITEMS, OTHER_ITEMS } from './DataArrays';

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
				<AccordionDetails className="techstack-a_Details">
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
