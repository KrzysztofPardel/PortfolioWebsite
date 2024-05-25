import React from 'react';
import ProjectSlider from './ProjectSlider';
import { PROJECT_ITEMS } from './DataArrays';

const Projects = () => {
	return (
		<div id="projects" className="projects-container">
			<h1 className="projects-h">Projects</h1>
			<div className="projects-slider">
				<ProjectSlider totalSlides={PROJECT_ITEMS.length} />
			</div>
		</div>
	);
};

export default Projects;
