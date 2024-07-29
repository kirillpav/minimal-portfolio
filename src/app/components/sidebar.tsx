import Link from "next/link";
import Modal from "./Modal";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Sidebar() {
	return (
		<>
			<div className="relative mx-auto flex flex-row items-center justify-center w-full top-auto left-auto right-auto mt-10 md:fixed md:flex md:flex-col md:gap-1 md:items-start md:top-40 md:left-20">
				<a
					className="text-sm text-primary-color hover:text-custom-accent transform duration-200 hover:border-b-2 border-b-custom-accent"
					href="/"
				>
					Home
				</a>
				<a
					className="text-sm text-primary-color hover:text-custom-accent transform duration-200 hover:border-b-2 border-b-custom-accent"
					href="#work"
				>
					Work
				</a>
				<a
					className="text-sm text-primary-color hover:text-custom-accent transform duration-200 hover:border-b-2 border-b-custom-accent"
					href="#about"
				>
					About
				</a>
				<Link
					className="text-sm text-primary-color hover:text-custom-accent transform duration-200 hover:border-b-2 border-b-custom-accent"
					href="/?modal=true"
				>
					Contact
				</Link>

				<a
					className="text-sm text-primary-color hover:text-custom-accent transform duration-200 hover:border-b-2 border-b-custom-accent"
					href="/tech"
				>
					Tech
				</a>
			</div>
		</>
	);
}
