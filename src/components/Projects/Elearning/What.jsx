'use client';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { SKILL_ITEMS, IMAGES_ITEMS } from './DataArray';
import './../ProjectStyles.scss';
import ThumbnailPlugin from './../Give/What';
import hourglass3 from '../../../../public/assets/hourglass3.jpg';
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
				{/* <div ref={sliderRef} className="keen-slider">
					{IMAGES_ITEMS.map(({ id, src, alt }) => {
						return <Image key={id} id={id} src={src} alt={alt} className="keen-slider__slide number-slide" />;
					})}
				</div>

				<div ref={thumbnailRef} className="keen-slider thumbnail">
					{IMAGES_ITEMS.map(({ id, src, alt }) => {
						return <Image key={id} id={id} src={src} alt={alt} className="keen-slider__slide number-slide" />;
					})}
				</div> */}
				<Image src={hourglass3} alt="hourglass" className="what-image_temporary" />
			</div>
			<div className="what-container_second">
				<h1 className="second-header">LearnNow</h1>
				<p className="second-summary">
					Tired of cramming into your heads for long hours? This platform will help you make a headway in learning the
					language and will see to it that you rememebr it for good. Learn through theory and through practice. Learn
					and remember for the rest of your life. LearnNow.
				</p>

				<div className="second-techstack_box">
					{SKILL_ITEMS.map(({ skill }) => {
						return (
							<p key={skill} className="techstack-box_skill">
								{skill}
							</p>
						);
					})}
				</div>
				<p className="second-note">
					The development of the project began in May 2024 and may take some time. However, updates will be added
					regularly.
				</p>
			</div>
		</div>
	);
};

export default What;
