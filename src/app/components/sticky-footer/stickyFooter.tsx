import styles from "./stickyFooter.module.css";

export default function StickyFooter() {
	return (
		<div className={styles.container}>
			<iframe
				style={{ borderRadius: "12px" }}
				src="https://open.spotify.com/embed/track/1d9NF9D6HgLWvGQyPrYE98?utm_source=generator"
				width="100%"
				height="152"
				frameBorder="0"
				// allowfullscreen="false"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		</div>
	);
}
