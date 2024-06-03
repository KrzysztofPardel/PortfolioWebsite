import React from 'react';
// Data
import { TAKEAWAYS_ITEMS } from './DataArrays';
// Styles
import styles from './SCSS/Takeaways.module.scss';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Takeaways = () => {
	return (
		<div className={styles['takeaways-wrapper']}>
			<h1 className={styles['takeaways-header']}>Takeways</h1>
			<div className={styles['takeaways-items_container']}>
				{TAKEAWAYS_ITEMS.map(({ id, p_text, p_comment }) => {
					return (
						<div key={id} className={styles['takeaways-box']}>
							<MdOutlineKeyboardDoubleArrowRight className={styles['takeaways-item_icon']} />
							<p className={styles['takeway-item']}>{p_text}</p>
							<p className={styles['takeway-comment']}>{p_comment}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Takeaways;
