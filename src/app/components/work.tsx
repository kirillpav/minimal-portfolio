import Link from "next/link";
import projectsData from "../../../public/projects.json";

import { useState } from "react";

export default function Work() {
	const projects = projectsData.projects;

	return (
		<div id="work" className="container mt-10">
			<div className="mx-auto flex gap-6 justify-between items-center">
				{Object.entries(projects).map(([key, project]) => (
					<div key={key} className="flex flex-col items-center">
						<Link
							href={`/work/${encodeURIComponent(
								project.name.toLowerCase().replace(/ /g, "-")
							)}`}
						>
							<img
								src={project.img}
								alt={project.name}
								className="hover:shadow-2xl hover:shadow-custom-accent transform transition-all ease-in-out duration-500 w-80 rounded-md object-cover"
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
