import React from 'react';
import Link from 'next/link';
import { MAJOR_COURSES, MINOR_COURSES } from './DataArrays';
import styles from './SCSS/Courses.module.scss';

const Courses = () => {
	return (
		<main id="courses" className={styles['courses-container']}>
			<h1 className={styles['courses-h']}>Courses</h1>
			<h2 className={styles['courses-h2']}>Major</h2>
			<section className={styles['major-courses_box']}>
				{MAJOR_COURSES.map(({ logo, name, date, link, description, skill1, skill2, skill3, skill4 }) => {
					return (
						<div key={name} className={styles['course-data_box']}>
							<div className={styles['data-box_top']}>
								<h2 className={styles['course-h']}>
									<span className={styles['course-logo']}>{logo}</span>
									{name}
								</h2>
								<div className={styles['course-details']}>
									<p className={styles['course-date']}>{date}</p>
									<Link href={link} className={styles['course-link']}>
										read more
									</Link>
								</div>
							</div>
							<p className={styles['course-description']}>{description}</p>
							<div className={styles['course-skills']}>
								<span className={styles['course-skill']}>{skill1}</span>
								<span className={styles['course-skill']}>{skill2}</span>
								<span className={styles['course-skill']}>{skill3}</span>
								<span className={styles['course-skill']}>{skill4}</span>
							</div>
						</div>
					);
				})}
			</section>
			<h2 className={styles['courses-h2']}>Minor</h2>
			<section className={styles['minor-courses_box']}>
				{MINOR_COURSES.map(({ name, link, description }) => {
					return (
						<div key={name} className={styles['course-data_box']}>
							<div className={styles['data-box_top']}>
								<h2 className={styles['course-h2']}>{name}</h2>
								<div className={styles['course-details']}>
									<Link href={link} className={styles['course-link']}>
										read more
									</Link>
								</div>
							</div>
							<p className={styles['course-description']}>{description}</p>
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default Courses;
