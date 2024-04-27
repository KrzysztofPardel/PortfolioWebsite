'use client';
import React from 'react';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { LuExternalLink } from 'react-icons/lu';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export function ThumbnailPlugin(mainRef) {
	return (slider) => {
		function removeActive() {
			slider.slides.forEach((slide) => {
				slide.classList.remove('active');
			});
		}

		function addActive(idx) {
			slider.slides[idx].classList.add('active');
		}

		function addClickEvents() {
			slider.slides.forEach((slide, idx) => {
				slide.addEventListener('click', () => {
					if (mainRef.current) mainRef.current.moveToIdx(idx);
				});
			});
		}

		slider.on('created', () => {
			if (!mainRef.current) return;
			addActive(slider.track.details.rel);
			addClickEvents();
			mainRef.current.on('animationStarted', (main) => {
				removeActive();
				const next = main.animator.targetIdx || 0;
				addActive(main.track.absToRel(next));
				slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
			});
		});
	};
}

const What = () => {
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		slides: {
			perView: 1,
			spacing: 20,
		},
	});
	const [thumbnailRef] = useKeenSlider(
		{
			loop: true,
			initial: 0,
			slides: {
				perView: 4,
				spacing: 10,
			},
		},
		[ThumbnailPlugin(instanceRef)]
	);
	return (
		<div className="what-wrapper">
			<div className="what-container_first">
				<div ref={sliderRef} className="keen-slider">
					<div className="keen-slider__slide number-slide1">1</div>
					<div className="keen-slider__slide number-slide2">2</div>
					<div className="keen-slider__slide number-slide3">3</div>
					<div className="keen-slider__slide number-slide4">4</div>
					<div className="keen-slider__slide number-slide5">5</div>
					<div className="keen-slider__slide number-slide6">6</div>
				</div>

				<div ref={thumbnailRef} className="keen-slider thumbnail">
					<div className="keen-slider__slide number-slide1">1</div>
					<div className="keen-slider__slide number-slide2">2</div>
					<div className="keen-slider__slide number-slide3">3</div>
					<div className="keen-slider__slide number-slide4">4</div>
					<div className="keen-slider__slide number-slide5">5</div>
					<div className="keen-slider__slide number-slide6">6</div>
				</div>
			</div>
			<div className="what-container_second">
				<h1 className="second-header">Give</h1>
				<p className="second-summary">Be the connection between those who HAVE and those who NEED.</p>
				<Link href="https://give-pi.vercel.app/" className="second-link">
					<LuExternalLink className="link-icon" />
					See Live
				</Link>
				<Link href="https://github.com/KrzysztofPardel/Give" className="second-link">
					<SiGithub className="link-icon" />
					See Github
				</Link>
				<div className="second-techstack_box">
					<p className="techstack-box_skill">React</p>
					<p className="techstack-box_skill">TypeScript</p>
					<p className="techstack-box_skill">Redux Toolkit</p>
					<p className="techstack-box_skill">Firebase</p>
					<p className="techstack-box_skill">SCSS</p>
					<p className="techstack-box_skill">Vite</p>
				</div>
			</div>
		</div>
	);
};

export default What;
