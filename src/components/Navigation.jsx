'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import mySignBlue from '../../public/assets/mySignBlue.png';
import './Navigation.scss';
export const Navigation = () => {
	return (
		<>
			<div className='container-nav'>
				<div className='logo'>
					<Image src={mySignBlue} alt='Kris signature' className='mySignature' />
				</div>
				<div className='links'>
					<Link href='/#projects' className='link'>
						projects
					</Link>
					<Link href='/#skills' className='link'>
						skills
					</Link>
					<Link href='/#about' className='link'>
						about
					</Link>
					<Link href='/#values' className='link'>
						values
					</Link>
					<Link href='/#contact' className='link'>
						contact
					</Link>
				</div>
			</div>
		</>
	);
};
export default Navigation;
