"use client";
import Link from "next/link";
import projectsData from "../../../public/projects.json";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ProjectCard from "./ProjectCard";

const MotionLink = motion(Link);

const categoryVariants = {
	initial: { x: 0 },
	hover: { x: 20, color: "#ff4921" },
};

export default function Work() {
	const projects = Object.values(projectsData.projects);
	const [hoveredLink, setHoveredLink] = useState(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const springConfig = { damping: 60, stiffness: 900 };
	const mouseXSpring = useSpring(mouseX, springConfig);
	const mouseYSpring = useSpring(mouseY, springConfig);

	const handleMouseMovement = (e) => {
		mouseX.set(e.clientX);
		mouseY.set(e.clientY);
	};

	return (
		<div id="work" className="container mt-12">
			<div className="mx-auto flex flex-col relative">
				<div className="flex flex-row justify-between mb-6 items-center">
					<h3 className="text-primary-color text-lg">Portfolio</h3>

					<a
						href="/work"
						className="text-primary-color text-xs  hover:text-custom-accent flex flex-row gap-1 items-center"
					>
						All Projects
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</a>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{Object.entries(projects).map(([key, project], index) => (
						<button
							key={key}
							className="flex flex-row justify-between p-10 items-center group border border-slate-800/60 rounded-lg bg-slate-900/40 hover:bg-slate-800 transform duration-200"
						>
							<motion.p className="text-primary-color text-3xl text-center flex flex-row gap-1 items-center justify-between">
								{project.name.toUpperCase()}
								<ArrowDown />
							</motion.p>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
