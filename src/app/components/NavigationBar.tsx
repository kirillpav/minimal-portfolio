"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Clock from "./Clock";

export default function NavigationBar() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabElementRef = useRef<HTMLAnchorElement>(null);

  const navItems = [
    { href: "/", label: "home" },
    { href: "/bookshelf", label: "bookshelf" },
    { href: "/projects", label: "projects" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (pathname && container) {
      const activeTabElement = activeTabElementRef.current;
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;

        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100
        ).toFixed()}% round 17px)`;
      }
    }
  }, [pathname]);

  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2 mt-32">
      <div className="relative flex items-center justify-between w-full">
        <div className="relative flex flex-col w-fit">
          {/* Base navigation */}
          <ul className="relative flex gap-2 text-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-sm py-1 px-3 block" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Overlay with clip-path */}
          <div
            aria-hidden
            className="absolute top-0 left-0 w-full overflow-hidden transition-all duration-300 ease-out"
            ref={containerRef}
            style={{
              clipPath: "inset(0 75% 0 0% round 17px)",
            }}
          >
            <ul className="flex gap-2 bg-custom-accent text-background rounded-full">
              {navItems.map((item) => (
                <li key={`overlay-${item.href}`}>
                  <Link
                    className="text-sm py-1 px-3 block"
                    href={item.href}
                    ref={pathname === item.href ? activeTabElementRef : null}
                    tabIndex={-1}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-end gap-1">
            <span className="text-xs">SF</span>
            <Clock />
          </div>
        </div>
      </div>
    </div>
  );
}
