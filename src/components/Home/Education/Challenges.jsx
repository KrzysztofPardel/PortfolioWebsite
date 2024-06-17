import React from 'react';
import Link from 'next/link';
import { COLUMN_A, COLUMN_B, COLUMN_C } from './DataArrays';
import styles from './SCSS/Challenges.module.scss';

const Challenges = () => {
	return (
		<main id="challenges" className={styles['challenges-container']}>
			<h1 className={styles['challenges-h']}>Sources of Challenges</h1>
			<h2 className={styles['challenges-h2']}>We all need challenges to grow, don&apos;t we?</h2>
			<h3 className={styles['challenges-h3']}>Do you want to know what are my sources of challenges?</h3>
			<section className={styles['challenges-mentor']}>
				<p className={styles['mentor-box']}>
					<Link
						href="https://www.linkedin.com/in/adamjochemczyk/"
						className={styles['mentor-link']}
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						Adam Jochemczyk
					</Link>
					from
					<Link
						href="https://wizardsofcode.pl"
						className={styles['mentor-link']}
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						Wizards of Code
					</Link>
				</p>

				<p className={styles['mentor-description']}>
					Adam has been relentlessly pushing my understanding of the front-end technologies for the past 8 months. His
					insight, knowledge, and kind approach make him a fantastic teacher. Aside from being a faithful support
					throughout various projects, I can count on his opinion and advice in the next steps of my development.
				</p>
			</section>
				<h3 className={styles['challenges-h3']}>I also benefit from:</h3>
			<section className={styles['challenges-columns']}>
				<div className={styles['columnA']}>
					{COLUMN_A.map(({ id, source, link }) => (
						<Link
							id={id}
							key={id}
							href={link}
							className={styles['course-link']}
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							{source}
						</Link>
					))}
				</div>
				<div className={styles['columnB']}>
					{COLUMN_B.map(({ id, source, link }) => (
						<Link
							id={id}
							key={id}
							href={link}
							className={styles['course-link']}
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							{source}
						</Link>
					))}
				</div>
				<div className={styles['columnC']}>
					{COLUMN_C.map(({ id, source, link }) => (
						<Link
							id={id}
							key={id}
							href={link}
							className={styles['course-link']}
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							{source}
						</Link>
					))}
				</div>
			</section>
		</main>
	);
};

export default Challenges;
