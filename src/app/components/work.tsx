"use client";
import Link from "next/link";
import projectsData from "../../../public/projects.json";
import { useState, useRef, useEffect } from "react";

export default function Work() {
	const projects = Object.values(projectsData.projects).slice(0, 3);

	return (
		<div id="work" className="container mt-10">
			<div className="mx-auto flex flex-col relative">
				{Object.entries(projects).map(([key, project]) => (
					<Link
						key={key}
						href={`/work/${encodeURIComponent(
							project.name.toLowerCase().replace(/ /g, "-")
						)}`}
						className="flex flex-row justify-between border-t border-b border-primary-color p-10 items-center group hover:cursor-none"
					>
						<p className="text-primary-color text-3xl mt-1 group-hover:-translate-x-3 group-hover:text-custom-accent transform duration-200">
							{project.name.toUpperCase()}
						</p>
						<p className="hidden md:block text-primary-color text-xs group-hover:translate-x-3 group-hover:text-custom-accent transform duration-200">
							{project.category}
						</p>
					</Link>
				))}

				<a
					href="/work"
					className="text-primary-color uppercase mt-12 hover:text-custom-accent hover:bg-bla transform duration-200 text-center p-4 w-1/4 mx-auto"
				>
					See More
				</a>
			</div>
		</div>
	);
}
