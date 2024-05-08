import React from 'react';
import What from './What';
import Purpose from './Purpose';
import Takeways from './Takeaways';
import Solution from './Solution';
import './Give.scss';
import Footer from '@/components/Home/Footer/Footer';
import ProjectFooter from '../ProjectFooter/ProjectFooter';

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
