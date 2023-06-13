'use client';
import React, { useState } from 'react';
import './Skills.scss';
import Image from 'next/image';
import JS from '../../../public/skills/JS.jpg';
import REACTJS from '../../../public/skills/REACTJS.png';
import Next from '../../../public/skills/Next.png';
import CSS3 from '../../../public/skills/CSS3.png';
import SASS from '../../../public/skills/SASS.png';
import TailwindCSS from '../../../public/skills/TailwindCSS.png';
import Vite from '../../../public/skills/Vite.png';
import WebPack from '../../../public/skills/WebPack.png';
import Affinity from '../../../public/skills/Affinity.png';
import GIT from '../../../public/skills/GIT.png';
import TS from '../../../public/skills/TS.jpg';
import NodeJS from '../../../public/skills/NodeJS.png';
import Redux from '../../../public/skills/Redux.png';
import office from '../../../public/skills/Office.png';
import { MdSchool } from 'react-icons/md';
import { MdGroups } from 'react-icons/md';
import { BsListCheck } from 'react-icons/bs';
import { GiDiscussion } from 'react-icons/gi';
// import { HiClipboardDocumentList } from 'react-icons/hi';
// import { FaPeopleGroup, FaClipboardList } from 'react-icons/fa';
import { IoIosRocket, IoPeople, IoIosList } from 'react-icons/io';

