'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './SCSS/Slider.scss';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const carousel = (slider) => {
	const z = 300;
	function rotate() {
		const deg = 360 * slider.track.details.progress;
		slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
	}
	slider.on('created', () => {
		const deg = 360 / slider.slides.length;
		slider.slides.forEach((element, idx) => {
			element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
		});
		rotate();
	});
	slider.on('detailsChanged', rotate);
};
const PROJECT_ITEMS = [
	{
		id: 1,
		title: 'Give',
		link: 'https://give-pi.vercel.app/',
		code: 'https://github.com/KrzysztofPardel/Give',
		more: '',
		description:
			'Donate items or organize a collection with just few clicks.Be the connection between those who HAVE and those who NEED.',
		tech1: 'React',
		tech2: 'TypeScript',
		tech3: 'Redux Toolkit',
		tech4: 'Firebase',
		tech5: 'SCSS',
		tech6: 'Vite',
	},
	{
		id: 2,
		title: 'CRM',
		link: '',
		code: '',
		more: '',
		description: 'As part of my internship, I took was developing the fornt-end layer for a CRM for SoftwareHouse360.',
		tech1: 'React',
		tech2: 'TypeScript',
		tech3: 'SCSS',
		tech4: 'Vite',
		tech5: 'SCRUM methodology',
		tech6: '',
	},
	{
		id: 3,
		title: 'Portfolio Website',
		link: '',
		code: 'https://github.com/KrzysztofPardel/PortfolioWebsite',
		more: '',
		description: 'Personal website showcasing my experience, skills and personality',
		tech1: 'Next',
		tech2: 'JavaScript',
		tech3: 'SCSS',
		tech4: 'Vercel',
		tech5: '',
		tech6: '',
	},
	{
		id: 4,
		title: 'New Project!',
		link: '',
		code: '',
		more: '',
		description: 'Under development. Stay tuned!',
		tech1: '',
		tech2: '',
		tech3: '',
		tech4: '',
		tech5: '',
		tech6: '',
	},
];

const ProjectSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const [sliderRef] = useKeenSlider(
		{
			loop: true,
			selector: '.carousel__cell',
			renderMode: 'custom',
			mode: 'free-snap',
		},
		[carousel]
	);

	const handlePrevSlide = () => {
		if (slider) {
			setCurrentSlide((prevSlide) => (prevSlide === 0 ? slider.details().size - 1 : prevSlide - 1));
			slider.prev();
		}
	};

	const handleNextSlide = () => {
		if (slider) {
			setCurrentSlide((prevSlide) => (prevSlide === slider.details().size - 1 ? 0 : prevSlide + 1));
			slider.next();
		}
	};

	return (
		<div className="wrapper">
			<div className="scene">
				<div ref={sliderRef} className="carousel keen-slider">
					{PROJECT_ITEMS.map(
						({ id, title, link, code, more, description, tech1, tech2, tech3, tech4, tech5, tech6 }) => {
							return (
								<div value={currentSlide} key={id} className={`carousel__cell number-slide${id}`}>
									<h2 className="project-h">{title}</h2>
									<div className="project-links">
										<Link href={link} className="project-link">
											live
										</Link>
										<Link href={code} className="project-link">
											source code
										</Link>
										<Link href={more} className="project-link">
											read more
										</Link>
									</div>
									<div className="project-skills">
										<span className="project-skill">{tech1}</span>
										<span className="project-skill">{tech2}</span>
										<span className="project-skill">{tech3}</span>
										<span className="project-skill">{tech4}</span>
										<span className="project-skill">{tech5}</span>
										<span className="project-skill">{tech6}</span>
									</div>
									<p className="project-description">{description}</p>
								</div>
							);
						}
					)}
				</div>
				<div className="carousel-btn_container">
					<button onClick={handlePrevSlide} className="carousel-btn">
						<MdOutlineKeyboardArrowLeft />
					</button>
					<button onClick={handleNextSlide} className="carousel-btn">
						<MdOutlineKeyboardArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectSlider;
