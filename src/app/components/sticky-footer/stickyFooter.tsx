import Framer from "./framer";

export default function StickyFooter() {
	return (
		<div className="relative right-auto top-auto md:fixed z-40 md:top-20 md:right-16">
			<div id="contact" className="mt-14 block md:flex flex-col items-center">
				<h3 className="text-primary-color mb-6 text-center">REACH OUT</h3>
				<div className="flex flex-row justify-around md:flex-col md:gap-10">
					<Framer>
						<a href="https://www.linkedin.com/in/kirillpavlov2020/">
							<svg
								width="36"
								height="36"
								viewBox="0 0 56 56"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="fill-primary-color hover:fill-custom-accent transform duration-200"
							>
								<path
									d="M37.3333 18.6666C41.0464 18.6666 44.6073 20.1416 47.2328 22.7671C49.8583 25.3926 51.3333 28.9536 51.3333 32.6666V49H42V32.6666C42 31.4289 41.5083 30.242 40.6332 29.3668C39.758 28.4916 38.571 28 37.3333 28C36.0957 28 34.9087 28.4916 34.0335 29.3668C33.1583 30.242 32.6667 31.4289 32.6667 32.6666V49H23.3333V32.6666C23.3333 28.9536 24.8083 25.3926 27.4338 22.7671C30.0594 20.1416 33.6203 18.6666 37.3333 18.6666Z"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M14 21H4.66666V49H14V21Z"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.33332 14C11.9107 14 14 11.9106 14 9.33329C14 6.75596 11.9107 4.66663 9.33332 4.66663C6.75599 4.66663 4.66666 6.75596 4.66666 9.33329C4.66666 11.9106 6.75599 14 9.33332 14Z"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</Framer>
					<Framer>
						<a href="https://github.com/kirillpav">
							<svg
								width="36"
								height="36"
								viewBox="0 0 56 56"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="fill-primary-color hover:fill-custom-accent transform duration-200"
							>
								<path
									d="M35 51.3333V42C35.3246 39.077 34.4865 36.1436 32.6667 33.8333C39.6667 33.8333 46.6667 29.1666 46.6667 21C46.8533 18.0833 46.0367 15.2133 44.3333 12.8333C44.9867 10.15 44.9867 7.34996 44.3333 4.66663C44.3333 4.66663 42 4.66663 37.3333 8.16663C31.1733 6.99996 24.8267 6.99996 18.6667 8.16663C14 4.66663 11.6667 4.66663 11.6667 4.66663C10.9667 7.34996 10.9667 10.15 11.6667 12.8333C9.96769 15.2037 9.14309 18.0898 9.33332 21C9.33332 29.1666 16.3333 33.8333 23.3333 33.8333C22.4233 34.9766 21.7467 36.2833 21.35 37.6833C20.9533 39.0833 20.8367 40.5533 21 42V51.3333"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M21 42C10.4767 46.6667 9.33332 37.3334 4.66666 37.3334"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</Framer>
					<Framer>
						<a href="mailto:2020kirillp@gmail.com">
							<svg
								width="36"
								height="36"
								viewBox="0 0 56 56"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="fill-primary-color hover:fill-custom-accent  transform duration-200"
							>
								<path
									d="M46.6667 9.33337H9.33335C6.75602 9.33337 4.66669 11.4227 4.66669 14V42C4.66669 44.5774 6.75602 46.6667 9.33335 46.6667H46.6667C49.244 46.6667 51.3334 44.5774 51.3334 42V14C51.3334 11.4227 49.244 9.33337 46.6667 9.33337Z"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M51.3334 16.3334L30.4034 29.6334C29.683 30.0847 28.8501 30.3241 28 30.3241C27.1499 30.3241 26.3171 30.0847 25.5967 29.6334L4.66669 16.3334"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</Framer>
				</div>
			</div>
		</div>
	);
}
