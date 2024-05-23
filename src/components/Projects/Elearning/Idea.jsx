import { IDEA_TEXT } from './DataArray';

const Idea = () => {
	return (
		<div className="idea-wrapper">
			<div className="idea-text_container">
				<h1 className="idea-header">Idea behing the project</h1>
				{IDEA_TEXT.map(({ id, text }) => {
					return (
						<p key={id} className="idea-p">
							{text}
						</p>
					);
				})}
			</div>
			<div
				className="idea-background first-learnNow "
				data-aos="fade-right"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
			<div
				className="idea-background second-learnNow"
				data-aos="fade-left"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
		</div>
	);
};

export default Idea;
