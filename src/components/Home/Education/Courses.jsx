import React from 'react';
import Link from 'next/link';
import { TbFileCertificate } from 'react-icons/tb';

const MAJOR_COURSES = [
	{
		name: 'Node.js',
		date: '07.2023-09.2023',
		link: 'https://coderslab.pl/pl/node-js-developer',
		id: '157/09/2023',
		description: 'Additional 120 hours of Node.js, Express.js, MongoDB TypeScript practice and lectures',
		skill1: 'Node.js',
		skill2: 'Express.js',
		skill3: 'MongoDB',
		skill4: 'Postman',
	},
	{
		name: 'Java Script Developer',
		date: '01.2023-03.2023',
		link: 'https://coderslab.pl/pl/javascript-developer-react',
		id: '216/03/2023',
		description: 'Intensive 570 hours developing knowledge and experience in JavaScript, React, Vite, Webpack.',
		skill1: 'JavaScript',
		skill2: 'React',
		skill3: 'GIT',
		skill4: 'Vite/ Webpack',
	},
];

const MINOR_COURSES = [
	{
		name: 'Authentic Leadership: Bring Your Whole Self to Work',
		link: 'https://www.udemy.com/course/authentic-leadership-skills/?kw=authentic+leader&src=sac&couponCode=24T3FS41524',
		description: 'Build Trust, Inspire Performance, and Create Strong Relationships with Your Team',

		takeway1: '',
		takeway2: '',
		takeway3: '',
	},
];

const Courses = () => {
	return (
		<div id="courses" className="courses-container">
			<h1 className="courses-h">Courses</h1>
			<h2 className="courses-h2">Major</h2>
			<div className="major-courses_box">
				{MAJOR_COURSES.map(({ name, date, link, description, skill1, skill2, skill3, skill4 }) => {
					return (
						<div key={name} className="course-data_box">
							<div className="data-box_top">
								<h2 className="course-h">{name}</h2>
								<p className="course-date">{date}</p>
								<Link href={link} className="course-link">
									read more
								</Link>
							</div>
							<p className="course-description">{description}</p>
							<div className="course-skills">
								<span className="course-skill">{skill1}</span>
								<span className="course-skill">{skill2}</span>
								<span className="course-skill">{skill3}</span>
								<span className="course-skill">{skill4}</span>
							</div>
						</div>
					);
				})}
			</div>
			<h2 className="courses-h2">Minor</h2>
			<div className="minor-courses_box">
				{MINOR_COURSES.map(({ name, link, description, takeway1, takeway2, takeway3 }) => {
					return (
						<div key={name} className="course-data_box">
							<div className="data-box_top">
								<h2 className="course-h">{name}</h2>
								<Link href={link} className="course-link">
									read more
								</Link>
							</div>
							<p className="course-description">{description}</p>
							<div className="course-takeaways">
								<span className="course-takeaway">{takeway1}</span>
								<span className="course-takeaway">{takeway2}</span>
								<span className="course-takeaway">{takeway3}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Courses;
