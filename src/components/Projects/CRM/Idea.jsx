import React from 'react';
import { PURPOSE_TEXT } from './DataArrays';
//Styles
import styles from './SCSS/Idea.module.scss';

const Idea = () => {
	return (
		<main className={styles['idea-wrapper']}>
			<section className={styles['idea-text_container']}>
				<h1 className={styles['idea-header']}>Idea behind the project</h1>
				{PURPOSE_TEXT.map(({ id, text }) => {
					return (
						<p key={id} className={styles['idea-p']}>
							{text}
						</p>
					);
				})}
			</section>
			<div
				className={`${styles['idea-background']} ${styles['first-crm']}`}
				data-aos="fade-right"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
			<div
				className={`${styles['idea-background']} ${styles['second-crm']}`}
				data-aos="fade-left"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
		</main>
	);
};

export default Idea;
