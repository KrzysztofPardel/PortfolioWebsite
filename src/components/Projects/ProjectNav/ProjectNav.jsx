import React from 'react';
import Link from 'next/link';
import './ProjectNav.scss';
const PROJECTNAV_ITEMS = [
	{
		id: 1,
		name: 'Give',
		link: 'Givelink',
	},
	{
		id: 2,
		name: 'CRM',
		link: 'CRMlink',
	},
	{
		id: 3,
		name: 'Portfolio',
		link: 'Portfoliolink',
	},
	{
		id: 4,
		name: 'E-learning project',
		link: 'E-learninglink',
	},
];

const PojectNav = () => {
	return (
		<nav className="porjectNav-container">
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