const Skills = () => {
	const [description, setDescription] = useState(1);

	const handleDescription = (page) => {
		setDescription(page);
	};
	return (
		<>
			<div className='container-skills'>
				<div className='rectangle'>
					<p className='skills'>skills</p>
				</div>
				<div className='subcontainer'>
					<h1 className='skills-kind_title'>Soft Skills</h1>
					<div className='soft-skill_set'>
						<div onMouseEnter={() => handleDescription(1)} className='circle'>
							<MdSchool className='icon_ss' />
						</div>
						<div onMouseEnter={() => handleDescription(2)} className='circle'>
							<IoIosRocket className='icon_ss' />
						</div>
						<div onMouseEnter={() => handleDescription(3)} className='circle'>
							<MdGroups className='icon_ss' />
						</div>
						<div onMouseEnter={() => handleDescription(4)} className='circle'>
							<BsListCheck className='icon_ss' />
						</div>
						<div onMouseEnter={() => handleDescription(5)} className='circle'>
							<GiDiscussion className='icon_ss' />
						</div>
					</div>
					<div className='wrap '>
						{description === 1 && (
							<p className='soft-skill_paragraph'>
								Google Translate is a multilingual neural machine translation service developed by Google to translate
								text, documents and websites from one language into another. It offers a website interface, a mobile app
								for Android and iOS, and an API that helps developers build browser extensions and software
								applications.
							</p>
						)}
						{description === 2 && (
							<p className='soft-skill_paragraph'>
								Google Translate is 'n veeltalige neurale masjienvertalingsdiens wat deur Google ontwikkel is om teks,
								dokumente en webwerwe van een taal na 'n ander te vertaal. Dit bied 'n webwerf-koppelvlak, 'n mobiele
								app vir Android en iOS, en 'n API wat ontwikkelaars help om blaaieruitbreidings en sagtewaretoepassings
								te bou.
							</p>
						)}
						{description === 3 && (
							<p className='soft-skill_paragraph'>
								Překladač Google je vícejazyčná služba neurálního strojového překladu vyvinutá společností Google pro
								překlad textu, dokumentů a webových stránek z jednoho jazyka do druhého. Nabízí webové rozhraní, mobilní
								aplikaci pro Android a iOS a API, které pomáhá vývojářům vytvářet rozšíření prohlížeče a softwarové
								aplikace.
							</p>
						)}
						{description === 4 && (
							<p className='soft-skill_paragraph'>
								Google Oversæt er en flersproget neural maskinoversættelsestjeneste udviklet af Google til at oversætte
								tekst, dokumenter og websteder fra et sprog til et andet. Det tilbyder en webstedsgrænseflade, en
								mobilapp til Android og iOS og en API, der hjælper udviklere med at opbygge browserudvidelser og
								softwareapplikationer.
							</p>
						)}
						{description === 5 && (
							<p className='soft-skill_paragraph'>
								ترجمة Google هي خدمة ترجمة آلية عصبية متعددة اللغات طورتها Google لترجمة النصوص والمستندات ومواقع الويب
								من لغة إلى أخرى. يوفر واجهة موقع ويب وتطبيقا للجوال لنظامي التشغيل Android و iOS وواجهة برمجة تطبيقات
								تساعد المطورين على إنشاء ملحقات المتصفح وتطبيقات البرامج.
							</p>
						)}
					</div>
				</div>
				<div className='subcontainer'>
					<h1 className='skills-kind_title'>Hard Skills</h1>
					<h2 className='subcontainer-title'>Languages, Frameworks, Libraries</h2>
					<div className='wrap '>
						<div className='icon'>
							<Image src={JS} alt='Java Script' className='skillIcon' />
							<h2 className='skillName'>Java Script</h2>
						</div>
						<div className='icon'>
							<Image src={REACTJS} alt='React.js' className='skillIcon' />
							<h2 className='skillName'>React.js</h2>
						</div>
						<div className='icon'>
							<Image src={Next} alt='Next.js' className='skillIcon' />
							<h2 className='skillName'>Next.js</h2>
						</div>
					</div>
				</div>
				<div className='subcontainer'>
					<h2 className='subcontainer-title'>Styles</h2>
					<div className='wrap'>
						<div className='icon'>
							<Image src={CSS3} alt='css3' className='skillIcon' />
							<h2 className='skillName'>CSS3</h2>
						</div>
						<div className='icon'>
							<Image src={SASS} alt='sass' className='skillIcon' />
							<h2 className='skillName'>SASS</h2>
						</div>
						<div className='icon'>
							<Image src={TailwindCSS} alt='tailwind' className='skillIcon' />
							<h2 className='skillName'>Tailwind CSS</h2>
						</div>
					</div>
				</div>
				<div className='subcontainer'>
					<h2 className='subcontainer-title'>Building tools</h2>
					<div className='wrap'>
						<div className='icon'>
							<Image src={WebPack} alt='WebPack' className='skillIcon' />
							<h2 className='skillName'>WebPack</h2>
						</div>
						<div className='icon'>
							<Image src={Vite} alt='Vite' className='skillIcon' />
							<h2 className='skillName'>Vite</h2>
						</div>
					</div>
				</div>
				<div className='subcontainer'>
					<h2 className='subcontainer-title'>Others</h2>
					<div className='wrap'>
						<div className='icon'>
							<Image src={GIT} alt='GIT' className='skillIcon' />
							<h2 className='skillName'>GIT</h2>
						</div>
						<div className='icon'>
							<Image src={Affinity} alt='Affinity' className='skillIcon' />
							<h2 className='skillName'>Affinity</h2>
						</div>
						<div className='icon'>
							<Image src={office} alt='office' className='skillIcon' />
							<h2 className='skillName'>MS Office</h2>
						</div>
					</div>
				</div>
				<div className='subcontainer'>
					<h2 className='subcontainer-title'>Technologies I&apos;m currently learning</h2>
					<div className='wrap'>
						<div className='icon'>
							<Image src={TS} alt='TypeScript' className='skillIcon' />
							<h2 className='skillName'>Type Script</h2>
						</div>
						<div className='icon'>
							<Image src={NodeJS} alt='Node js' className='skillIcon' />
							<h2 className='skillName'>Node JS</h2>
						</div>
						<div className='icon'>
							<Image src={Redux} alt='Redux' className='skillIcon' />
							<h2 className='skillName'>Redux</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
