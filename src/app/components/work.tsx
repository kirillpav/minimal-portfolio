"use client";

import projectsData from "../../../public/projects.json";

import ProjectCard from "./ProjectCard";
export default function Work() {
  const projects = Object.values(projectsData.projects);

  return (
    <div id="work" className="container mt-12">
      <div className="mx-auto flex flex-col relative">
        <div className="flex flex-row justify-between mb-6 items-center">
          <h3 className="text-foreground text-lg">Portfolio</h3>

          {/* <a
						href="/work"
						className="text-primary-color text-xs  hover:text-custom-accent flex flex-row gap-1 items-center"
					>
						All Projects
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</a> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.desc}
              github={project.github}
              url={project.url}
              image={project.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
