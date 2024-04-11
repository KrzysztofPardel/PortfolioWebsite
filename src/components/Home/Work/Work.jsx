import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Opinions from './Opinions';
import Goals from './Goals';

const Work = () => {
	return (
		<div className="container">
			<Experience />
			<Projects />
			<Opinions />
			<Goals />
		</div>
	);
};

export default Work;
