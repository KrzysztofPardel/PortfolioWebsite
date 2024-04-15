import React from 'react';
import Link from 'next/link';
import { TbFileCertificate } from 'react-icons/tb';

const CERTIFICATIONS_ITEMS = [
	{
		name: 'C2 Proficiency',
		date: '01.2019',
		linkHREF: 'https://www.cambridgeenglish.org/exams-and-tests/proficiency/',
	},
	{
		name: 'C1 Advanced',
		date: '07.2016',
		linkHREF: 'https://www.cambridgeenglish.org/exams-and-tests/advanced/',
	},
];

const Certifications = () => {
	return (
		<div id="certifications" className="certifications-container">
			<h1 className="certifications-h">Certifications</h1>
			<div className="certification-box">
				{CERTIFICATIONS_ITEMS.map(({ name, date, linkHREF }) => {
					return (
						<div key={name} className="certification-data_box">
							<h2 className="certification-h">
								<TbFileCertificate className="" />
								{name}
							</h2>
							<p className="certification-date">{date}</p>
							<Link href={linkHREF} className="certification-link">
								read more
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Certifications;
