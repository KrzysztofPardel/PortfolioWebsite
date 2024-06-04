import React from 'react';
import { GRID_ARTICLES } from './DataArrays';
import styles from './SCSS/Solution.module.scss';

const Solution = () => {
	return (
		<section className={styles['solution-wrapper_crm']}>
			<h1 className={`${styles['solution-header']} ${styles['crm-header']}`}>My contribution</h1>
			<p className={styles['solution-note']}>
				*It&apos;s worth noting that in order to respect the company&apos;s idea as well as their privacy policy not all
				of the details can be shared.
			</p>
			<div className={styles['solution-grid']}>
				{GRID_ARTICLES.map(({ id, title, text }) => {
					return (
						<article key={id} className={`${styles['grid-article']} ${styles[`article-${id}`]}`}>
							<h2 className={styles['grid-article_header']}>{title}</h2>
							<p className={styles['grid-article_paragraph']}>{text}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Solution;
