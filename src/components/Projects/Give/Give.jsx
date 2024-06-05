import What from './What';
import Purpose from './Idea';
import Takeways from './Takeaways';
import Solution from './Solution';
import './../SliderStyles.scss';
import styles from '../General.module.scss';

const Give = () => {
	return (
		<section className={styles['project-container']}>
			<What />
			<Purpose />
			<Solution />
			<Takeways />
		</section>
	);
};

export default Give;
