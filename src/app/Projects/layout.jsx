import React from 'react';
import Navigation from '@/components/Navigation';
import PojectNav from '@/components/Projects/ProjectNav/ProjectNav';
import ProjectFooter from '@/components/Projects/ProjectFooter/ProjectFooter';

const Layout = ({ children }) => {
	return (
		<>
			<Navigation />
			<PojectNav />
			{children}
			<ProjectFooter />
		</>
	);
};

export default Layout;
