import styles from "./title.module.css";

export default function Title() {
	return (
		<div className={styles.outer}>
			<div id="intro" className={styles.container}>
				<p className={`${styles.title} text-primary-color`}>PAVLOV</p>
				<div className={styles.info}>
					<p className={`${styles.coordinates} text-xs text-custom-accent`}>
						37.7749° N, 122.4194° W
					</p>
					<p className={`${styles.location} text-xs text-custom-accent`}>
						San Francisco, CA
					</p>
				</div>
			</div>
		</div>
	);
}
