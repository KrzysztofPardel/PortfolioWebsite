import React from 'react';
import Link from 'next/link';
import { TbFileCertificate } from 'react-icons/tb';
import { CERTIFICATIONS_ITEMS } from './DataArrays';
import styles from './SCSS/Certifications.module.scss';

const Certifications = () => {
	return (
		<main id="certifications" className={styles['certifications-container']}>
			<h1 className={styles['certifications-h']}>Certifications</h1>
			<section className={styles['certification-box']}>
				{CERTIFICATIONS_ITEMS.map(({ name, date, linkHREF }) => {
					return (
						<div key={name} className={styles['certification-data_box']}>
							<h2 className={styles['certification-h']}>
								<TbFileCertificate className={styles['certification-icon']} />
								{name}
							</h2>
							<div className={styles['certification-details']}>
								<p className={styles['certification-date']}>{date}</p>
								<Link href={linkHREF} className={styles['certification-link']}>
									read more
								</Link>
							</div>
						</div>
					);
				})}
				<p className={styles['certifications-confirmation']}>
					If you would like to see the confirmation, let me know through the Contact form below.
				</p>
			</section>
		</main>
	);
};

export default Certifications;
