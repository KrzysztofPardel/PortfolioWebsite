import React from 'react';
import Link from 'next/link';
import { COLUMN_A, COLUMN_B, COLUMN_C } from './DataArrays';

const Challenges = () => {
	return (
		<div id="challenges" className="challenges-container">
			<h1 className="challenges-h">Sources of Challenges</h1>
			<h2 className="challenges-h2">We all need challenges to grow, don't we?</h2>
			<h3 className="challenges-h3">Do you want to know what are my sources of challenges?</h3>
			<div className="challenges-mentor">
				<p className="mentor-box">
					<Link
						href="https://www.linkedin.com/in/adamjochemczyk/"
						className="mentor-link"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						Adam Jochemczyk
					</Link>
					from
					<Link
						href="https://wizardsofcode.pl"
						className="mentor-link"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						Wizards of Code
					</Link>
				</p>

				<p className="mentor-description">
					Adam has been relentlessly pushing my understandng of the fron-end technologies for the past 8 months. His
					insight, knowledge and kind approach make him a fantastic teacher. Aside from being a faithful support
					throughtout various projects I can count on his opinion and advice as the next steps of my development.
				</p>
			</div>
			<h3 className="challenges-h3">I also benefit enormously from:</h3>
			<div className="challenges-columns">
				<div className="column-a">
					{COLUMN_A.map(({ id, source, link }) => {
						return (
							<Link
								key={id}
								href={link}
								className="course-link"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1500"
							>
								{source}
							</Link>
						);
					})}
				</div>
				<div className="column-b">
					{COLUMN_B.map(({ id, source, link }) => {
						return (
							<Link
								key={id}
								href={link}
								className="course-link"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1500"
							>
								{source}
							</Link>
						);
					})}
				</div>
				<div className="column-c">
					{COLUMN_C.map(({ id, source, link }) => {
						return (
							<Link
								key={id}
								href={link}
								className="course-link"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1500"
							>
								{source}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Challenges;
