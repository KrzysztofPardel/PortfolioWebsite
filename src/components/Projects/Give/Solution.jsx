import React from 'react';
// Styles
import styles from './SCSS/Solution.module.scss';
import 'aos/dist/aos.css';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { CiCircleChevRight } from 'react-icons/ci';
// Data
import { ARTICLE_ITEMS, FEATURE_ITEMS } from './DataArrays';

const Solution = () => {
	return (
		<section className={styles['solution-wrapper']}>
			<h1 className={styles['solution-header']}>Solution</h1>
			<div className={styles['solution-articles']}>
				{ARTICLE_ITEMS.map(({ id, icon, p_text }) => {
					return (
						<React.Fragment key={id}>
							<article className={styles['solution-article']}>
								{icon}
								<p className={styles['article-text']}>{p_text}</p>
							</article>
							<HiOutlineArrowSmRight className={styles['article-arrow']} />
						</React.Fragment>
					);
				})}
			</div>
			<div className={styles['solution-features']}>
				<h2 className={styles['solution-features_header']}>Technical features</h2>
				<ul className={styles['solution-feature_list']}>
					{FEATURE_ITEMS.map(({ id, text }) => {
						return (
							<div
								key={id}
								className={styles['solution-list_item']}
								data-aos="flip-up"
								data-aos-anchor-placement="top-bottom"
							>
								<p className={styles['solution-feature_icon']}>
									<CiCircleChevRight />
								</p>
								<span className={styles['solution-feature']}>{text}</span>
							</div>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Solution;
