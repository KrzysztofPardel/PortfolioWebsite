import React from 'react';
import { PURPOSE_TEXT } from './DataArrays';

const Purpose = () => {
	return (
		<div className="purpose-wrapper">
			<div className="purpose-text_container">
				<h1 className="purpose-header">Idea behing the project</h1>
				{PURPOSE_TEXT.map(({ id, text }) => {
					return (
						<p key={id} className="purpose-p">
							{text}
						</p>
					);
				})}
			</div>
			<div
				className="purpose-background one"
				data-aos="fade-right"
				data-aos-offset="300"
				data-aos-easing="ease-in-sine"
			/>
			<div
				className="purpose-background second"
				data-aos="fade-left"
				data-aos-offset="300"
				data-aos-easing="ease-in-sine"
			/>
		</div>
	);
};

export default Purpose;
