import projects from "../../../public/projects.json";
import styles from "./work.module.css";

export default function Work() {
	return (
		<div id="work" className={styles.container}>
			<h2 className={styles.title}>WORK</h2>
			<div className={styles.projectsContainer}>
				<a href={projects["Project 1"].github}>
					<img src={projects["Project 1"].img} alt="Static Archive"></img>
				</a>
				<a href={projects["Project 2"].url}>
					<img src={projects["Project 2"].img}></img>
				</a>
				<a href={projects["Project 3"].url}>
					<img src={projects["Project 3"].img}></img>
				</a>
				<a href={projects["Project 4"].url}>
					<img src={projects["Project 4"].img}></img>
				</a>
			</div>
		</div>
	);
}
