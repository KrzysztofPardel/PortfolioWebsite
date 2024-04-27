import React from 'react';
import Navigation from '@/components/Navigation';
import PojectNav from '@/components/Projects/ProjectNav/ProjectNav';
import Give from '@/components/Projects/Give/Give';

const Projects = () => {
	return (
		<>
			<Navigation />
			<PojectNav />
			<Give />
		</>
	);
};

export default Projects;
