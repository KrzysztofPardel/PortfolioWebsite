import React from 'react';
import Link from 'next/link';
//Styles
import styles from './ProjectNav.module.scss';

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
		name: 'Eventer',
		link: 'eventer',
	},
];

const PojectNav = () => {
	return (
		<nav id="projectnav" className={styles['projectNav-container']}>
			{PROJECTNAV_ITEMS.map(({ id, name, link }) => {
				return (
					<Link key={id} href={link} className={styles['projectnav-link']}>
						{name}
					</Link>
				);
			})}
		</nav>
	);
};

export default PojectNav;
