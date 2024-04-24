import React from 'react';
import ProjectSlider from './ProjectSlider';

const Projects = () => {
	return (
		<div id="projects" className="projects-container">
			<h1 className="projects-h">Projects</h1>
			<div className="projects-slider">
				<ProjectSlider />
			</div>
		</div>
	);
};

export default Projects;
