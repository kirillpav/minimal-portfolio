import styles from "./title.module.css";

export default function Title() {
	return (
		<div className={styles.outer}>
			<div id="intro" className={styles.container}>
				<p className={styles.title}>PAVLOV</p>
				<div className={styles.info}>
					<p className={styles.coordinates}>37.7749° N, 122.4194° W</p>
					<p className={styles.location}>San Francisco, CA</p>
				</div>
			</div>
		</div>
	);
}
