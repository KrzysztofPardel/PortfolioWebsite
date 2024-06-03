'use client';
import React from 'react';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
//Styles
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import './ProjectFooter.scss';

export const ProjectFooter = () => {
	return (
		<>
			<div className="container-projectFooter">
				<div className="projectFooter-icon_container">
					<div className="projectFooter-line" />
					<LinkScroll to="projectnav" spy smooth duration={1000} className="projectFooter-arrow">
						<HiOutlinePaperAirplane />
					</LinkScroll>
					<div className="projectFooter-line" />
				</div>
				<span className="projectFooter-copyright"> Copyright © 2024 Krzysztof Pardel. All rights reserved.</span>
			</div>
		</>
	);
};
export default ProjectFooter;
