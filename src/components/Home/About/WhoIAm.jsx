import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myImage from '../../../../public/assets/myImage.png';
import mySignWhite from '../../../../public/assets/mySignWhite.png';

const WhoIAm = () => {
	return (
		<div className="whoIAm-container">
			<div className="whoIAm-text">
				<h2 className="text-h">Who I am</h2>
				<p className="text-p">
					I am a Front-End Junior Developer. I am past my first commercial experiences in programming. I work with
					Next/React+ TypeScript. I am developing through mentoring with a mid, full-stack developer. I have been
					through a course on Node.js although I haven’t had a change to use it commercially. My goal is to become a
					full-stack developer. In October I am planning to begin a Master Degree in Applied Information Technology at
					University of Lodz.
				</p>
				<div className="link-container">
					<Link href="https://github.com/KrzysztofPardel" className="text-link">
						GitHub
					</Link>
					<Link href="https://www.linkedin.com/in/krzysztof-pardel/" className="text-link">
						LinkedIn
					</Link>
				</div>
			</div>
			<div className="whoIAm-visual">
				<Image src={myImage} className="visual-image" />
				<Image src={mySignWhite} className="visual-signature" />
				{/* <p className="visual-signature">Krzysztof Pardel</p> */}
			</div>
		</div>
	);
};

export default WhoIAm;
