"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function NavigationBar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
  });

  const [initialized, setInitialized] = useState<Boolean>(false);

  const navItems = [
    { href: "/", label: "home" },
    { href: "/bookshelf", label: "bookshelf" },
    { href: "/projects", label: "projects" },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href="${pathname}"]`,
    ) as HTMLElement;

    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      // check where to align the underline
      setUnderlineStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
      });

      if (!initialized) {
        setInitialized(true);
      }
    }
  }, [pathname, initialized]);

  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2 mt-32">
      <div
        ref={navRef}
        className="relative flex flex-row, items-center, justify-between, gap-2"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            className="text-sm text-foreground hover:text-custom-accent transition-colors duration-500 py-1"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
        {/* underline */}
        <div
          className={`absolute bottom-0 h-0.5 bg-custom-accent transition-all duration-300 ease-out ${initialized ? "transition-all duration-300" : ""} `}
          style={{
            width: `${underlineStyle.width}px`,
            left: `${underlineStyle.left}px`,
          }}
        ></div>
      </div>
    </div>
  );
}
