import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdImportantDevices } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsFolderCheck } from 'react-icons/bs';
import { WORK_ITEMS, ITWORK_ITEMS } from './DataArrays';
import styles from './SCSS/Experience.module.scss'; // Import module styles

const Experience = () => {
	return (
		<main id="experience" className={styles['experience-container']}>
			<h1 className={styles['experience-h']}>Experience</h1>
			<p className={styles['experience-related']}>
				<MdImportantDevices className={styles['related-icon']} />
				IT Related
			</p>
			<section className={styles['experience-box']}>
				{ITWORK_ITEMS.map(({ id, position, company, where, date, reference, intro, point1, point2, point3 }) => {
					return (
						<div key={id} className={styles['work-box']} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
							<div className={styles['work-box_partOne']}>
								<h2 className={styles['work-position']}>{position}</h2>
								<div className={styles['whenWhere-container']}>
									<p className={styles['work-where']}>
										{company}, {where}
									</p>
									<p className={styles['work-when']}>{date}</p>
								</div>
								<div className={styles['work-reference']}>{reference}</div>
							</div>
							<div className={styles['work-box_partTwo']}>
								<ul className={styles['work-description']}>
									<p className={styles['work-intro']}>{intro}</p>
									<li className={styles['work-description_li']}>
										<IoIosAddCircleOutline className={styles['work-description_icon']} /> {point1}
									</li>
									<li className={styles['work-description_li']}>
										<IoIosAddCircleOutline className={styles['work-description_icon']} />
										{point2}
									</li>
									<li className={styles['work-description_li']}>
										<IoIosAddCircleOutline className={styles['work-description_icon']} />
										{point3}
									</li>
								</ul>
							</div>
						</div>
					);
				})}
			</section>
			<p className={styles['experience-related']}>
				<BsFolderCheck className={styles['related-icon']} />
				IT Unrelated
			</p>
			<section className={styles['experience-box']}>
				{WORK_ITEMS.map(({ id, position, company, where, date, reference, intro, point1, point2, point3 }) => {
					return (
						<div key={id} className={styles['work-box']} data-aos="fade-down" data-aos-anchor-placement="top-bottom">
							<div className={styles['work-box_partOne']}>
								<h2 className={styles['work-position']}>{position}</h2>
								<div className={styles['whenWhere-container']}>
									<p className={styles['work-where']}>
										{company}, {where}
									</p>
									<p className={styles['work-when']}>{date}</p>
								</div>
							</div>
							<div className={styles['work-box_partTwo']}>
								<ul className={styles['work-description']}>
									<p className={styles['work-intro']}>{intro}</p>
									<li className={styles['work-description_li']}>
										<IoIosAddCircleOutline className={styles['work-description_icon']} /> {point1}
									</li>
									<li className={styles['work-description_li']}>
										<IoIosAddCircleOutline className={styles['work-description_icon']} />
										{point2}
									</li>
									<li className={styles['work-description_li']}>
										<IoIosAddCircleOutline className={styles['work-description_icon']} />
										{point3}
									</li>
								</ul>
								<div className={styles['work-reference']}>{reference}</div>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default Experience;
