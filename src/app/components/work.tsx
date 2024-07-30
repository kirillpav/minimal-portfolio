"use client";
import Link from "next/link";
import projectsData from "../../../public/projects.json";
import { useState, useRef, useEffect } from "react";

export default function Work() {
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
	const [hovered, setHovered] = useState(false);
	const containerRef = useRef(null);

	const handleMouseMove = (e) => {
		if (containerRef.current) {
			const rect = containerRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			setCursorPos({ x, y });
		}
	};

	useEffect(() => {
		if (hovered && containerRef.current) {
			containerRef.current.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [hovered]);

	const projects = projectsData.projects;

	return (
		<div id="work" className="container mt-10">
			<div ref={containerRef} className="mx-auto flex flex-col relative">
				{Object.entries(projects).map(([key, project]) => (
					<Link
						key={key}
						href={`/work/${encodeURIComponent(
							project.name.toLowerCase().replace(/ /g, "-")
						)}`}
						className="flex flex-row justify-between border-t border-b border-primary-color p-10 items-center group hover:cursor-none"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					>
						<p className="text-primary-color text-3xl mt-1 group-hover:-translate-x-3 group-hover:text-custom-accent transform duration-200">
							{project.name.toUpperCase()}
						</p>
						<p className="hidden md:block text-primary-color text-xs group-hover:translate-x-3 group-hover:text-custom-accent transform duration-200">
							Design & Development
						</p>
					</Link>
				))}
				{hovered && (
					<div
						className="absolute h-16 w-16 p-4 bg-custom-accent text-primary-color rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transform duration-100 pointer-events-none uppercase"
						style={{
							left: `${cursorPos.x}px`,
							top: `${cursorPos.y}px`,
						}}
					>
						<p className="text-xs">View</p>
					</div>
				)}
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
