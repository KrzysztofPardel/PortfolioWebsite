import React from 'react';
import What from './What';
import Purpose from './Idea';
import Solution from './Solution';
import Takeways from './Takeways';
import './../ProjectStyles.scss';

const CRMSystem = () => {
	return (
		<main className="project-container">
			<What />
			<Purpose />
			<Solution />
			<Takeways />
		</main>
	);
};

export default CRMSystem;
