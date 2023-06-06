import React from 'react';
import Image from 'next/image';
import stargazing from '../../../public/assets/stargazing.svg';
import homeoffice from '../../../public/assets/homeoffice.svg';
import fit from '../../../public/assets/fit.svg';
import './About.scss';
export const About = () => {
	return (
		<>
			<div id='about' className='container-about'>
				<div className='logo-about'>
					<div className='rectangle'>
						<p className='about'>about</p>
					</div>
					<div className='articles'>
						<div className='article'>
							<Image src={stargazing} alt='about' className='article-image' />

							<div className='article-text'>
								<h3 className='article-title'>Lorem ipsum dolor sit.</h3>
								<p className='article-paragraph'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi sed odit veniam eum? Rem
									perspiciatis, ullam accusantium corporis earum ad nisi blanditiis vel praesentium inventore sunt ex
									error nobis deserunt molestiae quaerat accusamus repellat eum unde nulla! Repudiandae atque nulla
									cumque! Dicta reprehenderit facere ipsum unde molestias repellat quaerat non rem, voluptatem
									consequatur temporibus doloribus voluptate deleniti laborum voluptas!
								</p>
							</div>
						</div>

						<div className='article reverse'>
							<Image src={homeoffice} alt='about' className='article-image second' />

							<div className='article-text'>
								<h3 className='article-title'>Lorem ipsum dolor sit.</h3>
								<p className='article-paragraph '>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi sed odit veniam eum? Rem
									perspiciatis, ullam accusantium corporis earum ad nisi blanditiis vel praesentium inventore sunt ex
									error nobis deserunt molestiae quaerat accusamus repellat eum unde nulla! Repudiandae atque nulla
									cumque! Dicta reprehenderit facere ipsum unde molestias repellat quaerat non rem, voluptatem
									consequatur temporibus doloribus voluptate deleniti laborum voluptas!
								</p>
							</div>
						</div>
						<div className='article'>
							<Image src={fit} alt='about' className='article-image third' />
							<div className='article-text'>
								<h3 className='article-title '>Lorem ipsum dolor sit.</h3>
								<p className='article-paragraph'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi sed odit veniam eum? Rem
									perspiciatis, ullam accusantium corporis earum ad nisi blanditiis vel praesentium inventore sunt ex
									error nobis deserunt molestiae quaerat accusamus repellat eum unde nulla! Repudiandae atque nulla
									cumque! Dicta reprehenderit facere ipsum unde molestias repellat quaerat non rem, voluptatem
									consequatur temporibus doloribus voluptate deleniti laborum voluptas!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default About;
