"use client";
import LiquidGlass from "liquid-glass-react";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function NavigationBar() {
  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2 mt-32">
      <div className="flex flex-row items-center justify-between gap-2">
        <a
          className="text-sm text-foreground hover:text-primary transform duration-200 border-b-2 hover:border-b-0 border-b-primary"
          href="/"
        >
          home
        </a>
        <a
          className="text-sm text-foreground hover:text-primary transform duration-200 border-b-2 hover:border-b-0 border-b-primary"
          href="/about"
        >
          about
        </a>
        <a
          className="text-sm text-foreground hover:text-primary transform duration-200 border-b-2 hover:border-b-0 border-b-primary"
          href="/bookshelf"
        >
          bookshelf
        </a>
        <a
          className="text-sm text-foreground hover:text-primary transform duration-200 border-b-2 hover:border-b-0 border-b-primary"
          href="/projects"
        >
          projects
        </a>
      </div>
    </div>
  );
}
