import React from 'react';
import Degrees from './Degrees';
import Certifications from './Certifications';

const Education = () => {
	return (
		<div className="container">
			<Degrees />
			<Certifications />
			<Courses />
			<Challenges />
		</div>
	);
};

export default Education;
