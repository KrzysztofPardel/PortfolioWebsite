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
		name: 'Next.js 14 & React - The Complete Guide',
		link: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/?couponCode=ST7MT41824',
		description: 'Learn how to build fullstack React apps with NextJS 14 & the App Router',
		progress: 'in progress',
		takeway1: '',
		takeway2: '',
		takeway3: '',
	},
	{
		name: 'Authentic Leadership: Bring Your Whole Self to Work',
		link: 'https://www.udemy.com/course/authentic-leadership-skills/?kw=authentic+leader&src=sac&couponCode=24T3FS41524',
		description: 'Build Trust, Inspire Performance, and Create Strong Relationships with Your Team',
		progress: '',
		takeway1: 'Growth mindset- developing any ability is possible depending on someone’s dedication',
		takeway2:
			'Recognition is a positive feedback based on the results of work, while Appreciation is recognising people’s intrinsic value. We may not be able to recognise, but we can and we should always find ways to appreciate others.',
		takeway3: 'Hight expectations + High nurture. Too often there is just present one of the two.',
	},
	{
		name: 'How to Learn: Effective Approaches for Self-Guided Learning',
		link: 'https://www.udemy.com/course/how-to-learn-effective-approaches-for-self-guided-learning/#:~:text=Set%20goals%20in%20order%20to,a%20way%20to%20boost%20motivation',
		description:
			'Learning is an import investment in you and your future. If you look at it that way, how could you miss it?”- Padraig Nash, PhD in Learning Sciences',
		progress: '',
		takeway1: 'Setting a learning goal needs to be: SMART Specific, Measurable, Attainable, Relevant, Time-Based',
		takeway2: 'Feedback- the most fundamental mechanism of learning.',
		takeway3:
			'Intrinsic vs. Extrinsic motivation for learning. Both can be good but you need to manage them well. Intrinsic ( I want to learn something new) Extrinsic ( I want to learn in order to get a promotion). Learn to be motivated with both.',
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
								<h2 className="course-h2">{name}</h2>
								<Link href={link} className="course-link">
									read more
								</Link>
							</div>
							<p className="course-description">{description}</p>
							{/* <div className="course-takeaways">
								<span className="course-takeaway">{takeway1}</span>
								<span className="course-takeaway">{takeway2}</span>
								<span className="course-takeaway">{takeway3}</span>
							</div> */}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Courses;
