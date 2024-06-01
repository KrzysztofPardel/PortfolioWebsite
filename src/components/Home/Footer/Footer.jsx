'use client';
import React from 'react';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<>
			<div className={styles.containerFooter}>
				<div className={styles.iconContainer}>
					<div className={styles.line} />
					<LinkScroll to="header" spy smooth duration={1000} className={styles.arrow}>
						<HiOutlinePaperAirplane />
					</LinkScroll>
					<div className={styles.line} />
				</div>
				<span className={styles.copyright}> Copyright © 2024 Krzysztof Pardel. All rights reserved.</span>
			</div>
		</>
	);
};

export default Footer;
