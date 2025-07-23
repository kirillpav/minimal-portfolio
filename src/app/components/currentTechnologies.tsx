import TechnologiesCard from "./TechnologiesCard";

export default function CurrentTechnologies() {
  const technologiesArray = [
    {
      name: ".NET",
      logo: "/imgs/dotnet-logo.png",
      stack: "Backend",
    },
    { name: "C#", logo: "/imgs/csharp-logo.png", stack: "Backend" },
    {
      name: "PostgreSQL",
      logo: "/imgs/postgresql-logo.png",
      stack: "Database",
    },
    {
      name: "Git",
      logo: "/imgs/git-icon.svg",
      stack: "Version Control",
    },
    {
      name: "React.js",
      logo: "/imgs/react-logo.svg",
      stack: "JS Framework",
    },
    {
      name: "Swift",
      logo: "/imgs/swift-logo.svg",
      stack: "iOS Development",
    },
    {
      name: "Go",
      logo: "/imgs/Go-Logo.svg",
      stack: "Backend",
    },
    {
      name: "Tailwind CSS",
      logo: "/imgs/tailwind-logo.svg",
      stack: "CSS Framework",
    },
  ];

  return (
    <div className="mt-12 w-full">
      <h2 className="text-foreground text-lg">technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {technologiesArray.map((item) => (
          <TechnologiesCard
            key={item.name}
            name={item.name}
            logo={item.logo}
            stack={item.stack}
          />
        ))}
      </div>
    </div>
  );
}
