import ProjectCard from "../components/ProjectCard";
import projectsData from "../../../public/projects.json";

export default function Projects() {
  const projects = Object.values(projectsData.projects);

  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
      <h1 className="text-foreground text-2xl md:text-3xl font-light mb-6">
        <span className="font-medium">projects</span>
      </h1>

      <div className="space-y-4 text-foreground mb-8">
        <p>some of the projects I&apos;ve worked on.</p>
      </div>

      <div className="w-full space-y-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.img}
            github={project.github}
            url={project.url}
            description={project.desc}
          />
        ))}
      </div>
    </div>
  );
}
