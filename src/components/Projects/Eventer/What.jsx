'use client';
import Image from 'next/image';
//Slider
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ThumbnailPlugin from '../Give/What';
//Data
import { SKILL_ITEMS, IMAGES_ITEMS } from './DataArray';
import hourglass3 from '../../../../public/assets/hourglass3.jpg';
// Styles
import styles from './SCSS/What.module.scss';

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
				<Image src={hourglass3} alt="hourglass" className={styles['what-image_temporary']} />
			</div>
			<div className={styles['what-container_second']}>
				<h1 className={styles['second-header']}>LearnNow</h1>
				<p className={styles['second-summary']}>
					Tired of cramming into your heads for long hours? This platform will help you make a headway in learning the
					language and will see to it that you remember it for good. Learn through theory and through practice. Learn
					and remember for the rest of your life. LearnNow.
				</p>
				<div className={styles['second-techstack_box']}>
					{SKILL_ITEMS.map(({ skill }) => {
						return (
							<p key={skill} className={styles['techstack-box_skill']}>
								{skill}
							</p>
						);
					})}
				</div>
				<p className={styles['second-note']}>
					The development of the project began in May 2024 and may take some time. However, updates will be added
					regularly.
				</p>
			</div>
		</div>
	);
};

export default What;
