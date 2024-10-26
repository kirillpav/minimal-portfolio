import Image from "next/image";

interface projectDataProps {
	name: string;
	image: string;
	github: string;
	url: string;
	stack: string[];
	description: string;
}

export default function ProjectCard(project: projectDataProps) {
	return (
		<div className="flex flex-col gap-2 border border-slate-500 rounded-md p-5 hover:border-white transform duration-200">
			<div className="aspect-video relative w-full overflow-hidden rounded-lg">
				<Image
					src={project.image}
					alt={project.name}
					fill
					className="object-cover"
				/>
			</div>
			<div className="flex flex-col items-start">
				<h2 className="text-primary-color text-lg font-medium">
					{project.name}
				</h2>
				<div className="text-slate-300 flex flex-row gap-1">
					{project.stack.map((item, index) => (
						<span key={item}>
							{item}
							{index < project.stack.length - 1 ? " | " : ""}
						</span>
					))}
				</div>

				{project.url ? (
					<a href={project.url} className="text-slate-400 underline">
						link
					</a>
				) : (
					<a href={project.github} className="text-slate-400 underline">
						github
					</a>
				)}
				<p className="text-white text-left">{project.description}</p>
			</div>
		</div>
	);
}
