import TechnologiesCard from "./TechnologiesCard";

export default function CurrentTechnologies() {
	const technologiesArray = [
		{
			name: "Figma",
			logo: "/imgs/figma_logo.svg",
			stack: "Design",
		},
		{ name: "TypeScript", logo: "/imgs/ts-logo-128.svg", stack: "Better JS" },
		{
			name: "Next.js",
			logo: "/imgs/nextjs-icon-svgrepo-com.svg",
			stack: "React.js Framework",
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
			<h2 className="text-primary-color text-lg">Technology</h2>
			<p className="text-slate-500 text-sm">
				I am most experiences with the following technologies in full stack web
				and app development, with hands-on experience in each.
			</p>
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
