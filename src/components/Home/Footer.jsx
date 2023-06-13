'use client';
import React from 'react';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import './Footer.scss';
export const Footer = () => {
	return (
		<>
			<div className='container-footer'>
				<div className='icon-container'>
					<div className='line' />
					<LinkScroll to='header' spy smooth duration={1000} className='arrow'>
						<HiOutlinePaperAirplane />
					</LinkScroll>
					<div className='line' />
				</div>
				<span className='copyright'> Copyright © 2023 Krzysztof Pardel. All rights reserved.</span>
			</div>
		</>
	);
};
export default Footer;
