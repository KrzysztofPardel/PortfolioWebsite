'use client';
import { useRouter } from 'next/router';
import { PROJECT_ITEMS } from '../../../../components/Projects/CRM/DataArrays';

const ProjectPage = () => {
	const router = useRouter();
	const { href } = router.query;

	// Find the project based on the href parameter
	const project = PROJECT_ITEMS.find((item) => item.href === href);

	if (!project) {
		return <p>Project not found</p>;
	}

	return (
		<div>
			<h1>{project.title}</h1>
			<p>{project.description}</p>
			<img src={project.src} alt={project.title} />
		</div>
	);
};

export default ProjectPage;
