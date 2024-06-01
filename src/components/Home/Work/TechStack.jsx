'use client';
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FRONT_ITEMS, GRAPHICS_ITEMS, BACK_ITEMS, OTHER_ITEMS } from './DataArrays';
import styles from './SCSS/TechStack.module.scss'; // Import module styles

const TechStack = () => {
	const [openAcc, setOpenAcc] = useState(true);

	return (
		<div id="techstack" className={styles['techstack-container']}>
			<h1 className={styles['techstack-h']}>Tech Stack</h1>
			<Accordion style={{ width: '100%' }} expanded={openAcc}>
				<AccordionSummary
					className={`${styles['techstack-a_summary']} ${styles['summary-front']}`}
					aria-controls="panel1-content"
					id="panel1-header"
					onClick={() => setOpenAcc(!openAcc)}
				>
					Front-End
				</AccordionSummary>
				<AccordionDetails className={styles['techstack-accordionDetails']}>
					{FRONT_ITEMS.map(({ logo, technology }) => {
						return (
							<div key={technology} className={styles['techstack-box']}>
								<div className={styles['tech-log']}>{logo}</div>
								<div className={styles['tech-technology']}>{technology}</div>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>
			<Accordion style={{ width: '100%' }}>
				<AccordionSummary
					className={`${styles['techstack-a_summary']} ${styles['summary-graphics']}`}
					aria-controls="panel2-content"
					id="panel2-header"
				>
					Graphics
				</AccordionSummary>
				<AccordionDetails className={styles['techstack-accordionDetails']}>
					{GRAPHICS_ITEMS.map(({ logo, technology }) => {
						return (
							<div key={technology} className={styles['techstack-box']}>
								<div className={styles['tech-log']}>{logo}</div>
								<div className={styles['tech-technology']}>{technology}</div>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>
			<Accordion style={{ width: '100%' }}>
				<AccordionSummary
					className={`${styles['techstack-a_summary']} ${styles['summary-back']}`}
					aria-controls="panel2-content"
					id="panel2-header"
				>
					Back-End
				</AccordionSummary>
				<AccordionDetails className={styles['techstack-accordionDetails']}>
					{BACK_ITEMS.map(({ logo, technology }) => {
						return (
							<div key={technology} className={styles['techstack-box']}>
								<div className={styles['tech-log']}>{logo}</div>
								<div className={styles['tech-technology']}>{technology}</div>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>
			<Accordion style={{ width: '100%' }}>
				<AccordionSummary
					className={`${styles['techstack-a_summary']} ${styles['summary-other']}`}
					aria-controls="panel2-content"
					id="panel2-header"
				>
					Other
				</AccordionSummary>
				<AccordionDetails className={styles['techstack-accordionDetails']}>
					{OTHER_ITEMS.map(({ logo, technology }) => {
						return (
							<div key={technology} className={styles['techstack-box']}>
								<div className={styles['tech-log']}>{logo}</div>
								<div className={styles['tech-technology']}>{technology}</div>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default TechStack;
