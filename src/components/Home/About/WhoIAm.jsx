import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myImage from '../../../../public/assets/myImage.png';
import styles from './WhoIAm.module.scss';

const WhoIAm = () => {
	return (
		<div className={styles.whoIAmContainer}>
			<div className={styles.whoIAmText}>
				<h2 className={styles.textH}>Who I Am</h2>
				<p className={styles.textP}>
					Young front-end developer determined to excel in JavaScript, TypeScript, React, Next or Node. Excellent
					command of English confirmed with a C2 CPE certificate. As regards my soft skills, I am committed to
					ownership, diligence, integrity, as well as collaboration with others. Degree in architecture is my advantage
					when it comes to the sense of design and pragmatism as well as the usage of graphic design softwares. To
					solidify my knowledge of IT I am beginning MEng in Applied IT this fall (part-time).
				</p>
				<div className={styles.linkContainer}>
					<Link href="https://github.com/KrzysztofPardel" className={styles.textLink}>
						GitHub
					</Link>
					<Link href="https://www.linkedin.com/in/krzysztof-pardel/" className={styles.textLink}>
						LinkedIn
					</Link>
				</div>
			</div>
			<div className={styles.whoIAmVisual}>
				<Image alt="Kris profile" src={myImage} className={styles.visualImage} />
				<div className={`${styles.visualBackgroundFigure} ${styles.one}`} />
				<div className={`${styles.visualBackgroundFigure} ${styles.two}`} />
				<div className={`${styles.visualBackgroundFigure} ${styles.three}`} />
				{/* <Image alt="Kris signature" src={mySignWhite} className={styles.visualSignature} /> */}
				{/* <p className={styles.visualSignature}>Krzysztof Pardel</p> */}
			</div>
		</div>
	);
};

export default WhoIAm;
