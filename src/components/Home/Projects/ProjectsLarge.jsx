'use client';
import React, { useState } from 'react';
import './ProjectsLarge.scss';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '../../../../public/trial/1.jpg';
import image2 from '../../../../public/trial/2.jpg';
import image3 from '../../../../public/trial/3.jpg';

// General
// export const Project = (image, title, stack, description, link) => {
// 	return (
// 		<>
// 			<div className='p-container'>
// 				<div className='p-image'>
// 					<Image className='p-image' src={image} alt='project image' />
// 				</div>
// 				<h1 className='p-title'>{title}</h1>
// 				<h2 className='p-stack'>{stack}</h2>
// 				<p className='p-description'>{description}</p>
// 				<div className='p-link_cont'>
// 					<Link href={link} className='p-link'>
// 						See More
// 					</Link>
// 				</div>
// 			</div>
// 			;
// 		</>
// 	);
// };
// Give
const Project1 = (i) => {
	return (
		<>
			<div className='p-container'>
				<div className='p-image'>
					<Image className='p-image' src={image1} alt='project image' />
				</div>
				<h1 className='p-title'>Give</h1>
				<h2 className='p-stack'>React.js + TypeScript + Firebase</h2>
				<p className='p-description'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta voluptates eum nulla nihil pariatur
					minima dolor tenetur, similique officia!
				</p>
				<div className='p-link_cont'>
					<Link href='/home/give' className='p-link'>
						See More
					</Link>
				</div>
			</div>
			;
		</>
	);
};
// Vacation
const Project2 = (i) => {
	return (
		<>
			<div className='p-container'>
				<div className='p-image'>
					<Image className='p-image' src={image2} alt='project image' />
				</div>
				<h1 className='p-title'>Vacation</h1>
				<h2 className='p-stack'>React.js + Firebase</h2>
				<p className='p-description'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta voluptates eum nulla nihil pariatur
					minima dolor tenetur, similique officia!
				</p>
				<div className='p-link_cont'>
					<Link href='/home/vacation' className='p-link'>
						See More
					</Link>
				</div>
			</div>
			;
		</>
	);
};
// TravelApp
const Project3 = (i) => {
	return (
		<>
			<div className='p-container'>
				<div className='p-image'>
					<Image className='p-image' src={image3} alt='project image' />
				</div>
				<h1 className='p-title'>TravelApp</h1>
				<h2 className='p-stack'>React.js</h2>
				<p className='p-description'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta voluptates eum nulla nihil pariatur
					minima dolor tenetur, similique officia!
				</p>
				<div className='p-link_cont'>
					<Link href='/home/travelapp' className='p-link'>
						See More
					</Link>
				</div>
			</div>
			;
		</>
	);
};

export default [<Project1 key='i' />, <Project2 key='i' />, <Project3 key='i' />];
