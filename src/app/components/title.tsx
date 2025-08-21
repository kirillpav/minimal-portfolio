import localFont from "next/font/local";
import NavigationBar from "./NavigationBar";
import Socials from "./Socials";

const GlockGrotesque = localFont({
  src: "../../../public/fonts/GlockGrotesque-Medium.ttf",
});

export default function Title() {
  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
      <p className="text-foreground text-2xl md:text-3xl font-light">
        I&apos;m <span className="font-medium">kirill</span>
      </p>
    </div>
  );
}
