'use client';
import Link from 'next/link';
import Image from 'next/image';
//Styles
import './../ProjectStyles.scss';
import { CiLocationArrow1 } from 'react-icons/ci';
//Data
import { IMAGES_ITEMS, SKILL_ITEMS } from './DataArrays';
//Slider
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ThumbnailPlugin from './../Give/What';

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
		<main className="what-wrapper">
			<section className="what-container_first">
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
			</section>
			<section className="what-container_second">
				<h1 className="second-header">CRM</h1>
				<p className="second-summary">
					Connect your clients with solutions adequte to their needs and provide a satisfactory use of products over
					time.
				</p>
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
			</section>
		</main>
	);
};

export default What;
