import React from 'react';
import Image from 'next/image';
import stargazing from '../../../../public/assets/stargazing.svg';
import homeoffice from '../../../../public/assets/homeoffice.svg';
import fit from '../../../../public/assets/fit.svg';
import styles from './About.module.scss';
import WhoIAm from './WhoIAm';
import Values from './Values';

export const About = () => {
	return (
		<main id="about" className="container">
			<h1 className={styles.sectionHeader}>about</h1>
			<WhoIAm />
			<Values />
		</main>
	);
};
export default About;
