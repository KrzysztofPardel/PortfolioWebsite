import React from 'react';
import ProjectSlider from './ProjectSlider';
import { PROJECT_ITEMS } from './DataArrays';
import styles from './SCSS/Projects.module.scss'; // Import module styles

const Projects = () => {
	return (
		<main id="projects" className={styles['projects-container']}>
			<h1 className={styles['projects-h']}>Projects</h1>
			<section className={styles['projects-slider']}>
				<ProjectSlider totalSlides={PROJECT_ITEMS.length} />
			</section>
		</main>
	);
};

export default Projects;
