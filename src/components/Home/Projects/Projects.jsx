'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Projects.scss';
// import Project from './ProjectsLarge';
import Project from './ProjectsLarge';
import { motion } from 'framer-motion';
import images from './images';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// Tabs by Mui
const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};

export const Projects = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();
	const [value, setValue] = useState(0);
	const [projects, setProjects] = useState(1);

	// Drag Carousel Constrains
	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleProjects = (page) => {
		setProjects(page);
	};

	console.log(images);
	return (
		<>
			<div className='container-projects'>
				<div className='section-rectangle'>
					<p className='section-title'>projects</p>
				</div>
				{/* MUI Tabs */}
				{/* <Box sx={{ width: '100%' }} className='t-box'>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
							<Tab label='Item One' {...a11yProps(0)} className='t-menu' />
							<Tab label='Item Two' {...a11yProps(1)} className='t-menu' />
							<Tab label='Item Three' {...a11yProps(2)} className='t-menu' />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0} className='t-show'>
						Kuba
					</TabPanel>
					<TabPanel value={value} index={1} className='t-show'>
						Staś
					</TabPanel>
					<TabPanel value={value} index={2} className='t-show'>
						Jestem kuzynem
					</TabPanel>
				</Box> */}
				{/* My Tabs */}
				<div className='tab-cont'>
					<div onMouseEnter={() => handleProjects(1)} className='t-single'>
						Work
					</div>
					<div className='t-line' />
					<div onMouseEnter={() => handleProjects(2)} className='t-single'>
						Large projects
					</div>
					<div className='t-line' />
					<div onMouseEnter={() => handleProjects(3)} className='t-single'>
						Small projects
					</div>
				</div>
				{/* Carousel */}
				{projects === 1 && (
					<motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
						<motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
							{Project.map((project, i) => {
								return (
									<motion.div className='item' key={i}>
										{project}
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				)}
				{projects === 2 && (
					<motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
						<motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
							{images.map((image, i) => {
								return (
									<motion.div className='item' key={i}>
										<Image src={image} alt='' className='image' />
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				)}
				{projects === 3 && (
					<motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
						<motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
							{images.map((image, i) => {
								return (
									<motion.div className='item' key={i}>
										<Image src={image} alt='' className='image' />
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				)}
			</div>
		</>
	);
};
export default Projects;
