import Image from "next/image";
import { useState } from "react";

const B0ardingBlog = () => {
	return (
		<div className="container mx-auto md:w-1/2 mt-12 relative p-5">
			<div className="flex flex-col">
				<div className="flex flex-col md:flex-row items-baseline">
					<h2 className="uppercase text-primary-color mb-2 text-2xl mr-4">
						B0arding Blog
					</h2>
					<p className="text-xs text-primary-color">
						Figma, JavaScript, CSS & HTML, Handlebars, Ghost
					</p>
				</div>
				<div className="text-sm text-custom-accent flex gap-10 mb-2">
					<a href="https://blog.b0arding.com/">url</a>
				</div>

				<Image
					src={"/imgs/boarding-img-1.png"}
					alt="img1"
					width={1000}
					height={500}
					className="mb-6 rounded-sm"
				/>
				<Image
					src={"/imgs/boarding-img-2.png"}
					alt="img1"
					width={1000}
					height={500}
					className="mb-6 rounded-sm"
				/>
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
