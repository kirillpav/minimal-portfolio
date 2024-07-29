import styles from "./page.module.css";
import Title from "./components/title";
import { Fragment } from "react";
import MainText from "./components/mainText";
import Work from "./components/work";
import About from "./components/about/about";
import Contact from "./components/contact";
import Sidebar from "./components/sidebar";
import StickyFooter from "./components/sticky-footer/stickyFooter";

export default function Home() {
	return (
		<>
			{/* <Sidebar /> */}
			<div className="p-2 w-full md:mx-auto md:w-1/2 min-h-full">
				<MainText />
				<Work />
				<About />
				{/* <Contact /> */}
				<StickyFooter />
			</div>
		</>
	);
}
