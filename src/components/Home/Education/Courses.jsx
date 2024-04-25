import React from 'react';
import Link from 'next/link';
import { MAJOR_COURSES, MINOR_COURSES } from './DataArrays';

const Courses = () => {
	return (
		<div id="courses" className="courses-container">
			<h1 className="courses-h">Courses</h1>
			<h2 className="courses-h2">Major</h2>
			<div className="major-courses_box">
				{MAJOR_COURSES.map(({ logo, name, date, link, description, skill1, skill2, skill3, skill4 }) => {
					return (
						<div key={name} className="course-data_box">
							<div className="data-box_top">
								<h2 className="course-h">
									<span className="course-logo">{logo}</span>
									{name}
								</h2>
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
