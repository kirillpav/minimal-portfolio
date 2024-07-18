import styles from "./about.module.css";

export default function About() {
	return (
		<div id="about" className={styles.container}>
			<h2 className={styles.title}>A Little About Me</h2>
			<p className={styles.text}>
				My name is Kirill, and I have been passionate about computers and video
				games from a young age. My software development journey began at a
				FullStack bootcamp in Kyiv, Ukraine, where I learned the fundamentals of
				full stack web development. To further enhance my skills, I moved to San
				Francisco and enrolled at San Francisco State University. Shortly after
				enrolling, I secured a position as a Web Developer at the university’s
				academic technology department. Over nearly two years in this role, I
				worked on various university applications, gaining extensive experience
				in databasing and back end development. <br /> Currently, I am looking
				for an internship for summer 2025.
			</p>
		</div>
	);
}
