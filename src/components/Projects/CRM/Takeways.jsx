import { TAKEAWAYS_ITEMS } from './DataArrays';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Takeways = () => {
	return (
		<main className="takeaways-wrapper">
			<h1 className="takeaways-header">Takeways</h1>
			<section className="takeaways-items_container">
				{TAKEAWAYS_ITEMS.map(({ id, p_text, p_comment }) => {
					return (
						<div key={id} className="takeaways-box">
							<MdOutlineKeyboardDoubleArrowRight className="takeaways-item_icon" />
							<p className="takeway-item">{p_text}</p>
							<p className="takeway-comment">{p_comment}</p>
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default Takeways;
