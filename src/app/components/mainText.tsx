import styles from "./mainText.module.css";

export default function MainText() {
	return (
		<p className={`${styles.text} text-sm text-primary-color`}>
			I am an aspiring Software Engineer with a passion for creating accessible
			and visually appealing designs. My goal is to deliver the best possible
			user experience. Currently, I am a web developer intern at b0arding.com, a
			hospitality startup based in San Francisco. Additionally, I am a junior
			studying Computer Science at San Francisco State University. Below are
			some highlights of my work.
		</p>
	);
}
