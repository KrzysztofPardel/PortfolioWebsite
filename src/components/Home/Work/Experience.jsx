import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdImportantDevices } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsFolderCheck } from 'react-icons/bs';
import { WORK_ITEMS, ITWORK_ITEMS } from './DataArrays';

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
						<div key={id} className="work-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
							<div className="work-box_partOne">
								<h2 className="work-position">{position}</h2>
								<div className="whenWhere-container">
									<p className="work-where">
										{company}, {where}
									</p>
									<p className="work-when">{date}</p>
								</div>
								<div className="work-reference">{reference}</div>
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
						<div key={id} className="work-box" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
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
