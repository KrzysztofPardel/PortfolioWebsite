import React from 'react';
import What from './What';
import Purpose from './Idea';
import Solution from './Solution';
import Takeways from './Takeaways';
import styles from '../General.module.scss';
import './../SliderStyles.scss';

const CRMSystem = () => {
	return (
		<main className={styles['project-container']}>
			<What />
			<Purpose />
			<Solution />
			<Takeways />
		</main>
	);
};

export default CRMSystem;
