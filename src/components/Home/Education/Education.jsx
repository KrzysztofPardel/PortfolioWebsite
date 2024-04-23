import React from 'react';
import Degrees from './Degrees';
import Certifications from './Certifications';
import Courses from './Courses';
import Challenges from './Challenges';
import './Education.scss';

const Education = () => {
	return (
		<div id="education" className="container">
			<h1 className="section-header">Education</h1>
			<Degrees />
			<Certifications />
			<Courses />
			<Challenges />
		</div>
	);
};

export default Education;
