"use client";

import projects from "../../../public/projects.json";
import styles from "./work.module.css";
import { useState } from "react";

export default function Work() {
	const [selectedProject, setSelectedProject] = useState("B0arding Blog");
	const [selectedInfo, setSelectedInfo] = useState("DESC");

	const handleProjectClick = (project: any) => {
		setSelectedProject(project);
	};

	const hanldeInfoClick = (info: string) => {
		setSelectedInfo(info);
	};

	return (
		<div id="work" className={styles.container}>
			<h2 className={styles.title}>My Work</h2>
			<div className={styles.projectSelector}>
				<a
					href="#"
					className={
						selectedProject === "Static Archives" ? styles.selected : ""
					}
					onClick={() => handleProjectClick("Static Archives")}
				>
					STATIC ARCHIVES
				</a>
				<a
					href="#"
					className={selectedProject === "Typed" ? styles.selected : ""}
					onClick={() => handleProjectClick("Typed")}
				>
					TYPED
				</a>
				<a
					href="#"
					className={selectedProject === "B0arding Blog" ? styles.selected : ""}
					onClick={() => handleProjectClick("B0arding Blog")}
				>
					B0ARDING BLOG
				</a>
			</div>
			<div className={styles.projectsContainer}>
				{selectedProject && (
					<div className={styles.project}>
						<a href={projects[selectedProject].url}>
							<img src={projects[selectedProject].img}></img>
						</a>
						<div className={styles.projectOptions}>
							<a href={projects[selectedProject].github}>GitHub </a>
						</div>
						<div>
							<p className={styles.desc}>{projects[selectedProject].desc}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
