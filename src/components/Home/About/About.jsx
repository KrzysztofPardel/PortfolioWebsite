import React from 'react';
import Image from 'next/image';
import stargazing from '../../../../public/assets/stargazing.svg';
import homeoffice from '../../../../public/assets/homeoffice.svg';
import fit from '../../../../public/assets/fit.svg';
import './About.scss';
import WhoIAm from './WhoIAm';
import Values from './Values';

export const About = () => {
	return (
		<div id="about" className="container">
			<h1 className="section-header">about</h1>
			<WhoIAm />
			<Values />
		</div>
	);
};
export default About;
