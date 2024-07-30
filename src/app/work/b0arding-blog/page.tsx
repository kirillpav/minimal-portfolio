import Image from "next/image";

const B0ardingBlog = () => {
	return (
		<div className="container mx-auto md:w-1/2 mt-12 relative p-5">
			<div className="flex flex-col">
				<h2 className="uppercase text-primary-color mb-2 text-2xl">
					B0arding Blog
				</h2>
				<div className="text-sm text-custom-accent flex gap-10 mb-10">
					<a href="https://blog.b0arding.com/">url</a>
				</div>

				<Image
					src={"/imgs/boarding-img-1.png"}
					alt="img1"
					width={600}
					height={500}
					className="mb-6 rounded-sm"
				/>
				<Image
					src={"/imgs/boarding-img-2.png"}
					alt="img1"
					width={600}
					height={500}
					className="mb-6 rounded-sm"
				/>
			</div>
			<div className="text-primary-color flex flex-col items-end text-sm absolute top-0 right-5">
				<h3 className="border-b mb-3">TECH</h3>
				<p>Figma</p>
				<p>JavaScript</p>
				<p>Vanilla CSS</p>
				<p>Handlebars</p>
			</div>
			<p className="text-primary-color text-sm mt-6">
				During my internship at b0arding, a travel startup, I developed a blog
				platform designed to increase engagement with the main platform and
				provide readers with valuable insights and tips on various aspects of
				traveling abroad. I created the design in Figma and implemented it using
				JavaScript, CSS, and Handlebars for templating.
			</p>
		</div>
	);
};

export default B0ardingBlog;
