import Link from "next/link";
import Modal from "./Modal";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Sidebar() {
	return (
		<>
			<div className="relative mx-auto flex flex-row items-center justify-around w-full top-auto left-auto right-auto mt-10 md:fixed md:flex md:flex-col md:gap-1 md:items-start md:top-40 md:left-20 p-10">
				<div className="mt-12 text-primary-color relative">
					<div className="absolute top-[30px] left-0 right-0 h-[2px] md:h-auto md:left-[-20px] md:top-12 md:bottom-0 md:w-[2px] bg-white/70"></div>
					<h2 className="text-lg mb-4">Experience</h2>
					<div className="flex flex-row md:flex-col gap-4 overflow-x-auto pb-4 md:pb-0">
						<div className="relative min-w-[200px] md:min-w-0">
							<div className="absolute top-[-15px] left-0 md:left-[-24px] md:top-1 w-[10px] h-[10px] rounded-full bg-white"></div>
							<h3 className="text-sm font-semibold text-custom-accent mb-1">
								Full Stack Web Developer
							</h3>
							<p className="text-xs text-slate-400">
								<span className="font-medium">
									San Francisco State University
								</span>{" "}
								• Academic Technology
							</p>
							<p className="text-xs text-slate-500 mt-1">
								San Francisco, 2022 - 2024
							</p>
						</div>

						<div className="relative min-w-[200px] md:min-w-0">
							<div className="absolute top-[-15px] left-0 md:left-[-24px] md:top-1 w-[10px] h-[10px] rounded-full bg-white"></div>
							<h3 className="text-sm font-semibold text-custom-accent mb-1">
								Software Developer
							</h3>
							<p className="text-xs text-slate-400">
								<span className="font-medium">b0arding</span>
							</p>
							<p className="text-xs text-slate-500 mt-1">
								San Francisco, Summer 2024
							</p>
						</div>

						<div className="relative min-w-[200px] md:min-w-0">
							<div className="absolute top-[-15px] left-0 md:left-[-24px] md:top-1 w-[10px] h-[10px] rounded-full bg-white"></div>
							<h3 className="text-sm font-semibold text-custom-accent mb-1">
								Hackathon Participant
							</h3>
							<p className="text-xs text-slate-400">
								<span className="font-medium">Humane AI</span>
							</p>
							<p className="text-xs text-slate-500 mt-1">San Francisco, 2024</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
