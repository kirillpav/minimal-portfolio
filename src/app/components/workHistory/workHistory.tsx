"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WorkHistory.module.css";

gsap.registerPlugin(ScrollTrigger);

const WorkHistory = () => {
	const items = useRef([]);

	useEffect(() => {
		items.current.forEach((item, index) => {
			if (item) {
				gsap.fromTo(
					item,
					{ opacity: 0, y: -50 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						scrollTrigger: {
							trigger: item,
							start: "top 80%", // start animation when the top of the item reaches 80% of the viewport height
							end: "top 20%", // end animation when the top of the item reaches 20% of the viewport height
							scrub: true, // smooth scrubbing
							markers: true, // to see the markers (remove this line in production)
						},
					}
				);
			}
		});
	}, []);

	return (
		<div className={styles.timelineContainer}>
			<div className={styles.timelineLine}></div>
			<ul className={styles.timelineList}>
				<li
					ref={(el) => (items.current[0] = el)}
					className={styles.timelineItem}
				>
					<span className={styles.bullet}>2018</span>
					<div className={styles.content}>Web Developer at SFSU</div>
				</li>
				<li
					ref={(el) => (items.current[1] = el)}
					className={styles.timelineItem}
				>
					<span className={styles.bullet}>2024</span>
					<div className={styles.content}>Intern at Promaxo</div>
				</li>
				<li
					ref={(el) => (items.current[2] = el)}
					className={styles.timelineItem}
				>
					<span className={styles.bullet}>2025</span>
					<div className={styles.content}>
						Web Developer Intern at b0arding.com
					</div>
				</li>
			</ul>
		</div>
	);
};

export default WorkHistory;
