"use client";

import projects from "../../../public/projects.json";

import { useState } from "react";

export default function Work() {
	const [selectedProject, setSelectedProject] = useState("B0arding Blog");
	const [selectedInfo, setSelectedInfo] = useState("DESC");

	const handleProjectClick = (project: any) => {
		setSelectedProject(project);
	};

	const hanldeInfoClick = (info: string) => {
		setSelectedInfo(info);
	};

	return (
		<div id="work" className="container mt-10">
			<div className="flex flex-row justify-around mb-10 border-b-2 border-b-primary-color">
				<a
					href="#"
					className={`${
						selectedProject === "Static Archives"
							? "text-custom-accent"
							: "text-primary-color"
					}  hover:text-custom-accent transform duration-200`}
					onClick={() => handleProjectClick("Static Archives")}
				>
					STATIC ARCHIVES
				</a>
				<a
					href="#"
					className={`${
						selectedProject === "Typed"
							? "text-custom-accent"
							: "text-primary-color"
					}  hover:text-custom-accent transform duration-200`}
					onClick={() => handleProjectClick("Typed")}
				>
					TYPED
				</a>
				<a
					href="#"
					className={`${
						selectedProject === "B0arding Blog"
							? "text-custom-accent"
							: "text-primary-color"
					}  hover:text-custom-accent transform duration-200`}
					onClick={() => handleProjectClick("B0arding Blog")}
				>
					B0ARDING BLOG
				</a>
			</div>
			<div className="mx-auto flex flex-col gap-6 justify-between items-center">
				{selectedProject && (
					<div className="flex flex-col items-center">
						<a href={projects[selectedProject as keyof typeof projects].url}>
							<img
								src={projects[selectedProject as keyof typeof projects].img}
								className="hover:shadow-2xl hover:shadow-custom-accent transform transition-all ease-in-out duration-500 w-80 rounded-md object-cover "
							></img>
						</a>
						<div className="flex flex-row justify-around border-b-2 border-b-primary-color mb-4 mt-10">
							<a
								href={projects[selectedProject as keyof typeof projects].github}
								className="text-primary-color hover:text-custom-accent transition duration-200"
							>
								GitHub{" "}
							</a>
						</div>
						<div>
							<p className="text-primary-color text-sm">
								{projects[selectedProject as keyof typeof projects].desc}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
