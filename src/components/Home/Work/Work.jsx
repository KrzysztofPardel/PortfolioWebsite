import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Goals from './Goals';
import './SCSS/Work.scss';
import TechStack from './TechStack';
const Work = () => {
	return (
		<div id="work" className="container">
			<h1 className="section-header">work</h1>
			<Experience />
			<Projects />
			<TechStack />
			<Goals />
		</div>
	);
};

export default Work;
