'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './SCSS/Slider.scss';
import { PROJECT_ITEMS } from './DataArrays';

const ProjectSlider = ({ totalSlides }) => {
	const [mobileViewForProjects, setMobileViewForProjects] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [slideWidth, setSlideWidth] = useState('10rem');
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: -1,
		// initial: -1,
		loop: true,
		slides: {
			perView: `${mobileViewForProjects ? 1 : 3}`,
			spacing: `${mobileViewForProjects ? 100 : 15}`,
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

	useEffect(() => {
		const changeMobile = () => {
			if (window.innerWidth <= 700) {
				setMobileViewForProjects(true);
			} else {
				setMobileViewForProjects(false);
			}
		};
		//Update the state the moment component mounts up
		changeMobile();
		//Does it run in the browser? If yes, addEventListener to
		//check the condition for changeMobile
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', changeMobile);
		}

		//clan-up when component unmounts
		const handleRemoveListener = () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', changeMobile);
			}
		};

		return () => {
			handleRemoveListener;
		};
	}, [scrollX]);

	return (
		<main className="projects-wrapper">
			{/* Projects */}
			<div className="projects-scene">
				<div className="container-keen_slider">
					<div ref={sliderRef} className="keen-slider">
						{PROJECT_ITEMS.map(({ id, title, description, more, src }) => {
							const isCenterSlide = id === currentSlide;
							return (
								<div
									key={id}
									className={`keen-slider__slide number-slide ${isCenterSlide ? 'keen-slider__slide--center' : ''}
									${mobileViewForProjects ? 'keen-slider__slide--center' : ''}`}
									style={{ width: isCenterSlide ? '35rem' : slideWidth }}
								>
									<div className="slide-text_box">
										<h2 className="slide-title">{title}</h2>
										<p className="slide-description">
											{description}{' '}
											<Link href={more} className="slide-link">
												See more
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
										// instanceRef.current?.moveToIdx(idx - 1);
										instanceRef.current?.moveToIdx(idx - `${mobileViewForProjects ? 0 : -1}`);
										// `${mobileViewForProjects ? 0 : -1}`;
									}}
									className={'dot' + (currentSlide === idx ? ' active' : '')}
								></button>
							);
						})}
					</div>
				)}
			</div>
		</main>
	);
};

export default ProjectSlider;
