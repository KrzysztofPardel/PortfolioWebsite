'use client';
import React from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import styles from './Header.module.scss';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export const Header = () => {
	return (
		<main id="header" className={styles.headerContainer}>
			<section className={styles.headerIntro}>
				<h1 className={styles.introTitle}>
					Hi! I&apos;m <span className={styles.introName}>Krzysztof Pardel</span>.
				</h1>
				<h2 className={styles.headerProfession}>Frontend Developer </h2>
				<div className={styles.headerLinks}>
					<Link href="https://github.com/KrzysztofPardel" className={styles.headerLink}>
						<SiGithub />
					</Link>
					<Link href="https://www.linkedin.com/in/krzysztof-pardel/" className={styles.headerLink}>
						<SiLinkedin />
					</Link>
				</div>
				<LinkScroll to="navigation" spy smooth duration={1200} className={styles.professionInvitation}>
					See more
				</LinkScroll>
			</section>
		</main>
	);
};

export default Header;
