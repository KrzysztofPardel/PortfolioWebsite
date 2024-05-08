import React from 'react';
import Navigation from '@/components/Navigation';
import PojectNav from '@/components/Projects/ProjectNav/ProjectNav';
import Give from '@/components/Projects/Give/Give';
import ProjectFooter from '@/components/Projects/ProjectFooter/ProjectFooter';

const Projects = () => {
	return (
		<>
			<Navigation />
			<PojectNav />
			{/* {children} */}
			<ProjectFooter />
		</>
	);
};

export default Projects;
