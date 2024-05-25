import React from 'react';
import { GRID_ARTICLES } from './DataArrays';

const Solution = () => {
	return (
		<section className="solution-wrapper_crm">
			<h1 className="solution-header crm-header ">My contiribution</h1>
			<p className="solution-note">
				*It&apos;s worth noting that in order to respect the company&apos;s idea as as well as their privacy policy not
				all of the details can be shared.
			</p>
			<div className="solution-grid">
				{GRID_ARTICLES.map(({ id, title, text }) => {
					return (
						<article key={id} className={`grid-article article-${id}`}>
							<h2 className="grid-article_header ">{title}</h2>
							<p className="grid-article_paragraph">{text}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Solution;
