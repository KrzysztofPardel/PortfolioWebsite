import React from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { ARTICLE_ITEMS } from './DataArrays';
import { CiCircleChevRight } from 'react-icons/ci';

export const FEATURE_ITEMS = [
	{
		id: 1,
		text: `Fully responsive views of each site. The application has been prepared for a desktop, tablet and a mobile
		device.`,
	},
	{
		id: 2,
		text: `I utilized Redux Toolkit to manage the state of the app, which can be seen especially in Multiforms whre
		Redux was used to pass data, which eventually is sent to Firebase.`,
	},
	{
		id: 3,
		text: `	On the one hand, Firebase is used to store data received through contact form, both multiforms and to
		provided data for pugination in Foundations section. On the other, Firebase is an authentication serivce.`,
	},
	{
		id: 4,
		text: `Protected routes have been applied so that without being a used certain pages and tracing your progress in inaccessible.Hook useRoutes is used for application routing`,
	},
	{
		id: 5,
		text: `Schema Yup library has been used for validation purposes. However, multifomrs are authenticated without it, through managing the state of data from Redux.`,
	},
	{
		id: 6,
		text: `Lazy loading of components.`,
	},
	{
		id: 7,
		text: `Error boundary secures the necessary errors screens.`,
	},
];

const Solution = () => {
	return (
		<div className="solution-wrapper">
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
							<div className="solution-list_item" data-aos="flip-up" data-aos-anchor-placement="top-bottom">
								<p className="solution-feature_icon">
									<CiCircleChevRight />
								</p>
								<li key={id} className="solution-feature">
									{text}
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Solution;
