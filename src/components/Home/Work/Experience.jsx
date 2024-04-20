import React from 'react';
import { MdImportantDevices } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsFolderCheck } from 'react-icons/bs';

const ITWORK_ITEMS = [
	{
		id: 1,
		position: 'Frontend Developer with React.ts',
		company: 'DevsMentoring',
		where: 'Remotely',
		date: '08.2023-02.2024',
		reference: 'reference',
		intro: 'My experience at DevsMentoring:',
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
		intro: 'My experience at SoftwareHouse360:',
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
		intro: 'My experience at Nordea:',
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
		reference: '',
		intro: 'My experience at Word of Life Poland:',
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
			<p className="experience-related">
				<MdImportantDevices className="related-icon" />
				IT Related
			</p>
			<div className="experience-box">
				{ITWORK_ITEMS.map(({ id, position, company, where, date, reference, intro, point1, point2, point3 }) => {
					return (
						<div key={id} className="work-box">
							<div className="work-box_partOne">
								<h2 className="work-position">{position}</h2>
								<div className="whenWhere-container">
									<p className="work-where">
										{company}, {where}
									</p>
									<p className="work-when">{date}</p>
								</div>
								{/* <div className="work-reference">{reference}</div> */}
							</div>
							<div className="work-box_partTwo">
								<ul className="work-description">
									<p className="work-intro">{intro}</p>
									<li className="work-description_li">
										<IoIosAddCircleOutline className="work-description_icon" /> {point1}
									</li>
									<li className="work-description_li">
										<IoIosAddCircleOutline className="work-description_icon" />
										{point2}
									</li>
									<li className="work-description_li">
										<IoIosAddCircleOutline className="work-description_icon" />
										{point3}
									</li>
								</ul>
							</div>
						</div>
					);
				})}
			</div>
			<p className="experience-related">
				<BsFolderCheck className="related-icon" />
				IT Unrelated
			</p>
			<div className="experience-box">
				{WORK_ITEMS.map(({ id, position, company, where, date, reference, intro, point1, point2, point3 }) => {
					return (
						<div key={id} className="work-box">
							<div className="work-box_partOne">
								<h2 className="work-position">{position}</h2>
								<div className="whenWhere-container">
									<p className="work-where">
										{company}, {where}
									</p>
									<p className="work-when">{date}</p>
								</div>
							</div>
							<div className="work-box_partTwo">
								<ul className="work-description">
									<p className="work-intro">{intro}</p>
									<li className="work-description_li">
										<IoIosAddCircleOutline className="work-description_icon" /> {point1}
									</li>
									<li className="work-description_li">
										<IoIosAddCircleOutline className="work-description_icon" />
										{point2}
									</li>
									<li className="work-description_li">
										<IoIosAddCircleOutline className="work-description_icon" />
										{point3}
									</li>
								</ul>
								<div className="">{reference}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Experience;
