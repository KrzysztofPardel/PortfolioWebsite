'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './SCSS/Slider.scss';
import { PROJECT_ITEMS } from './DataArrays';

const ProjectSlider = ({ totalSlides }) => {
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
		<div className="projects-wrapper">
			{/* Projects */}
			<div className="projects-scene">
				<div className="container-keen_slider">
					<div ref={sliderRef} className="keen-slider">
						{PROJECT_ITEMS.map(({ id, title, description, more, src }) => {
							const isCenterSlide = id === currentSlide;
							return (
								<div
									key={id}
									className={`keen-slider__slide number-slide ${isCenterSlide ? ' keen-slider__slide--center ' : ''}`}
									style={{ width: isCenterSlide ? '35rem' : slideWidth }}
								>
									<div className="slide-text_box">
										<h2 className="slide-title">{title}</h2>
										<p className="slide-description">
											{description}{' '}
											<Link href={more} className="slide-link">
												Read more
											</Link>
										</p>
									</div>
									<Image src={src} alt="" className="slide-image" />
								</div>
							);
						})}
					</div>
				</div>
				{/* Nav */}
				{loaded && instanceRef.current && (
					<div className="dots">
						{[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
							return (
								<button
									key={idx}
									onClick={() => {
										instanceRef.current?.moveToIdx(idx - 1);
									}}
									className={'dot' + (currentSlide === idx ? ' active' : '')}
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
