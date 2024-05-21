import What from './What';
import Purpose from './Idea';
import Takeways from './Takeaways';
import Solution from './Solution';
import './../ProjectStyles.scss';

const Give = () => {
	return (
		<section className="project-container">
			<What />
			<Purpose />
			<Solution />
			<Takeways />
		</section>
	);
};

export default Give;
