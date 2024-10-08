'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiLocationArrow1 } from 'react-icons/ci';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { IMAGES_ITEMS, SKILL_ITEMS } from './DataArrays';
import styles from './SCSS/What.module.scss';

export function ThumbnailPlugin(mainRef) {
	return (slider) => {
		function removeActive() {
			slider.slides.forEach((slide) => {
				slide.classList.remove(styles['active']);
			});
		}

		function addActive(idx) {
			slider.slides[idx].classList.add(styles['active']);
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
				<div ref={sliderRef} className={`keen-slider ${styles['keen-slider']}`}>
					{IMAGES_ITEMS.map(({ id, src, alt }) => {
						return (
							<Image key={id} id={id} src={src} alt={alt} className={`keen-slider__slide ${styles['number-slide']}`} />
						);
					})}
				</div>

				<div ref={thumbnailRef} className={`keen-slider thumbnail ${styles['thumbnail']}`}>
					{IMAGES_ITEMS.map(({ id, src, alt }) => {
						return (
							<Image key={id} id={id} src={src} alt={alt} className={`keen-slider__slide ${styles['number-slide']}`} />
						);
					})}
				</div>
			</div>
			<div className={styles['what-container_second']}>
				<h1 className={styles['second-header']}>CRM</h1>
				<p className={styles['second-summary']}>
					Connect your clients with solutions adequate to their needs and provide a satisfactory use of products over
					time.
				</p>

				<Link href="https://360softwarehouse.pl/" className={styles['second-link']}>
					<CiLocationArrow1 className={styles['link-icon']} />
					360SoftwareHouse
				</Link>
				<div className={styles['second-techstack_box']}>
					{SKILL_ITEMS.map(({ skill }) => {
						return (
							<p key={skill} className={styles['techstack-box_skill']}>
								{skill}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default What;
