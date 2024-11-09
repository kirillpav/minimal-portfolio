import Title from "./components/title";

import MainText from "./components/mainText";
import Work from "./components/work";
import About from "./components/about/about";
import CurrentTechnologies from "./components/currentTechnologies";
// import Experience from "./components/experience";

export default function Home() {
	return (
		<>
			<div className="p-5 w-full md:mx-auto md:w-1/2 min-h-full c">
				<MainText />
				{/* <Experience /> */}
				<CurrentTechnologies />
				<Work />
			</div>
		</>
	);
}
