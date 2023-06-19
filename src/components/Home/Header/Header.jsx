'use client';
import React, { useState } from 'react';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import './Header.scss';

export const Header = () => {
	const [toggleWrap, setToggleWrap] = useState('false');
	const [logo, setLogo] = useState('false');

	const handleToggle = () => {
		setToggleWrap(!toggleWrap);
		setTimeout({}, 200);
	};
	return (
		<>
			<div id='header' className='container'>
				<div className='intro'>
					<h1 className='title'>
						Hi!I&apos;m <span className='name'>Krzysztof Pardel</span>.
					</h1>
					<h2 className='profession'>Frontend Web Developer</h2>
					<LinkScroll to='navigation' spy smooth duration={1200} className='invitation'>
						Please, come in.
					</LinkScroll>
				</div>
			</div>
		</>
	);
};
export default Header;
