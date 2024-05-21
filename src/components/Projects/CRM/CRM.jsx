import React from 'react';
import What from './What';
import Purpose from './Idea';
import Solution from './Solution';
import './../ProjectStyles.scss';
import Takeways from './Takeways';

const CRMSystem = () => {
	return (
		<section className="project-container">
			<What />
			<Purpose />
			<Solution />
			<Takeways />
		</section>
	);
};

export default CRMSystem;
