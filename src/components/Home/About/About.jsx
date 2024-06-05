import React from 'react';
import Image from 'next/image';
// import style from 'HomeGeneral.module.scss';
import styles from './About.module.scss';
import WhoIAm from './WhoIAm';
import Values from './Values';

export const About = () => {
	return (
		<main id="about" className={styles['container']}>
			<h1 className={styles['section-header']}>about</h1>
			<WhoIAm />
			<Values />
		</main>
	);
};

export default About;
