'use client';
import React from 'react';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
//Styles
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import styles from './ProjectFooter.module.scss';

export const ProjectFooter = () => {
	return (
		<>
			<div className={styles['container-projectFooter']}>
				<div className={styles['projectFooter-icon_container']}>
					<div className={styles['projectFooter-line']} />
					<LinkScroll to="projectnav" spy smooth duration={1000} className={styles['projectFooter-arrow']}>
						<HiOutlinePaperAirplane />
					</LinkScroll>
					<div className={styles['projectFooter-line']} />
				</div>
				<span className={styles['projectFooter-copyright']}>
					Copyright © 2024 Krzysztof Pardel. All rights reserved.
				</span>
			</div>
		</>
	);
};
export default ProjectFooter;
