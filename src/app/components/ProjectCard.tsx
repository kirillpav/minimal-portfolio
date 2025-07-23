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
    <div className="flex flex-col gap-2 border border-border rounded-md p-5 hover:border-foreground transform duration-200 bg-card">
      <div className="aspect-video relative w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-card-foreground text-lg font-medium">
          {project.name}
        </h2>
        <div className="text-muted-foreground flex flex-row gap-1">
          {project.stack.map((item, index) => (
            <span key={item}>
              {item}
              {index < project.stack.length - 1 ? " | " : ""}
            </span>
          ))}
        </div>

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
