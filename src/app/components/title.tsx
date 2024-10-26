import localFont from "next/font/local";

const GlockGrotesque = localFont({
	src: "../../../public/fonts/GlockGrotesque-Medium.ttf",
});

export default function Title() {
	return (
		<div className="flex flex-col items-center text-center">
			<div
				id="intro"
				className="mx-auto mt-10 md:mt-24 flex flex-col items-start text-center p-5"
			>
				<h1
					className={`text-primary-color text-7xl font-bold ${GlockGrotesque.className}`}
				>
					Kirill Pavlov
				</h1>

				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-col items-start text-left">
						<p className="text-xs text-custom-accent">37.7749°N, 122.4194°W</p>
						<p className="text-xs text-custom-accent">San Francisco, CA</p>
					</div>
					<div className="flex flex-col items-end text-right">
						<p className="text-xs text-custom-accent">Software</p>
						<p className="text-xs text-custom-accent">Developer</p>
					</div>
				</div>
			</div>
		</div>
	);
}
