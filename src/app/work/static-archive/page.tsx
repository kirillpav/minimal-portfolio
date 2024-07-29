import Image from "next/image";

const StaticArchive = () => {
	return (
		<div className="container mx-auto md:w-1/2 mt-12">
			<h1 className="uppercase text-primary-color text-center mb-6 ">
				Static Archive
			</h1>

			<div>
				<div className="flex flex-row justify-between">
					<Image
						src={"/imgs/sa-img1.jpeg"}
						alt="Img"
						width={500}
						height={300}
					/>
					<div className="text-primary-color text-right">
						<p>Next.js</p>
						<p>TypeScript</p>
						<p>Modular CSS</p>
						<p>Figma</p>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default StaticArchive;
