import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { TAKEAWAYS_ITEMS } from './DataArrays';

const Takeaways = () => {
	return (
		<div className="takeaways-wrapper">
			<h1 className="takeaways-header">Takeways</h1>
			<div className="takeaways-items_container">
				{TAKEAWAYS_ITEMS.map(({ id, p_text, p_comment }) => {
					return (
						<div key={id} className="takeaways-box">
							<MdOutlineKeyboardDoubleArrowRight className="takeaways-item_icon" />
							<p className="takeway-item">{p_text}</p>
							<p className="takeway-item comment">{p_comment}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Takeaways;
