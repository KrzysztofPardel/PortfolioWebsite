import React from 'react';
import Link from 'next/link';

const COLUMN_A = [
	{
		id: '1',
		source: 'daily.dev',
		link: 'https://daily.dev',
	},
	{
		id: '2',
		source: 'Przeprogramowani',
		link: 'https://przeprogramowani.pl',
	},
	{
		id: '3',
		source: 'WebDev Simplified',
		link: 'https://www.youtube.com/@WebDevSimplified',
	},
	{
		id: '4',
		source: 'Frontlive.pl',
		link: 'https://frontlive.pl',
	},
];
const COLUMN_B = [
	{
		id: '5',
		source: 'Matt Pocock',
		link: 'https://www.mattpocock.com',
	},
	{
		id: '6',
		source: 'Josh Comeau',
		link: 'https://www.joshwcomeau.com',
	},
	{
		id: '7',
		source: 'Krzysztof Kempiński',
		link: 'https://www.youtube.com/@krzysztof_kempinski',
	},

	{
		id: '8',
		source: 'Kenny Gunderman',
		link: 'https://www.youtube.com/@kennygunderman',
	},
	{
		id: '9',
		source: 'Clint Briley',
		link: 'https://www.youtube.com/@codecommerce',
	},
	{
		id: '10',
		source: 'Kevin Powell',
		link: 'https://www.kevinpowell.co',
	},
];
const COLUMN_C = [
	{
		id: '11',
		source: 'Kurs JavaScript',
		link: 'https://kursjs.pl',
	},
	{
		id: '12',
		source: 'Frontend Masters',
		link: 'https://frontendmasters.com',
	},
	{
		id: '13',
		source: 'Udemy',
		link: 'https://www.udemy.com',
	},
];

const Challenges = () => {
	return (
		<div id="challenges" className="challenges-container">
			<h1 className="challenges-h">Sources of Challenges</h1>
			<h2 className="challenges-h2">We all need challenges to grow, don't we?</h2>
			<h3 className="challenges-h3">Do you want to what are my sources of challenges?</h3>
			<div className="challenges-mentor">
				<p className="mentor-box">
					<Link href="https://www.linkedin.com/in/adamjochemczyk/" className="mentor-link">
						Adam Jochemczyk
					</Link>
					from
					<Link href="https://wizardsofcode.pl" className="mentor-link">
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
							<Link id={id} href={link} className="course-link">
								{source}
							</Link>
						);
					})}
				</div>
				<div className="column-b">
					{COLUMN_B.map(({ id, source, link }) => {
						return (
							<Link id={id} href={link} className="course-link">
								{source}
							</Link>
						);
					})}
				</div>
				<div className="column-c">
					{COLUMN_C.map(({ id, source, link }) => {
						return (
							<Link id={id} href={link} className="course-link">
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
