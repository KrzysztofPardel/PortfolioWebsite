import React from 'react';
import Header from '@/components/Home/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import About from '@/components/Home/About/About';
import Education from '@/components/Home/Education/Education';
import Contact from '@/components/Home/Contact/Contact';
import Footer from '@/components/Home/Footer/Footer';
import Work from '@/components/Home/Work/Work';

const Home = () => {
	return (
		<main>
			<Header />
			<Navigation />
			<Work />
			<Education />
			<About />
			<Contact />
			<Footer />
		</main>
	);
};

export default Home;
