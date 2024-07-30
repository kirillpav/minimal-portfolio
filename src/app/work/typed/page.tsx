import Image from "next/image";

const Typed = () => {
	return (
		<div className="container mx-auto md:w-1/2 mt-12 relative">
			<div className="flex flex-col">
				<h2 className="uppercase text-primary-color mb-2 text-2xl">Typed</h2>
				<div className="text-sm text-custom-accent flex gap-10 mb-4">
					<a href="https://typed-5k0hqo32a-kirillpavs-projects.vercel.app/">
						url
					</a>
					<a href="https://github.com/kirillpav/Typed">source</a>
				</div>
				<Image
					src={"/imgs/typed-img.png"}
					alt="img1"
					width={600}
					height={500}
					className="mb-6 rounded-sm"
				/>
			</div>
			<div className="text-primary-color flex flex-col items-end text-sm absolute top-0 right-0">
				<h3 className="border-b mb-3">TECH</h3>
				<p>Figma</p>
				<p>Next.js</p>
				<p>Tailwind CSS</p>
				<p>TypeScript</p>
				<p>API</p>
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
