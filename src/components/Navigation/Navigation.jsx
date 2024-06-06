'use client';
import Link from 'next/link';
//Hooks
import React, { useState, useEffect, useCallback } from 'react';
//Styles
import styles from './Navigation.module.scss';
import { GrMenu, GrFormClose } from 'react-icons/gr';
import { LuCode2 } from 'react-icons/lu';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';
//MUI
import Switch from '@mui/material/Switch';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { redirect } from 'next/dist/server/api-utils';

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
			<nav id="navigation" className={styles[['container-nav']]}>
				<Link className={styles['logo']} href="/">
					<LuCode2 className={styles['my-logo']} />
				</Link>
				<div className={styles['links']}>
					{NAV_ITEMS.map(({ name, to }) => (
						<Link
							key={name}
							className={styles.link}
							href={to}
							scroll={true}
							// duration={1000}
						>
							{name}
						</Link>
					))}
				</div>

				<div className={styles['adjustments']}>
					<div className={styles['mode']}>
						<BsSun className={styles['mode-icon']} />
						<Switch onChange={handleMode} />
						<BsMoon className={styles['mode-icon']} />
					</div>
					<div className={styles['languages']}>
						<button className={styles['language']}>ENG</button>
						<Switch onChange={handleLanguage} />
						<button className={styles['language']}>PL</button>
					</div>
				</div>
			</nav>

			<div
				className={mobile ? `${styles['mobile-button_cont']} ${styles['visible']}` : `${styles['mobile-button_cont']}`}
			>
				<button
					onClick={handleNav}
					data-aos="fade-down"
					className={nav ? `${styles['mobile-button']} ${styles['off']}` : `${styles['mobile-button']} ${styles['on']}`}
				>
					{nav ? 'hidden' : <GrMenu />}
				</button>
			</div>

			<div className={nav ? styles['container-nav_mobile'] : `${styles['container-nav_mobile']} ${styles['hidden']}`}>
				<div className={styles['logo']}>
					<LuCode2 className={`${styles['my-logo']} ${styles['center']}`} />
				</div>
				<div className={styles['links-mobile']}>
					<div className={`${styles['links']} ${styles['links-container_mobile']}`}>
						{NAV_ITEMS.map(({ name, to }) => (
							<Link
								key={name}
								onClick={handleNav}
								href={to}
								scroll={true}
								// duration={1000}
								className={styles['links-mobile']}
							>
								{name}
							</Link>
						))}
					</div>
				</div>
				{/* <div className={`${styles['adjustments']} ${styles['reverse']}`}>
					<div className={styles['mode']}>
						<BsSun className={styles['mode-icon']} />
						<Switch onChange={handleMode} />
						<BsMoon className={styles['mode-icon']} />
					</div>
					<div className={styles['languages']}>
						<button className={styles['language']}>ENG</button>
						<Switch onChange={handleLanguage} />
						<button className={styles['language']}>PL</button>
					</div>
					<button onClick={handleNav} className={styles['mobile-button_inside']}>
						<GrFormClose className={styles['icon-ss']} />
					</button>
				</div> */}
			</div>
		</>
	);
};
export default Navigation;
