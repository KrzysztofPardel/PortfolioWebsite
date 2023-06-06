import React from 'react';
import Header from '@/components/Home/Header/Header';
import Navigation from '@/components/Navigation';
import About from '@/components/Home/About';
import Values from '@/components/Home/Values';
import Skills from '@/components/Home/Skills';
import Projects from '@/components/Home/Projects';
import Contact from '@/components/Home/Contact';
import Footer from '@/components/Home/Footer';

const Home = () => {
	return (
		<>
			<Header />
			<Navigation />
			<About />
			{/* <Values /> */}
			{/* <Skills /> */}
			{/* <Projects /> */}
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
