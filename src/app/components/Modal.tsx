import Link from "next/link";

const Modal = () => {
	return (
		<div className="w-full h-full bg-white">
			<h2 className="text-primary-color text-center mb-6">Modal Title</h2>
			<p>Modal Body</p>
			<Link href="/"> Close</Link>
		</div>
	);
};

export default Modal;
