import allProjectsData from "../../../public/allProjects.json";
import Link from "next/link";

const Work = () => {
	const projects = allProjectsData.projects;

	return (
		<div className="container w-1/2 mx-auto">
			<h2 className="text-2xl text-center mt-6 text-primary-color mb-6 uppercase">
				Work
			</h2>
			<div>
				<div></div>
			</div>
			<div className="mx-auto flex flex-col">
				{Object.entries(projects).map(([key, project]) => (
					<Link
						key={key}
						href={`/work/${encodeURIComponent(
							project.name.toLowerCase().replace(/ /g, "-")
						)}`}
						className="flex flex-row justify-between border-t border-b border-primary-color p-10 items-center group"
					>
						<p className="text-primary-color text-3xl mt-1 group-hover:-translate-x-3 group-hover:text-custom-accent transform duration-200">
							{project.name.toUpperCase()}
						</p>
						<p className="text-primary-color text-xs group-hover:translate-x-3 group-hover:text-custom-accent transform duration-200">
							Design & Development
						</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Work;
