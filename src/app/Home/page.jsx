import React from 'react';
import Header from '@/components/Home/Header/Header';
import Navigation from '@/components/Navigation';
import About from '@/components/Home/About/About';
import Values from '@/components/Home/Values/Values';
import Skills from '@/components/Home/Skills/Skills';
import Projects from '@/components/Home/Projects/Projects';
import Contact from '@/components/Home/Contact/Contact';
import Footer from '@/components/Home/Footer/Footer';

const Home = () => {
	return (
		<>
			<Header />
			<Navigation />
			{/* <Skills /> */}
			{/* <Projects /> */}
			{/* <Values /> */}
			<About />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
