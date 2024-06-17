'use client';
import React from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import styles from './Header.module.scss';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export const Header = () => {
	return (
		<main id="header" className={styles['header-container']}>
			<section className={styles['header-intro']}>
				<h1 className={styles['intro-title']}>
					<span className={styles['intro-name']}>Krzysztof Pardel</span>
				</h1>
				<h2 className={styles['header-profession']}>Frontend Developer </h2>
				<div className={styles['header-links']}>
					<Link href="https://github.com/KrzysztofPardel" className={styles['header-link']}>
						<SiGithub />
					</Link>
					<Link href="https://www.linkedin.com/in/krzysztof-pardel/" className={styles['header-link']}>
						<SiLinkedin />
					</Link>
				</div>
				<LinkScroll to="navigation" spy smooth duration={1200} className={styles['profession-invitation']}>
					See more
				</LinkScroll>
			</section>
		</main>
	);
};

export default Header;
