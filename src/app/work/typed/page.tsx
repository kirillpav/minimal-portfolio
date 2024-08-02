import Image from "next/image";

const Typed = () => {
	return (
		<div className="container mx-auto md:w-1/2 mt-12 relative p-5">
			<div className="flex flex-col">
				<div className="flex flex-col md:flex-row items-baseline">
					<h2 className="uppercase text-primary-color mb-2 text-2xl mr-4">
						Typed
					</h2>
					<p className="text-xs text-primary-color">
						Figma, Next.js, TypeScript, Tailwind CSS
					</p>
				</div>

				<div className="text-sm text-custom-accent flex gap-10 mb-2">
					<a href="https://typed-5k0hqo32a-kirillpavs-projects.vercel.app/">
						url
					</a>
					<a href="https://github.com/kirillpav/Typed">source</a>
				</div>
				<Image
					src={"/imgs/typed-img.png"}
					alt="img1"
					width={1000}
					height={500}
					className="mb-6 rounded-sm"
				/>
			</div>

			<p className="text-primary-color text-sm mt-6">
				This is a Typeracing game designed to test and improve typing skills. I
				implemented features such as word accuracy validation and a
				words-per-minute calculator. The website was designed in Figma and
				developed using React.js, JavaScript, modular CSS, and APIs. The game is
				hosted on Vercel.
			</p>
		</div>
	);
};

export default Typed;
