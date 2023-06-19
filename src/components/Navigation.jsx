'use client';
import './Navigation.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import { CgDarkMode } from 'react-icons/cg';
import { GrMenu, GrFormClose } from 'react-icons/gr';
import mySignBlue from '../../public/assets/mySignBlue.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Navigation = () => {
	const [nav, setNav] = useState(false);
	const [mobile, setMobile] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	// Make Mobile Nav Fade Down
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	// Make Mobile Nav Visible
	const changeMobile = () => {
		// console.log(window.scrollY);
		if (window.scrollY >= 900) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};
	window.addEventListener('scroll', changeMobile);
	return (
		<>
			{/* Navigation */}

			<nav id='navigation' className='container-nav'>
				<div className='logo'>
					<Image src={mySignBlue} alt='Kris signature' className='mySignature' />
				</div>
				<div className='links'>
					<LinkScroll to='skills' spy smooth duration={1000} className='link'>
						skills
					</LinkScroll>
					<LinkScroll to='projects' spy smooth duration={1000} className='link'>
						projects
					</LinkScroll>

					<LinkScroll to='about' spy smooth duration={1000} className='link'>
						about
					</LinkScroll>
					<LinkScroll to='values' spy smooth duration={1000} className='link'>
						values
					</LinkScroll>
					<LinkScroll to='contact' spy smooth duration={1000} className='link'>
						contact
					</LinkScroll>
				</div>
				<div className='adjustments'>
					<div className='mode'>
						<CgDarkMode className='mode-icon' />
					</div>
					<div className='languages'>
						<button className='language eng'>ENG</button>
						<div className='line' />
						<button className='language pol'>PL</button>
					</div>
				</div>
			</nav>
			{/* </div> */}

			{/* Navigation Mobile*/}
			{/* Pojawiający się przycisk */}
			<div className={mobile ? 'mobile-button_cont visible' : 'mobile-button_cont'}>
				<button onClick={handleNav} data-aos='fade-down' className={nav ? 'mobile-button off' : 'mobile-button on'}>
					{nav ? 'hidden' : <GrMenu />}
				</button>
			</div>
			<div className={nav ? 'container-nav_mobile' : 'hidden'}>
				<button onClick={handleNav} className='mobile-button'>
					{nav ? <GrFormClose className='icon_ss' /> : ''}
				</button>
				<div className='logo'>
					<Image src={mySignBlue} alt='Kris signature' className='mySignature center' />
				</div>
				<div className='links-mobile'>
					<LinkScroll to='skills' spy smooth duration={1000} className='link-mobile'>
						skills
					</LinkScroll>
					<LinkScroll to='projects' spy smooth duration={1000} className='link-mobile'>
						projects
					</LinkScroll>

					<LinkScroll to='about' spy smooth duration={1000} className='link-mobile'>
						about
					</LinkScroll>
					<LinkScroll to='values' spy smooth duration={1000} className='link-mobile'>
						values
					</LinkScroll>
					<LinkScroll to='contact' spy smooth duration={1000} className='link-mobile'>
						contact
					</LinkScroll>
				</div>
				<div className='adjustments reverse'>
					<div className='mode'>
						<CgDarkMode className='mode-icon' />
					</div>
					<div className='languages'>
						<button className='language eng'>ENG</button>
						<div className='line' />
						<button className='language pol'>PL</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default Navigation;
