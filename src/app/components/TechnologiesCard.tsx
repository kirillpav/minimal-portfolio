import Image from "next/image";

interface techProps {
  logo: string;
  name: string;
  stack: string;
}

export default function TechnologiesCard(tech: techProps) {
  const glowColors = {
    ".net": "bg-purple-500/20", // Microsoft purple
    "c#": "bg-purple-500/20", // Microsoft purple
    postgresql: "bg-cyan-400/20", // PostgreSQL cyan
    "tailwind css": "bg-teal-400/20", // Tailwind teal
    tailwind: "bg-teal-400/20", // Alternative key
    "react.js": "bg-cyan-400/20", // React cyan
    react: "bg-cyan-400/20", // Alternative key
    git: "bg-orange-500/20", // Git orange
    swift: "bg-orange-500/20", // Swift orange
    go: "bg-cyan-500/20", // Go cyan
  };

  const glowColor = glowColors[tech.name.toLowerCase()] || "bg-slate-500/20";

  return (
    <div
      className={`tech-card flex flex-row items-center rounded-md bg-card border border-border p-2 w-full hover:bg-accent transform duration-200 hover:shadow-[0_0_15px_-3px] hover:shadow-primary/40 transition-all`}
    >
      <div className="relative">
        <div className={`absolute inset-0 ${glowColor} rounded-md`} />
        <Image
          src={tech.logo}
          width={30}
          alt={tech.name}
          height={30}
          className="h-[30px] w-[30px] relative z-10 m-[10px]"
        />
      </div>

      <div className="flex flex-col gap-1 ml-4">
        <p className="text-card-foreground text-[12px]">{tech.name}</p>
        <p className="text-[8px] text-muted-foreground">{tech.stack}</p>
      </div>
    </div>
  );
}
