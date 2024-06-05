import React from 'react';
import What from './What';
import Purpose from './Idea';
import styles from '../General.module.scss';

const Elearning = () => {
	return (
		<section className={styles['project-container']}>
			<What />
			<Purpose />
		</section>
	);
};

export default Elearning;
