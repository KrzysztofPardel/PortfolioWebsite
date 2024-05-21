'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CiLocationArrow1 } from 'react-icons/ci';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './../ProjectStyles.scss';
import { IMAGES_ITEMS, SKILL_ITEMS } from './DataArrays';

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
					{IMAGES_ITEMS.map(({ id, src, alt }) => {
						return <Image key={id} id={id} src={src} alt={alt} className="keen-slider__slide number-slide" />;
					})}
				</div>

				<div ref={thumbnailRef} className="keen-slider thumbnail">
					{IMAGES_ITEMS.map(({ id, src, alt }) => {
						return <Image key={id} id={id} src={src} alt={alt} className="keen-slider__slide number-slide" />;
					})}
				</div>
			</div>
			<div className="what-container_second">
				<h1 className="second-header">CRM</h1>
				<p className="second-summary">
					Connect your clients with solutions adequte to their needs and provide a satisfactory use of products over
					time.
				</p>
				{/* <Link href="" className="second-link">
					<CiLocationArrow1 className="link-icon" />
					See the mockup version
				</Link> */}
				<Link href="https://360softwarehouse.pl/" className="second-link">
					<CiLocationArrow1 className="link-icon" />
					360SoftwareHouse
				</Link>
				<div className="second-techstack_box">
					{SKILL_ITEMS.map(({ skill }) => {
						return (
							<p key={skill} className="techstack-box_skill">
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
