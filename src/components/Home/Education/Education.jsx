import React from 'react';
import Degrees from './Degrees';
import Certifications from './Certifications';
import Courses from './Courses';
import Challenges from './Challenges';
import styles from '../HomeGeneral.module.scss';

const Education = () => {
	return (
		<main id="education" className={styles['container']}>
			<h1 className={styles['section-header']}>education</h1>
			<Degrees />
			<Certifications />
			<Courses />
			<Challenges />
		</main>
	);
};

export default Education;
