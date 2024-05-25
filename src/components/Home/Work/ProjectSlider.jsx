'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './SCSS/Slider.scss';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { PROJECT_ITEMS } from './DataArrays';

const ProjectSlider = ({ totalSlides }) => {
	// const [currentSlide, setCurrentSlide] = useState(0);
	// const [loaded, setLoaded] = useState(false);
	// const [sliderRef] = useKeenSlider(
	// 	{
	// 		loop: true,
	// 		selector: '.carousel__cell',
	// 		renderMode: 'custom',
	// 		mode: 'free-snap',
	// 		initial: 0,
	// 		slideChanged(slider) {
	// 			setCurrentSlide(slider.track.details.rel);
	// 		},
	// 		created() {
	// 			setLoaded(true);
	// 		},
	// 	},
	// 	[carousel]
	// );

	// const handlePrevSlide = (e) => {
	// 	e.stopPropagation() || instanceRef.current?.prev();
	// };

	// const handleNextSlide = (e) => {
	// 	e.stopPropagation() || instanceRef.current?.prev();
	// };

	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [slideWidth, setSlideWidth] = useState('10rem');
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: -1,
		loop: true,
		slides: {
			perView: 3,
			spacing: 15,
		},
		slideChanged(slider) {
			const centerIndex = Math.floor(totalSlides / 1);
			const relativeSlide = slider.track.details.rel + 1;
			const centerSlide = (relativeSlide + centerIndex) % totalSlides;
			console.log('centerSlide', { relativeSlide, centerIndex, totalSlides });
			setCurrentSlide(centerSlide);

			if (centerSlide === currentSlide) {
				setSlideWidth('35rem');
			} else {
				setSlideWidth('10rem');
			}
		},
		created() {
			setLoaded(true);
		},
	});

	return (
		<div className="wrapper">
			{/* Projects */}
			<div className="scene">
				<div className="container-keen_slider">
					<div ref={sliderRef} className="keen-slider">
						{PROJECT_ITEMS.map(
							({ id, title, link, code, more, description, tech1, tech2, tech3, tech4, tech5, tech6 }) => {
								return (
									<div
										key={id}
										className={`keen-slider__slide number-slide ${
											currentSlide === id ? ' keen-slider__slide--center ' : ''
										}`}
										style={{ width: currentSlide === id ? '20rem' : slideWidth }}
									>
										<h2 className="">{title}</h2>
										<p className="">{description}</p>
									</div>
								);
							}
						)}
					</div>
				</div>
				{/* <div className="container-keen_slider">
					<div ref={sliderRef} className="keen-slider">
						{[...Array(totalSlides).keys()].map((index) => (
							<div
								key={index + 1}
								className={`keen-slider__slide number-slide ${
									currentSlide === index ? ' keen-slider__slide--center ' : ''
								}`}
								style={{ width: slideWidth }}
							>
								{index + 1}
							</div>
						))}
					</div>
				</div> */}
				{/* Nav */}
				{loaded && instanceRef.current && (
					<div className="dots">
						{[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
							return (
								<button
									key={idx}
									onClick={() => {
										instanceRef.current?.moveToIdx(idx);
									}}
									className={'dot' + (currentSlide === idx + 1 ? ' active' : '')}
								></button>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectSlider;
