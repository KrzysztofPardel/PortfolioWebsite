import React from 'react';
import What from './What';
import Purpose from './Purpose';
import Takeways from './Takeways';
import Solution from './Solution';
import './Give.scss';

const Give = () => {
	return (
		<div className="project-container">
			<What />
			<Purpose />
			<Solution />
			<Takeways />
		</div>
	);
};

export default Give;
