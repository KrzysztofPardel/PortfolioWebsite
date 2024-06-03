import React from 'react';
import Link from 'next/link';
import { MAJOR_COURSES, MINOR_COURSES } from './DataArrays';
import styles from './SCSS/Courses.module.scss';

const Courses = () => {
	return (
		<main id="courses" className={styles.coursesContainer}>
			<h1 className={styles.coursesH}>Courses</h1>
			<h2 className={styles.coursesH2}>Major</h2>
			<section className={styles.majorCoursesBox}>
				{MAJOR_COURSES.map(({ logo, name, date, link, description, skill1, skill2, skill3, skill4 }) => {
					return (
						<div key={name} className={styles.courseDataBox}>
							<div className={styles.dataBoxTop}>
								<h2 className={styles.courseH}>
									<span className={styles.courseLogo}>{logo}</span>
									{name}
								</h2>
								<p className={styles.courseDate}>{date}</p>
								<Link href={link} className={styles.courseLink}>
									read more
								</Link>
							</div>
							<p className={styles.courseDescription}>{description}</p>
							<div className={styles.courseSkills}>
								<span className={styles.courseSkill}>{skill1}</span>
								<span className={styles.courseSkill}>{skill2}</span>
								<span className={styles.courseSkill}>{skill3}</span>
								<span className={styles.courseSkill}>{skill4}</span>
							</div>
						</div>
					);
				})}
			</section>
			<h2 className={styles.coursesH2}>Minor</h2>
			<section className={styles.minorCoursesBox}>
				{MINOR_COURSES.map(({ name, link, description, takeway1, takeway2, takeway3 }) => {
					return (
						<div key={name} className={styles.courseDataBox}>
							<div className={styles.dataBoxTop}>
								<h2 className={styles.courseH2}>{name}</h2>
								<Link href={link} className={styles.courseLink}>
									read more
								</Link>
							</div>
							<p className={styles.courseDescription}>{description}</p>
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default Courses;
