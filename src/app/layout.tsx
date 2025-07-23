import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import NavigationBar from "./components/NavigationBar";
import Socials from "./components/Socials";

const inter = Inter({ subsets: ["latin"] });
const supremeFont = localFont({
  src: "../../public/fonts/TTF/Supreme-Variable.ttf",
});

const authorFont = localFont({
  src: "../../public/fonts/Author-Variable.ttf",
});

const glockFont = localFont({
  src: "../../public/fonts/GlockGrotesque-Medium.ttf",
});

export const metadata: Metadata = {
  title: "Kirill Pavlov",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={supremeFont.className}>
        <NavigationBar />
        {children}
        <Socials />
      </body>
    </html>
  );
}
