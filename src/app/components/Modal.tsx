import Link from "next/link";

const Modal = () => {
	return (
		<div className="w-full h-full bg-white">
			<h1>Modal Title</h1>
			<p>Modal Body</p>
			<Link href="/"> Close</Link>
		</div>
	);
};

export default Modal;
