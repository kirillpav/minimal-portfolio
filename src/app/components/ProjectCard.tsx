import Image from "next/image";

interface projectDataProps {
  name: string;
  image: string;
  github: string;
  url: string;
  description: string;
}

export default function ProjectCard(project: projectDataProps) {
  return (
    <div className="flex flex-col gap-2 border border-border rounded-md p-5 hover:border-foreground transform duration-200 bg-card">
      <div className="flex flex-col items-start">
        <h2 className="text-card-foreground text-lg font-medium">
          {project.name}
        </h2>

        {project.url ? (
          <div className="flex flex-row gap-1">
            <a
              href={project.url}
              className="text-muted-foreground underline hover:text-primary transition-colors"
            >
              link
            </a>
            <p className="text-muted-foreground"> | </p>
            <a
              href={project.github}
              className="text-muted-foreground underline hover:text-primary transition-colors"
            >
              github
            </a>
          </div>
        ) : (
          <a
            href={project.github}
            className="text-muted-foreground underline hover:text-primary transition-colors"
          >
            github
          </a>
        )}
        <p className="text-card-foreground text-left">{project.description}</p>
      </div>
    </div>
  );
}
