import React from 'react';
import Link from 'next/link';
import { TbFileCertificate } from 'react-icons/tb';
import { CERTIFICATIONS_ITEMS } from './DataArrays';
import styles from './SCSS/Certifications.module.scss';

const Certifications = () => {
	return (
		<main id="certifications" className={styles.certificationsContainer}>
			<h1 className={styles.certificationsH}>Certifications</h1>
			<section className={styles.certificationBox}>
				{CERTIFICATIONS_ITEMS.map(({ name, date, linkHREF }) => {
					return (
						<div key={name} className={styles.certificationDataBox}>
							<h2 className={styles.certificationH}>
								<TbFileCertificate className={styles.certificationIcon} />
								{name}
							</h2>
							<p className={styles.certificationDate}>{date}</p>
							<Link href={linkHREF} className={styles.certificationLink}>
								read more
							</Link>
						</div>
					);
				})}
				<p className={styles.certificationsConfirmation}>
					If you would like to see the confirmation, let me know through the Contact form below.
				</p>
			</section>
		</main>
	);
};

export default Certifications;
