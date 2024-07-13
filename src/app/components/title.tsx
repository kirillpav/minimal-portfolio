import styles from "./title.module.css";

export default function Title() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>PAVLOV</h1>
			<p className={styles.coordinates}>37.7749° N, 122.4194° W</p>
			<p className={styles.location}>San Francisco, CA</p>
		</div>
	);
}
