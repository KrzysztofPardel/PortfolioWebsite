import React from 'react';
import Link from 'next/link';
import './ProjectNav.scss';

const PROJECTNAV_ITEMS = [
	{
		id: 1,
		name: 'Give',
		link: 'projects/give',
	},
	{
		id: 2,
		name: 'CRM',
		link: 'projects/crm',
	},
	{
		id: 3,
		name: 'Portfolio',
		link: 'projects/portfolio',
	},
	{
		id: 4,
		name: 'E-learning project',
		link: 'projects/elearning',
	},
];

const PojectNav = () => {
	return (
		<nav id="projectnav" className="porjectNav-container">
			{PROJECTNAV_ITEMS.map(({ id, name, link }) => {
				return (
					<Link key={id} href={link} className="projectnav-link">
						{name}
					</Link>
				);
			})}
		</nav>
	);
};

export default PojectNav;
