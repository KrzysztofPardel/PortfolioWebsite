import React from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ARTICLE_ITEMS, FEATURE_ITEMS } from './DataArrays';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { CiCircleChevRight } from 'react-icons/ci';

const Solution = () => {
	return (
		<section className="solution-wrapper">
			<h1 className="solution-header">Solution</h1>
			<div className="solution-articles">
				{ARTICLE_ITEMS.map(({ id, icon, p_text }) => {
					return (
						<>
							<article key={id} className="solution-article">
								{icon}
								<p className="article-text">{p_text}</p>
							</article>
							<HiOutlineArrowSmRight className="article-arrow" />
						</>
					);
				})}
			</div>
			<div className="solution-features">
				<h2 className="solution-features_header">Technical features</h2>
				<ul className="solution-feature_list">
					{FEATURE_ITEMS.map(({ id, text }) => {
						return (
							<div key={id} className="solution-list_item" data-aos="flip-up" data-aos-anchor-placement="top-bottom">
								<p className="solution-feature_icon">
									<CiCircleChevRight />
								</p>
								<li className="solution-feature">{text}</li>
							</div>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Solution;
