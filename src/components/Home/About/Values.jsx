'u'
import React from 'react';

const ARTICLES_DATA = [
	{
		h: 'Trust',
		p: 'Being a trustworthy team member is my priority when I am in a work place. I derive great pleasure from living up to presented expectations and to be a dependable coworker. I believe that a team members who trust each other can reach far higher goals and present a better product and enjoy their work more, especially in difficult times.',
	},
	{
		h: 'Kindness',
		p: 'It is this small thing that makes a huge difference. It excites me to give people what they sometimes least expect in a workplace - kindness. Workmates can be efficient and determined, but at the end ot the day, they are still people who go through hills and valleys in their lives. I want to infuse a ray of kindness in various circumstances of life, including work.',
	},
	{
		h: 'Growth',
		p: 'Growth mindset is about embracing development through personal effort, trying new things, adapting to change and listening to feedback. Instead of asking, "Why is this happening TO me", I ask "Why is this happening FOR me?',
	},
];

const Values = () => {
	return (
		<div id="values" className="about-container">
			{ARTICLES_DATA.map(({ h, p }) => {
				return (
					<div className="article-container">
						<h2 className="article-h">{h}</h2>
						<p className="article-p">{p}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Values;
