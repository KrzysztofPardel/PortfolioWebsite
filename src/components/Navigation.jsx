'use client';
import './Navigation.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import { CgDarkMode } from 'react-icons/cg';
import { GrMenu, GrFormClose } from 'react-icons/gr';
import { LuCode2 } from 'react-icons/lu';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NAV_ITEMS = [{ name: 'work' }, { name: 'education' }, { name: 'about' }, { name: 'contact' }];

export const Navigation = () => {
	const [nav, setNav] = useState(false);
	const [mobile, setMobile] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	// Make Mobile Nav Fade Down
	useEffect(() => {
		AOS.init({ duration: 2000 });

		const changeMobile = () => {
			if (window.scrollY >= 900) {
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

	// Make Mobile Nav Visible
	// const changeMobile = () => {
	// 	// console.log(window.scrollY);
	// 	if (window.scrollY >= 900) {
	// 		setMobile(true);
	// 	} else {
	// 		setMobile(false);
	// 	}
	// };
	// window.addEventListener('scroll', changeMobile);

	return (
		<>
			{/* Navigation */}

			<nav id="navigation" className="container-nav">
				<div className="logo">
					<LuCode2 className="myLogo" />
				</div>
				<div className="links">
					{NAV_ITEMS.map(({ name }) => {
						return (
							<>
								<LinkScroll to={name} spy smooth duration={1000} className="link">
									{name}
								</LinkScroll>
							</>
						);
					})}
				</div>
				<div className="adjustments">
					<div className="mode">
						<CgDarkMode className="mode-icon" />
					</div>
					<div className="languages">
						<button className="language eng">ENG</button>
						<div className="line" />
						<button className="language pol">PL</button>
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
			<div className={nav ? 'container-nav_mobile' : 'hidden'}>
				<button onClick={handleNav} className="mobile-button">
					{nav ? <GrFormClose className="icon_ss" /> : ''}
				</button>
				<div className="logo">
					<LuCode2 className="mySignature" />
				</div>
				<div className="links-mobile">
					<div className="links">
						{NAV_ITEMS.map(({ name }) => {
							return (
								<>
									<LinkScroll to={name} spy smooth duration={1000} className="link-mobile">
										{name}
									</LinkScroll>
								</>
							);
						})}
					</div>
				</div>
				<div className="adjustments reverse">
					{/* <div className="mode">
						<CgDarkMode className="mode-icon" />
					</div>
					<div className="languages">
						<button className="language eng">ENG</button>
						<div className="line" />
						<button className="language pol">PL</button>
					</div> */}
				</div>
			</div>
		</>
	);
};
export default Navigation;
