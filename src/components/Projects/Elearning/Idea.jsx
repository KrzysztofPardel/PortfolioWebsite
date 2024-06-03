import { IDEA_TEXT } from './DataArray';
// Styles
import styles from './SCSS/Idea.module.scss';

const Idea = () => {
	return (
		<div className={styles['idea-wrapper']}>
			<div className={styles['idea-text_container']}>
				<h1 className={styles['idea-header']}>Idea behind the project</h1>
				{IDEA_TEXT.map(({ id, text }) => {
					return (
						<p key={id} className={styles['idea-p']}>
							{text}
						</p>
					);
				})}
			</div>
			<div
				className={`${styles['idea-background']} ${styles['first-learnNow']}`}
				data-aos="fade-right"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
			<div
				className={`${styles['idea-background']} ${styles['second-learnNow']}`}
				data-aos="fade-left"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
		</div>
	);
};

export default Idea;
