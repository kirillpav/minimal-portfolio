import styles from "./about.module.css";

export default function About() {
	return (
		<div id="about" className={styles.container}>
			<h2 className={styles.title}>ABOUT</h2>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor
				augue sollicitudin lacinia luctus. Mauris semper ultrices leo, eu
				finibus augue pharetra in. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Pellentesque non
				egestas s
			</p>
		</div>
	);
}
