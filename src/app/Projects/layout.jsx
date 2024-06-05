import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import PojectNav from '@/components/Projects/ProjectNav/ProjectNav';
import ProjectFooter from '@/components/Projects/ProjectFooter/ProjectFooter';

const Layout = ({ children }) => {
	return (
		<main>
			<Navigation />
			<PojectNav />
			{children}
			<ProjectFooter />
		</main>
	);
};

export default Layout;
