import Image from "next/image";

const StaticArchive = () => {
	return (
		<div className="container mx-auto md:w-1/2 mt-12 relative">
			<div className="flex flex-col ">
				<h2 className="uppercase text-primary-color mb-6 text-2xl">
					Static Archive
				</h2>
				<div className="text-sm text-custom-accent flex gap-10">
					<a href="https://github.com/kirillpav/Typed">source</a>
				</div>

				<Image
					src={"/imgs/sa-img1.jpeg"}
					alt="img1"
					width={600}
					height={500}
					className="mb-6"
				/>
				<Image src={"/imgs/sa-img2.png"} alt="img1" width={600} height={500} />
			</div>
			<div className="text-primary-color flex flex-col items-end text-sm absolute top-0 right-0">
				<h3 className="border-b mb-3">TECH</h3>
				<p>Figma</p>
				<p>Next.js</p>
				<p>Modular CSS</p>
				<p>TypeScript</p>
			</div>
			<p className="text-primary-color text-sm mt-6">
				This is a website for an eCommerce keyboard designer. I developed the
				entire design in Figma to effectively showcase their products and
				designs. The implementation was done using React.js, JavaScript, and
				modular CSS
			</p>
		</div>
	);
};

export default StaticArchive;
