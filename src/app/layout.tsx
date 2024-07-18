import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const supremeFont = localFont({
	src: "../../public/fonts/TTF/Supreme-Variable.ttf",
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
			<body className={supremeFont.className}>{children}</body>
		</html>
	);
}
