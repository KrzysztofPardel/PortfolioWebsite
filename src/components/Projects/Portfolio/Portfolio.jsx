import React from 'react';
import What from './What';
import Purpose from './Purpose';
import Takeways from './Takeways';
import Solution from './Solution';

const Portfolio = () => {
	return (
		<section className="project-container">
			<What />
			<Purpose />
			<Solution />
			<Takeways />
		</section>
	);
};

export default Portfolio;
