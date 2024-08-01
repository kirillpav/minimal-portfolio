export default function Title() {
	return (
		<div className="flex flex-col items-center text-center">
			<div
				id="intro"
				className="mx-auto mt-10 md:mt-24 flex flex-col items-start text-center p-5"
			>
				<h1 className="text-primary-color text-7xl">Kirill Pavlov</h1>

				<div className="flex flex-col items-start text-left w-full">
					<p className="text-xs text-custom-accent">37.7749° N, 122.4194° W</p>
					<p className="text-xs text-custom-accent">San Francisco, CA</p>
				</div>
			</div>
		</div>
	);
}
