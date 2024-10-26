import Image from "next/image";

interface projectDataProps {
	name: string;
	image: string;
	github: string;
	url: string;
	stack: [string];
	description: string;
}

export default function ProjectCard(project: projectDataProps) {
	return (
		<div>
			<Image src={project.image} alt={project.name} width={100} height={100} />
			<h2>{project.name}</h2>
			{project.stack.map((item) => (
				<p key={item}>{item} | </p>
			))}
			{project.url ? <p>project.url</p> : <p>project.github</p>}
			<p>{project.description}</p>
		</div>
	);
}
