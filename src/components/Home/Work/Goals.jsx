'use client';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GOALS_DATA } from './DataArrays';

const Goals = () => {
	return (
		<div id="goals" className="goals-container">
			<h1 className="goals-h">Goals</h1>
			<h2 className="goals-h2">Simple, but clear.</h2>
			<div className="goals-boxes">
				{GOALS_DATA.map(({ id, p, data }) => {
					return (
						<div
							key={id}
							className="goals-box"
							data-aos="fade-right"
							data-aos-offset="400"
							data-aos-easing="ease-in-sine"
						>
							<p className="goals-box_nr">#{id}</p>
							<p className="goals-box_p">{p}</p>
							<p className="goals-box_timeline">{data}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Goals;
