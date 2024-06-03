'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Slider
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// Data
import { IMAGES_ITEMS, SKILL_ITEMS } from './DataArrays';
// Styles
import styles from './SCSS/What.module.scss';
import { SiGithub } from 'react-icons/si';
import { CiLocationArrow1 } from 'react-icons/ci';

export function ThumbnailPlugin(mainRef) {
	return (slider) => {
		function removeActive() {
			slider.slides.forEach((slide) => {
				slide.classList.remove(styles.active);
			});
		}

		function addActive(idx) {
			slider.slides[idx].classList.add(styles.active);
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
		<div className={styles['what-wrapper']}>
			<div className={styles['what-container_first']}>
				<div ref={sliderRef} className="keen-slider">
					{IMAGES_ITEMS.map(({ id, src, alt }) => (
						<Image key={id} id={id} src={src} alt={alt} className="keen-slider__slide number-slide" />
					))}
				</div>

				<div ref={thumbnailRef} className="keen-slider thumbnail">
					{IMAGES_ITEMS.map(({ id, src, alt }) => (
						<Image key={id} id={id} src={src} alt={alt} className="keen-slider__slide number-slide" />
					))}
				</div>
			</div>
			<div className={styles['what-container_second']}>
				<h1 className={styles['second-header']}>Give</h1>
				<p className={styles['second-summary']}>Be the connection between those who HAVE and those who NEED.</p>
				<Link href="https://give-pi.vercel.app/" className={styles['second-link']}>
					<CiLocationArrow1 className={styles['link-icon']} />
					See Live
				</Link>
				<Link href="https://github.com/KrzysztofPardel/Give" className={styles['second-link']}>
					<SiGithub className={styles['link-icon']} />
					See Github
				</Link>
				<div className={styles['second-techstack_box']}>
					{SKILL_ITEMS.map(({ skill }) => (
						<p key={skill} className={styles['techstack-box_skill']}>
							{skill}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default What;
