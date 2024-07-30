import styles from "./page.module.css";
import Title from "./components/title";

import MainText from "./components/mainText";
import Work from "./components/work";
import About from "./components/about/about";

export default function Home() {
	return (
		<>
			<div className="p-2 w-full md:mx-auto md:w-1/2 min-h-full">
				<MainText />
				<Work />
				<About />
			</div>
		</>
	);
}
