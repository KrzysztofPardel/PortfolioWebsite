'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './SCSS/Slider.scss';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { PROJECT_ITEMS } from './DataArrays';

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
		setCurrentSlide(currentSlide + 1);
	};

	const handleNextSlide = () => {
		setCurrentSlide(currentSlide - 1);
	};

	return (
		<div className="wrapper">
			<div className="scene">
				<div ref={sliderRef} className="carousel keen-slider">
					{PROJECT_ITEMS.map(
						({ id, title, link, code, more, description, tech1, tech2, tech3, tech4, tech5, tech6 }) => {
							return (
								<div key={id} className={`carousel__cell number-slide${id}`}>
									{currentSlide === id}
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
					<p className=".carousel-p ">Drag to move the slider</p>

					<button onClick={handleNextSlide} className="carousel-btn">
						<MdOutlineKeyboardArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectSlider;
