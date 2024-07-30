import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Sidebar from "./components/sidebar";
import Title from "./components/title";
import StickyFooter from "./components/sticky-footer/stickyFooter";

const inter = Inter({ subsets: ["latin"] });
const supremeFont = localFont({
	src: "../../public/fonts/TTF/Supreme-Variable.ttf",
});

const glockFont = localFont({
	src: "../../public/fonts/GlockGrotesque-Medium.ttf",
});

export const metadata: Metadata = {
	title: "PAVLOV",
	description: "Kirill Pavlov Portfolio Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={glockFont.className}>
				<Sidebar />
				<Title />
				<StickyFooter />
				{children}
			</body>
		</html>
	);
}
