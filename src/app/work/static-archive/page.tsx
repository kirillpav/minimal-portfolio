import Image from "next/image";

const StaticArchive = () => {
	return (
		<div className="container mx-auto md:w-1/2 mt-12 relative p-5">
			<div className="flex flex-col ">
				<div className="flex flex-col md:flex-row items-baseline">
					<h2 className="uppercase text-primary-color mb-2 text-2xl mr-4">
						Static Archives
					</h2>
					<p className="text-xs text-primary-color">
						Figma, Next.js, TypeScript, Modular CSS
					</p>
				</div>
				<div className="text-sm text-custom-accent flex gap-10 mb-10">
					<a href="https://github.com/kirillpav/statics_archives">source</a>
				</div>

				<Image
					src={"/imgs/sa-img1.jpeg"}
					alt="img1"
					width={1000}
					height={500}
					className="mb-6"
				/>
				<Image src={"/imgs/sa-img2.png"} alt="img1" width={1000} height={500} />
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
