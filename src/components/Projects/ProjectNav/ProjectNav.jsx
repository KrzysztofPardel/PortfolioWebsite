import React from 'react';
import Link from 'next/link';
//Styles
import './ProjectNav.scss';

const PROJECTNAV_ITEMS = [
	{
		id: 1,
		name: 'Give',
		link: 'give',
	},
	{
		id: 2,
		name: 'CRM',
		link: 'crm',
	},
	{
		id: 3,
		name: 'E-learning project',
		link: 'elearning',
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
