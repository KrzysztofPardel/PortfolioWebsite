import React from 'react';
import Header from '@/components/Home/Header/Header';
import Navigation from '@/components/Navigation';
import About from '@/components/Home/About/About';
import Education from '@/components/Home/Education/Education';
import Contact from '@/components/Home/Contact/Contact';
import Footer from '@/components/Home/Footer/Footer';

const Home = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Education />
			<About />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
