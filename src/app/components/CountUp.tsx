"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  formatter?: (value: number) => string;
}

export default function CountUp({
  end,
  duration = 2000,
  className = "",
  suffix = "",
  prefix = "",
  formatter,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );

      // Easing function for smooth animation (easeOutExpo)
      const easedProgress =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentCount = Math.floor(easedProgress * end);
      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end at the exact value
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration]);

  const displayValue = formatter ? formatter(count) : count;

  return (
    <span className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
