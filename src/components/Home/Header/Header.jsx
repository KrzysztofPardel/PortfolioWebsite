'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.scss';

import mySignBlue from '../../../../public/assets/mySignBlue.png';
import containerWrap from './containerWrap';
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
						Hi! I&apos;m <span className='blue'>Krzysztof Pardel</span>.
					</h1>
					<h2 className='profession'>Fontend Web Developer</h2>
					<Link href='/#navigation' className='invitation'>
						Please, come in.
					</Link>
				</div>
			</div>
		</>
	);
};
export default Header;
