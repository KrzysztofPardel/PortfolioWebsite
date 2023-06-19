import React from 'react';
import './Values.scss';
export const Values = () => {
	return (
		<>
			<div id='values' className='container-values'>
				<div className='section-rectangle'>
					<p className='section-title'>Values</p>
				</div>
				<div className='values-con'>
					<div className='v-box'>
						<div className='v-icon'>Development</div>
						<p className='v-paragraph'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, exercitationem inventore neque
							repudiandae aut iure animi explicabo eos eveniet pariatur?
						</p>
					</div>
					<div className='v-line' />
					<div className='v-box'>
						<div className='v-icon'>Enthusiasm</div>
						<p className='v-paragraph'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, exercitationem inventore neque
							repudiandae aut iure animi explicabo eos eveniet pariatur?
						</p>
					</div>
					<div className='v-line' />
					<div className='v-box'>
						<div className='v-icon'>Integrity</div>
						<p className='v-paragraph'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, exercitationem inventore neque
							repudiandae aut iure animi explicabo eos eveniet pariatur?
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Values;
