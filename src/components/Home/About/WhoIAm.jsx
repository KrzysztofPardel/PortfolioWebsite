import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myImage from '../../../../public/assets/myImage.png';
import styles from './WhoIAm.module.scss';

const WhoIAm = () => {
	return (
		<main className={styles['whoIAm-container']}>
			<section className={styles['whoIAm-text']}>
				<h2 className={styles['text-h']}>Who I Am</h2>
				<p className={styles['text-p']}>
					Young front-end developer determined to excel in JavaScript, TypeScript, React, Next or Node. Excellent
					command of English confirmed with a C2 CPE certificate. As regards my soft skills, I am committed to
					ownership, diligence, integrity, as well as collaboration with others. Degree in architecture is my advantage
					when it comes to the sense of design and pragmatism as well as the usage of graphic design softwares. To
					solidify my knowledge of IT I am beginning MEng in Applied IT this fall (part-time).
				</p>
				<div className={styles['link-container']}>
					<Link href="https://github.com/KrzysztofPardel" className={styles['text-link']}>
						GitHub
					</Link>
					<Link href="https://www.linkedin.com/in/krzysztof-pardel/" className={styles['text-link']}>
						LinkedIn
					</Link>
				</div>
			</section>
			<section className={styles['whoIAm-visual']}>
				<Image alt="Kris profile" src={myImage} className={styles['visual-image']} />
				<div className={`${styles['visual-background_figure']} ${styles.one}`} />
				<div className={`${styles['visual-background_figure']} ${styles.two}`} />
				<div className={`${styles['visual-background_figure']} ${styles.three}`} />
				{/* <Image alt="Kris signature" src={mySignWhite} className={styles['visual-signature']} />
				<p className={styles['visual-signature']}>Krzysztof Pardel</p> */}
			</section>
		</main>
	);
};

export default WhoIAm;
