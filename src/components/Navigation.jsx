'use client';
import './Navigation.scss';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import { CgDarkMode } from 'react-icons/cg';
import { IoSunnyOutline } from 'react-icons/io5';
import { BsMoon, BsSun } from 'react-icons/bs';
import { GrMenu, GrFormClose } from 'react-icons/gr';
import { LuCode2 } from 'react-icons/lu';
import Switch from '@mui/material/Switch';
import AOS from 'aos';
import 'aos/dist/aos.css';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };

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

	const handleLanguage = () => {};
	const handleMode = () => {};
	// Make Mobile Nav Fade Down
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
			{/* Navigation */}
			<nav id="navigation" className="container-nav">
				<div className="logo">
					<LuCode2 className="myLogo" />
				</div>
				<div className="links">
					{NAV_ITEMS.map(({ name, to }) => {
						return (
							<Link key={name} className="link" href={to} scroll={true} duration={1000}>
								{name}
							</Link>
						);
					})}
				</div>
				<div className="adjustments">
					<div className="mode">
						<BsSun className="mode-icon" />
						<Switch onChange={handleMode} />
						<BsMoon className="mode-icon" />
					</div>
					<div className="languages">
						<button className="language">ENG</button>
						<Switch onChange={handleLanguage} />
						<button className="language">PL</button>
					</div>
				</div>
			</nav>

			{/* Navigation Mobile*/}
			{/* Pojawiający się przycisk */}

			<div className={mobile ? 'mobile-button_cont visible' : 'mobile-button_cont'}>
				<button onClick={handleNav} data-aos="fade-down" className={nav ? 'mobile-button off' : 'mobile-button on'}>
					{nav ? 'hidden' : <GrMenu />}
				</button>
			</div>

			<div className={nav ? 'container-nav_mobile' : 'container-nav_mobile hidden'}>
				<div className="logo">
					<LuCode2 className="myLogo center" />
				</div>
				<div className="links-mobile">
					<div className="links links-container-mobile">
						{NAV_ITEMS.map(({ name, to }) => {
							return (
								<Link key={name} onClick={handleNav} href={to} scroll={true} duration={1000} className="link-mobile">
									{name}
								</Link>
							);
						})}
					</div>
				</div>

				<div className="adjustments reverse">
					<div className="mode">
						<BsSun className="mode-icon" />
						<Switch onChange={handleMode} />
						<BsMoon className="mode-icon" />
					</div>
					<div className="languages">
						<button className="language eng">ENG</button>
						<Switch onChange={handleLanguage} />
						<button className="language pol">PL</button>
					</div>
					<button onClick={handleNav} className="mobile-button_inside">
						<GrFormClose className="icon_ss" />
					</button>
				</div>
			</div>
		</>
	);
};
export default Navigation;
