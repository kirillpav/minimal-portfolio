import Image from "next/image";

const ColorsOfResilience = () => {
	return (
		<div className="container mx-auto md:w-1/2 mt-12 relative p-5">
			<div className="flex flex-col">
				<div className="flex flex-col md:flex-row items-baseline">
					<h2 className="uppercase text-primary-color mb-2 text-2xl mr-4">
						Colors of Resilience
					</h2>
					<p className="text-xs text-primary-color">
						Figma, Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, AWS
					</p>
				</div>
				<div className="text-sm text-custom-accent flex gap-10 mb-2">
					<a href="https://github.com/kirillpav/colors-of-resilience">source</a>
				</div>
				<Image
					src={"/imgs/cor-img1.jpeg"}
					alt="img1"
					width={1000}
					height={500}
					className="mb-6 rounded-sm"
				/>
				<Image
					src={"/imgs/cor-img2.jpeg"}
					alt="img1"
					width={1000}
					height={500}
					className="mb-6 rounded-sm"
				/>
			</div>

			<p className="text-primary-color text-sm mt-6">
				This is an online art marketplace. I udes figma to create the design for
				the page. I used Next.js with Typescript and Tailwind to style and
				animate the page. For the backend I used PostgreSQL satabase and Prisma
				as an ORM. I have designed and developed an online art marketplace using
				a modern tech stack. The user interface was meticulously crafted using
				Figma, ensuring a visually appealing and intuitive user experience. The
				frontend was built with Next.js, a powerful React framework, and
				TypeScript, providing a robust and type-safe development environment.
				Tailwind CSS was employed to efficiently style the components and create
				smooth, engaging animations throughout the page. On the backend, I
				implemented a PostgreSQL database to securely store and manage the
				application's data. To streamline database operations and ensure
				efficient querying, I utilized Prisma as an Object-Relational Mapping
				(ORM) tool. Prisma's type-safe database client and intuitive API
				significantly enhanced the development process and maintainability of
				the codebase.
			</p>
		</div>
	);
};

export default ColorsOfResilience;
