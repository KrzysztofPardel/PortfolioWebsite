import React from 'react';
import { TAKEAWAYS_ITEMS } from './DataArrays';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import styles from './SCSS/Takeaways.module.scss';

const Takeaways = () => {
	return (
		<main className={styles['takeaways-wrapper']}>
			<h1 className={styles['takeaways-header']}>Takeaways</h1>
			<section className={styles['takeaways-items_container']}>
				{TAKEAWAYS_ITEMS.map(({ id, p_text, p_comment }) => {
					return (
						<div key={id} className={styles['takeaways-box']}>
							<div className={styles['takeway-box_subbox']}>
								<MdOutlineKeyboardDoubleArrowRight className={styles['takeaways-item_icon']} />
								<p className={styles['takeway-item']}>{p_text}</p>
							</div>
							<p className={styles['takeway-comment']}>{p_comment}</p>
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default Takeaways;
