import React from 'react';

const ITWORK_ITEMS = [
	{
		id: 1,
		position: 'Frontend Developer with React.ts',
		company: 'DevsMentoring',
		where: 'Remotely',
		date: '08.2023-02.2024',
		reference: 'reference',
		intro: 'When conducting internship at DevsMentoring, I was:',
		point1: 'Working under the guidance of an experienced senior fullstack developer',
		point2: 'Building apps and extending functionalities with the use of React with Type Script',
		point3: 'Developing my knowledge of React, its libraries and frameworks',
		skill1: 'JavaScript/ TypeScript',
		skill2: 'React',
		skill3: 'Context API',
	},
	{
		id: 2,
		position: 'Frontend Developer with React.ts',
		company: 'SoftwareHouse360',
		where: 'Łódź',
		date: '10.2023-01.2024',
		reference: 'reference',
		intro: 'When conducting internship at SoftwareHouse360, I became experienced at:',
		point1: 'Creating views, functionalities as well as improvements in the company’s CRM system',
		point2: 'Working in SCRUM methodology',
		point3: 'Understanding of CRM systems and how they are designed.',
		skill1: 'TypeScript',
		skill2: 'React',
		skill3: 'SCSS',
	},
];

const WORK_ITEMS = [
	{
		id: 3,
		position: 'Junior Process Officer',
		company: 'Nordea',
		where: 'Łódź',
		date: '08.2023-now',
		reference: '',
		intro: 'When working for Nordea, I becoming experienced at:',
		point1: 'Processing data related to operations between clients and the bank',
		point2: 'Mediating in the process of adjusting contracts related to debts, leasings etc.',
		point3: 'Utilizing English in a bank-related environment',
		skill1: 'MS Office',
		skill2: 'English',
		skill3: 'Team work',
	},
	{
		id: 4,
		position: 'English Language Translator',
		company: 'Word of Life Poland',
		where: 'Zgierz/Remotely',
		date: '10.2023-01.2024',
		reference: 'reference',
		intro: 'When working at Word of Life, I became experienced at:',
		point1: 'Translating complex documents and articles',
		point2: 'Live interpreting',
		point3: 'Translation of mobile applications',
		skill1: 'English',
		skill2: 'Affinity Designer',
		skill3: 'MS Office',
	},
];

const Experience = () => {
	return (
		<div id="experience" className="experience-container">
			<h1 className="experience-h">Experience</h1>
			<p className="experience-related">IT Related</p>
			<div className="experience-box">
				{ITWORK_ITEMS.map(({ id, position, company, where, date, reference, description }) => {
					return (
						<div key={id} className="work-box">
							<div className="work-box_partOne">
								<h2 className="">{position}</h2>
								<div className="whenWhere-container">
									<p className="container-where">
										{company}, {where}
									</p>
									<p className="container-when">{date}</p>
								</div>
							</div>
							<div className="work-box_partTwo">
								<div className="work-description">{description}</div>
								<div className="">{reference}</div>
							</div>
						</div>
					);
				})}
			</div>
			<p className="experience-related">IT Unrelated</p>
			{/* <div className="experience-box">
				{WORK_ITEMS.map(({ id, position, company, where, date, reference, description }) => {
					return (
						<div key={id} className="work-box">
							<h2 className="">{position}</h2>
							<div className="whenWhere-container"></div>
						</div>
					);
				})}
			</div> */}
		</div>
	);
};

export default Experience;
