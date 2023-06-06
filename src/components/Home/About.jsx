import React from 'react';
import Image from 'next/image';
import aboutBlack from '../../../public/assets/aboutBlack.png';

import './About.scss';
export const About = () => {
	return (
		<>
			<div id='about' className='container-about'>
				<div className='logo-about'>
					<div className='rectangle'>
						{/* <Image src={aboutBlack} alt='about' className='about' /> */}
						<p className='about'>about</p>
					</div>
					<div className='articles'>
						<div className='article'>

						</div>
						<div className='article'>

						</div>
						<div className='article'>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default About;
