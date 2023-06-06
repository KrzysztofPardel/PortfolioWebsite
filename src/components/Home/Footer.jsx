'use client';
import React from 'react';
import Link from 'next/link';

import { HiOutlinePaperAirplane } from 'react-icons/hi';
import './Footer.scss';
export const Footer = () => {
	return (
		<>
			<div className='container-footer'>
				<div className='icon-container'>
					<div className='line' />
					<Link href='/#header' className='arrow'>
						<HiOutlinePaperAirplane />
					</Link>
					<div className='line' />
				</div>
				<span className='copyright'> Copyright © 2023 Krzysztof Pardel. All rights reserved.</span>
			</div>
		</>
	);
};
export default Footer;
