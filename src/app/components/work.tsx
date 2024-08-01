"use client";
import Link from "next/link";
import projectsData from "../../../public/projects.json";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MotionLink = motion(Link);
const linkVariants = {
	initial: { x: 0 },
	hover: { x: -20, color: "#ff4921" },
};
const categoryVariants = {
	initial: { x: 0 },
	hover: { x: 20, color: "#ff4921" },
};

const CustomCursor = ({ mousePosition }) => {
	const springConfig = { damping: 40, stiffness: 900 };
	const x = useSpring(mousePosition.x, springConfig);
	const y = useSpring(mousePosition.y, springConfig);
	return (
		<motion.div
			className="fixed p-4 text-xs top-0 left-0 w-16 h-16 rounded-full bg-custom-accent flex items-center justify-center text-primary-color pointer-events-none z-50 uppercase"
			style={{
				left: x,
				top: y,
				translateX: "-50%",
				translateY: "-50%",
			}}
		>
			View
		</motion.div>
	);
};

export default function Work() {
	const projects = Object.values(projectsData.projects).slice(0, 3);
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
		<div id="work" className="container mt-10">
			{hoveredLink !== null && (
				<CustomCursor mousePosition={{ x: mouseX, y: mouseY }} />
			)}
			<div className="mx-auto flex flex-col relative">
				<h3 className="text-primary-color text-center mb-6">Recent Projects</h3>

				{Object.entries(projects).map(([key, project], index) => (
					<MotionLink
						key={key}
						href={`/work/${encodeURIComponent(
							project.name.toLowerCase().replace(/ /g, "-")
						)}`}
						className="flex flex-row justify-between border-t border-b border-primary-color p-10 items-center group hover:cursor-none"
						whileHover="hover"
						initial="initial"
						onMouseMove={handleMouseMovement}
						onMouseEnter={() => setHoveredLink(index)}
						onMouseLeave={() => setHoveredLink(null)}
					>
						<motion.p
							className="text-primary-color text-3xl mt-1"
							variants={linkVariants}
							transition={{ duration: 0.2 }}
						>
							{project.name.toUpperCase()}
						</motion.p>
						<motion.p
							className="hidden md:block text-primary-color text-xs"
							variants={categoryVariants}
							transition={{ duration: 0.2 }}
						>
							{project.category}
						</motion.p>
					</MotionLink>
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
