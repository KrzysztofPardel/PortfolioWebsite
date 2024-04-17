import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Opinions from './Opinions';
import Goals from './Goals';

const Work = () => {
	return (
		<div id="work" className="container">
			<h1 className="section-header">Work</h1>
			<Experience />
			<Projects />
			<Opinions />
			<Goals />
		</div>
	);
};

export default Work;
