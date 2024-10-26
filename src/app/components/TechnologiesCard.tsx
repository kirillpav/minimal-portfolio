import Image from "next/image";

interface techProps {
	logo: string;
	name: string;
	stack: string;
}

export default function TechnologiesCard(tech: techProps) {
	const glowColors = {
		figma: "bg-green-500/20",
		typescript: "bg-blue-500/20",
		react: "bg-cyan-500/20",
		nextjs: "bg-white/10",
		tailwind: "bg-cyan-400/20",
		git: "bg-orange-500/20",
		swift: "bg-orange-500/20",
		go: "bg-blue-500/20",
	};

	const glowColor = glowColors[tech.name.toLowerCase()] || "bg-slate-500/20";

	return (
		<div
			className={`tech-card flex flex-row items-center rounded-md bg-slate-900 p-2 w-full hover:bg-slate-800 transform duration-200 hover:shadow-[0_0_15px_-3px] hover:shadow-custom-accent/40 transition-all`}
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
				<p className="text-primary-color text-[12px]">{tech.name}</p>
				<p className="text-[8px] text-slate-400">{tech.stack}</p>
			</div>
		</div>
	);
}
