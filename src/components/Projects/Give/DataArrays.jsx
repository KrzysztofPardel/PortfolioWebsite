//What
export const SKILL_ITEMS = [
	{
		skill: 'React',
	},
	{
		skill: 'TypeScript',
	},
	{
		skill: 'Redux Toolkit',
	},
	{
		skill: 'Firebase',
	},
	{
		skill: 'SCSS',
	},
	{
		skill: 'Vite',
	},
];

import GiveHome from '../../../../public/assets/GiveHome.png';
import GiveCount from '../../../../public/assets/GiveCount.png';
import GiveForm from '../../../../public/assets/GiveForm.png';
import GiveInterface from '../../../../public/assets/GiveInterface.png';
import GiveAbout from '../../../../public/assets/GiveAbout.png';
import GiveContact from '../../../../public/assets/GiveContact.png';

export const IMAGES_ITEMS = [
	{
		id: 1,
		src: GiveHome,
		alt: 'home page',
	},
	{
		id: 2,
		src: GiveCount,
		alt: 'counting data',
	},
	{
		id: 3,
		src: GiveForm,
		alt: 'multiform',
	},
	{
		id: 4,
		src: GiveInterface,
		alt: 'multiform view',
	},
	{
		id: 5,
		src: GiveAbout,
		alt: 'about section',
	},
	{
		id: 6,
		src: GiveContact,
		alt: 'contact section',
	},
];

//Purpose
export const PURPOSE_TEXT = [
	{
		id: 1,
		text: `When we look around in our country, we can see that over the last 20 years, a major development has takenplace. The average John Smith can live a life of a higher standard and can afford more than ever before. However, that's not everyone's story.`,
	},
	{
		id: 2,
		text: `In proportion to the minimal wage, the prices have gone up signifiacntly and made life harder for some who
		were already destitude. There are single moders or whole families who struggle to make end meet on monthly
		basis.`,
	},
	{
		id: 3,
		text: `Give helps in aiding those who are in need. The purspose of this website is to mediate between people who are
		willing to donate and the ones who are willing to receive. Various resources, such as books, fabric materials,
		clothes do not need to be thrown away the moment you don't need them. They can be passed to someone else. Did
		you know that?`,
	},
	{
		id: 4,
		text: `So do not be indifferent toward those who were less fortunate than you. Get involved today.`,
	},
];
//Solution
import { TfiStatsUp } from 'react-icons/tfi';
import { CiViewTimeline } from 'react-icons/ci';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { IoPeopleSharp } from 'react-icons/io5';
export const ARTICLE_ITEMS = [
	{
		id: 1,
		icon: <IoPeopleSharp className="article-icon" />,
		p_text: 'Create an app which connects people willing to meet the need in this area.',
	},
	{
		id: 2,
		icon: <MdFormatListBulletedAdd className="article-icon" />,
		p_text: 'Provide a way for users to donate or to create collection events.',
	},
	{
		id: 3,
		icon: <TfiStatsUp className="article-icon" />,
		p_text: 'Allow users to track their porgress in helping so they feel empowered to make a bigger difference.',
	},
	{
		id: 4,
		icon: <CiViewTimeline className="article-icon" />,
		p_text: 'Let users enjoy the process of giving thanks to intuitive UI.',
	},
];
//Takeways
export const TAKEAWAYS_ITEMS = [
	{
		id: 1,
		p_text: 'Need',
		p_comment: '...fuels vision an then drives me to solutions beyond what I knew before.',
	},
	{
		id: 2,
		p_text: 'Redux Toolkit',
		p_comment: 'First time I have ever used it and definitely not the last one.',
	},
	{
		id: 3,
		p_text: 'Multiforms',
		p_comment: 'Fantastic for UX, but a little challenging to validate.',
	},
	{
		id: 4,
		p_text: 'Errors',
		p_comment: 'Error boundary and designing errors so that they help, not just annoy.',
	},
	{
		id: 5,
		p_text: 'Organize',
		p_comment: 'Everything from files to your code in a clear and clean way and you will be amazed.',
	},
];
