import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Goals from './Goals';

import styles from './SCSS/Work.module.scss';
import TechStack from './TechStack';

const Work = () => {
	return (
		<main id="work" className={styles['container']}>
			<h1 className={styles['section-header']}>work</h1>
			<Experience />
			<Projects />
			<TechStack />
			<Goals />
		</main>
	);
};

export default Work;
