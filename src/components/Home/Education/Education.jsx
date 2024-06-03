import React from 'react';
import Degrees from './Degrees';
import Certifications from './Certifications';
import Courses from './Courses';
import Challenges from './Challenges';

const Education = () => {
	return (
		<main id="education" className="container">
			<h1 className="section-header">education</h1>
			<Degrees />
			<Certifications />
			<Courses />
			<Challenges />
		</main>
	);
};

export default Education;
