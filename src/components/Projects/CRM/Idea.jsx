import React from 'react';
import { PURPOSE_TEXT } from './DataArrays';

const Idea = () => {
	return (
		<main className="idea-wrapper">
			<section className="idea-text_container">
				<h1 className="idea-header">Idea behing the project</h1>
				{PURPOSE_TEXT.map(({ id, text }) => {
					return (
						<p key={id} className="idea-p">
							{text}
						</p>
					);
				})}
			</section>
			<div
				className="idea-background first-crm"
				data-aos="fade-right"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
			<div
				className="idea-background second-crm"
				data-aos="fade-left"
				data-aos-offset="150"
				data-aos-easing="ease-in-sine"
			/>
		</main>
	);
};

export default Idea;
