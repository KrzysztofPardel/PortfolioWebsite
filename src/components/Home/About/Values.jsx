import React from 'react';
import styles from './Values.module.scss';

const ARTICLES_DATA = [
	{
		h: 'Trust',
		p: 'Being a trustworthy team member is my priority when I am in a workplace. I derive great pleasure from living up to presented expectations and being a dependable coworker. I believe that a strong team is only possible with common trust and reliability, which results in achieved goals, better outcomes, and of course, greater satisfaction and joy from work.',
	},
	{
		h: 'Kindness',
		p: 'It is this small thing that makes a huge difference. It excites me to give people what they sometimes least expect in a workplace - kindness. Workmates can be efficient and determined, but at the end of the day, they are still people who go through hills and valleys in their lives. I want to infuse a ray of kindness in various circumstances of life, including work.',
	},
	{
		h: 'Growth',
		p: 'Growth mindset is about embracing development through personal effort, trying new things, adapting to change, and listening to feedback. Instead of asking, "Why is this happening TO me", I ask "Why is this happening FOR me?"',
	},
];

const Values = () => {
	return (
		<div id="values" className={styles.aboutContainer}>
			{ARTICLES_DATA.map(({ h, p }) => {
				return (
					<div key={h} className={styles.articleContainer}>
						<h2 className={styles.articleH}>{h}</h2>
						<p className={styles.articleP}>{p}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Values;
