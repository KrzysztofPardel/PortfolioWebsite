'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { CgDarkMode } from 'react-icons/cg';
import { IoSunnyOutline } from 'react-icons/io5';
import { BsMoon, BsSun } from 'react-icons/bs';
import { GrMenu, GrFormClose } from 'react-icons/gr';
import { LuCode2 } from 'react-icons/lu';
import Switch from '@mui/material/Switch';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Navigation.module.scss'; // Import SCSS module

const NAV_ITEMS = [
	{ name: 'work', to: '/#work' },
	{ name: 'education', to: '/#education' },
	{ name: 'about', to: '/#about' },
	{ name: 'contact', to: '/#contact' },
];

export const Navigation = () => {
	const [nav, setNav] = useState(false);
	const [mobile, setMobile] = useState(false);

	const handleNav = useCallback(() => {
		setNav(!nav);
	}, [nav]);

	const handleLanguage = () => {
		// Handle language change
	};

	const handleMode = () => {
		// Handle mode change
	};

	useEffect(() => {
		AOS.init({ duration: 2000 });

		const changeMobile = () => {
			if (window.scrollY >= 1100) {
				setMobile(true);
			} else {
				setMobile(false);
			}
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', changeMobile);
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', changeMobile);
			}
		};
	}, []);

	return (
		<>
			<nav id="navigation" className={styles.containerNav}>
				{' '}
				{/* Use styles from SCSS module */}
				<div className={styles.logo}>
					{' '}
					{/* Use styles from SCSS module */}
					<LuCode2 className={styles.myLogo} /> {/* Use styles from SCSS module */}
				</div>
				<div className={styles.links}>
					{' '}
					{/* Use styles from SCSS module */}
					{NAV_ITEMS.map(({ name, to }) => (
						<Link key={name} className={styles.link} href={to} scroll={true} duration={1000}>
							{name}
						</Link>
					))}
				</div>
				<div className={styles.adjustments}>
					{' '}
					{/* Use styles from SCSS module */}
					<div className={styles.mode}>
						{' '}
						{/* Use styles from SCSS module */}
						<BsSun className={styles.modeIcon} /> {/* Use styles from SCSS module */}
						<Switch onChange={handleMode} />
						<BsMoon className={styles.modeIcon} /> {/* Use styles from SCSS module */}
					</div>
					<div className={styles.languages}>
						{' '}
						{/* Use styles from SCSS module */}
						<button className={styles.language}>ENG</button> {/* Use styles from SCSS module */}
						<Switch onChange={handleLanguage} />
						<button className={styles.language}>PL</button> {/* Use styles from SCSS module */}
					</div>
				</div>
			</nav>

			<div className={mobile ? `${styles.mobileButtonCont} ${styles.visible}` : styles.mobileButtonCont}>
				<button
					onClick={handleNav}
					data-aos="fade-down"
					className={nav ? `${styles.mobileButton} ${styles.off}` : `${styles.mobileButton} ${styles.on}`}
				>
					{nav ? 'hidden' : <GrMenu />}
				</button>
			</div>

			<div className={nav ? styles.containerNavMobile : `${styles.containerNavMobile} ${styles.hidden}`}>
				<div className={styles.logo}>
					<LuCode2 className={`${styles.myLogo} ${styles.center}`} />
				</div>
				<div className={styles.linksMobile}>
					<div className={`${styles.links} ${styles.linksContainerMobile}`}>
						{NAV_ITEMS.map(({ name, to }) => (
							<Link
								key={name}
								onClick={handleNav}
								href={to}
								scroll={true}
								duration={1000}
								className={styles.linkMobile}
							>
								{name}
							</Link>
						))}
					</div>
				</div>
				<div className={`${styles.adjustments} ${styles.reverse}`}>
					<div className={styles.mode}>
						<BsSun className={styles.modeIcon} />
						<Switch onChange={handleMode} />
						<BsMoon className={styles.modeIcon} />
					</div>
					<div className={styles.languages}>
						<button className={`${styles.language} eng`}>ENG</button>
						<Switch onChange={handleLanguage} />
						<button className={`${styles.language} pol`}>PL</button>
					</div>
					<button onClick={handleNav} className={styles.mobileButtonInside}>
						<GrFormClose className={styles.iconSs} />
					</button>
				</div>
			</div>
		</>
	);
};
export default Navigation;
