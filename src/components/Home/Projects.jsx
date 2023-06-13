'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Projects.scss';
import { motion } from 'framer-motion';
import images from './images';
import Image from 'next/image';

export const Projects = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	console.log(images);
	return (
		<>
			<div className='container-projects'>
				<div className='section-rectangle'>
					<p className='section-title'>projects</p>
				</div>
				<motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
					<motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
						{images.map((image, i) => {
							return (
								<motion.div className='item' key={i}>
									<Image src={image} alt='' className='image' />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};
export default Projects;
