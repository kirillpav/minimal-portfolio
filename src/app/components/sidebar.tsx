import styles from "./sidebar.module.css";
import WorkHistory from "./workHistory/workHistory";

export default function Sidebar() {
	return (
		<>
			<div className={styles.container}>
				<a className={styles.navLink} href="#intro">
					Intro
				</a>
				<a className={styles.navLink} href="#work">
					Work
				</a>
				<a className={styles.navLink} href="#about">
					About
				</a>
				<a className={styles.navLink} href="#contact">
					Contact
				</a>
				{/* <WorkHistory /> */}
			</div>
		</>
	);
}
