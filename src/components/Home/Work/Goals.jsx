'use client';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GOALS_DATA } from './DataArrays';
import styles from './SCSS/Goals.module.scss'; 

const Goals = () => {
	return (
		<div id="goals" className={styles['goals-container']}>
			<h1 className={styles['goals-h']}>Goals</h1>
			<h2 className={styles['goals-h2']}>Simple, but clear.</h2>
			<div className={styles['goals-boxes']}>
				{GOALS_DATA.map(({ id, p, data }) => {
					return (
						<div
							key={id}
							className={styles['goals-box']}
							data-aos="fade-right"
							data-aos-offset="400"
							data-aos-easing="ease-in-sine"
						>
							<p className={styles['goals-box_nr']}>#{id}</p>
							<p className={styles['goals-box_p']}>{p}</p>
							<p className={styles['goals-box_timeline']}>{data}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Goals;
