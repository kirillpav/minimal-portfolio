import styles from "./about.module.css";

export default function About() {
	return (
		<div id="about" className={styles.container}>
			<h2 className={styles.title}>A Little About Me</h2>
			<p className={styles.text}>
				My name is Kirill! From a young age I loved computers and video games. I
				started my software development journey at a FullStack bootcamp in Kyiv,
				Ukraine. There I learned the fundamentals of full stack web development.
				To take my skills further I moved to San Francisco and enrolled at SFSU.
				Shortly after enrollement I got a job as a Web Developer at the
				univerities academic technology department where I worked for nearly 2
				years. In this position I worked on many university applications and
				learned a lot about databasing and back end development.
			</p>
		</div>
	);
}
