"use client";

import { useScramble } from "use-scramble";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  scramble?: number;
  seed?: number;
}

export default function ScrambleText({
  text,
  className = "",
  speed = 0.6,
  scramble = 4,
  seed = 0,
}: ScrambleTextProps) {
  const { ref } = useScramble({
    text,
    speed,
    tick: 1,
    step: 1,
    scramble,
    seed,
    playOnMount: true,
  });

  return <span ref={ref} className={className}></span>;
}
