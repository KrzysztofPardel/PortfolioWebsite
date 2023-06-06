'use client';
import React, { useState} from 'react';
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
		setTimeout({

		},200)
	};
	return (
		<>
			<div id='header' className='container'>
				<div className={toggleWrap ? 'intro' : 'intro move-up'}>
					<h1 className='title'>
						Hi! I&apos;m <span className='blue'>Krzysztof Pardel</span>.
					</h1>
					<h2 className='profession'>Fontend Web Developer</h2>
					<button onClick={handleToggle} className='invitation'>
						Please, come in.
					</button>
				</div>
				{/* <div className='container-wrap'>
					<div className='container-left'>
						<div className='container-signature'>
							<Image src={mySignBlue} alt='Kris signature' className='mySignature' />
						</div>
					</div>
					<div className='container-right'>
						<div className='menu'>
							<Link href='/#projects' className='menu-parts'>
								<div className='text'>projects</div>
								<div className='dot' />
							</Link>
							<Link href='/#skills' className='menu-parts'>
								<div className='text'>skills</div>
								<div className='dot' />
							</Link>
							<Link href='/#values' className='menu-parts'>
								<div className='text'>values</div>
								<div className='dot' />
							</Link>
							<Link href='/#about' className='menu-parts'>
								<div className='text'>about</div>
								<div className='dot' />
							</Link>
							<Link href='/#contact' className='menu-parts'>
								<div className='text'>contact</div>
								<div className='dot' />
							</Link>
						</div>
						<div className='line' />
					</div>
				</div> */}
			</div>
		</>
	);
};
export default Header;
