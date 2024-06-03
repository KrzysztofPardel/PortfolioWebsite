import React from 'react';
import styles from './SCSS/Degree.module.scss';

const Degrees = () => {
	return (
		<main id="degrees" className={styles.degreesContainer}>
			<h1 className={styles.degreesH}>My degree</h1>
			<div className={styles.degreeBox}>
				<h3 className={styles.degreeTitle}>Applied Information Technology (future plan)</h3>
				<div className={styles.whereWhenBox}>
					<p className={styles.degreeWhere}>University of Lodz, WFiIS</p>
					<p className={styles.degreeWhen}>approx. 10.2024-07.2026</p>
				</div>
				<p className={styles.degreeDescription}>
					This October I am beginning the journey of studying Applied IT. I believe this will expand my understanding of
					Information Technology in general and contribute toward my goal of becoming a Full Stack Developer.
				</p>
			</div>
			<div className={styles.degreeBox}>
				<h3 className={styles.degreeTitle}>Architecture</h3>
				<div className={styles.whereWhenBox}>
					<p className={styles.degreeWhere}>Lodz University of Technology, WBAIŚ</p>
					<p className={styles.degreeWhen}>09.2016-07.2020</p>
				</div>
				<p className={styles.degreeDescription}>
					Studying architecture equipped me to have a designer&rsquo;s perception of the world. The ability to use
					color, shape, and form to design a space which is not only habitable but also enjoyable was a challenge that
					constantly developed me throughout my years of studying. Although I am no longer an architecture student the
					hard-working spirit and the designer&rsquo;s outlook on life have become my second nature.
				</p>
				<div className={styles.degreeSkills}>
					<span className={styles.degreeSkill}>AutoCAD</span>
					<span className={styles.degreeSkill}>Revit</span>
					<span className={styles.degreeSkill}>SketchUp</span>
					<span className={styles.degreeSkill}>Affinity Photo</span>
					<span className={styles.degreeSkill}>Public speaking</span>
					<span className={styles.degreeSkill}>Project presentation</span>
				</div>
			</div>
		</main>
	);
};

export default Degrees;
