import React from 'react';
//Data
import { PURPOSE_TEXT } from './DataArrays';
//Styles
import styles from './SCSS/Idea.module.scss';

const Idea = () => {
	return (
		<div className={styles['idea-wrapper']}>
			<div className={styles['idea-text_container']}>
				<h1 className={styles['idea-header']}>Idea behing the project</h1>
				{PURPOSE_TEXT.map(({ id, text }) => {
					return (
						<p key={id} className={styles['idea-p']}>
							{text}
						</p>
					);
				})}
			</div>
			<div
				className={`${styles['idea-background']} ${styles['first-give']}`}
				data-aos="fade-right"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
			<div
				className={`${styles['idea-background']} ${styles['second-give']}`}
				data-aos="fade-left"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
		</div>
	);
};

export default Idea;
