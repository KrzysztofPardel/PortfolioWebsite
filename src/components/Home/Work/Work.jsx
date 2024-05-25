import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Goals from './Goals';
import './SCSS/Work.scss';
import TechStack from './TechStack';
import { NewComponent } from './NewComponent';
const Work = () => {
	return (
		<div id="work" className="container">
			<h1 className="section-header">work</h1>
			<Experience />
			<Projects />
			<TechStack />
			<Goals />
			<NewComponent />
		</div>
	);
};

export default Work;
