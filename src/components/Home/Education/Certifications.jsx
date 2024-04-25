import React from 'react';
import Link from 'next/link';
// import { Link as LinkScroll } from 'react-scroll';
import { TbFileCertificate } from 'react-icons/tb';
import { CERTIFICATIONS_ITEMS } from './DataArrays';

const Certifications = () => {
	return (
		<div id="certifications" className="certifications-container">
			<h1 className="certifications-h">Certifications</h1>
			<div className="certification-box">
				{CERTIFICATIONS_ITEMS.map(({ name, date, linkHREF }) => {
					return (
						<div key={name} className="certification-data_box">
							<h2 className="certification-h">
								<TbFileCertificate className="certification-icon" />
								{name}
							</h2>
							<p className="certification-date">{date}</p>
							<Link href={linkHREF} className="certification-link">
								read more
							</Link>
						</div>
					);
				})}
				<p className="certifications-confirmation">
					If you would like to see the confirmation, let me know through the Contact form below.
				</p>
				{/* <LinkScroll to="contact" spy smooth duration={1200} className="certifications-link">
					Take me to Contact form
				</LinkScroll> */}
			</div>
		</div>
	);
};

export default Certifications;
