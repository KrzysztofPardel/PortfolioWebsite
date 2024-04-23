'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import './Header.scss';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export const Header = () => {
	const [toggleWrap, setToggleWrap] = useState('false');
	const [logo, setLogo] = useState('false');

	const handleToggle = () => {
		setToggleWrap(!toggleWrap);
		setTimeout({}, 200);
	};
	return (
		<>
			<div id="header" className="header-container">
				<div className="header-intro">
					<h1 className="intro-title">
						Hi! I&apos;m <span className="intro-name">Krzysztof Pardel</span>.
					</h1>
					<h2 className="header-profession">Frontend Developer </h2>
					<div className="header-links">
						<Link href="https://github.com/KrzysztofPardel" className="header-link">
							<SiGithub />
						</Link>
						<Link href="https://www.linkedin.com/in/krzysztof-pardel/" className="header-link">
							<SiLinkedin />
						</Link>
					</div>
					<LinkScroll to="navigation" spy smooth duration={1200} className="profession-invitation">
						See more
					</LinkScroll>
				</div>
			</div>
		</>
	);
};
export default Header;
