import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myImage from '../../../../public/assets/myImage.png';
// import mySignWhite from '../../../../public/assets/mySignWhite.png';

const WhoIAm = () => {
	return (
		<div className="whoIAm-container">
			<div className="whoIAm-text">
				<h2 className="text-h">Who I am</h2>
				<p className="text-p">
					Young front-end developer determined to excel in JavaScript, TypeScript, React, Next or Node. Excellent
					command of English confirmed with a C2 CPE certificate. As regards my soft skills, I am committed to
					ownership, diligence, integrity, as well as collaboration with others. Degree in architecture is my advantage
					when it comes to the sense of design and pragmatism as well as the usage of graphic design softwares.To
					solidify my knowledge of IT I am begging MEng in Applied IT this fall (part-time).
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
				<Image alt="Kris profile" src={myImage} className="visual-image" />
				<div className="visual-background_figure one" />
				<div className="visual-background_figure two" />
				<div className="visual-background_figure three" />
				{/* <Image alt="Kris signature" src={mySignWhite} className="visual-signature" /> */}
				{/* <p className="visual-signature">Krzysztof Pardel</p> */}
			</div>
		</div>
	);
};

export default WhoIAm;
