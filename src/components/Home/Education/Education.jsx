import React from 'react';
import Degrees from './Degrees';
import Certifications from './Certifications';
import Courses from './Courses';
import Challenges from './Challenges';
import './SCSS/Education.scss';

const Education = () => {
	return (
		<div id="education" className="container">
			<Degrees />
			<Certifications />
			<Courses />
			<Challenges />
		</div>
	);
};

export default Education;
