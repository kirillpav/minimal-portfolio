"use client";
import { useState } from "react";

type TimelinePeriod = "start" | "2023" | "2024" | "now";

interface TimelineContent {
  start: string[];
  "2023": string[];
  "2024": string[];
  now: string[];
}

const timelineContent: TimelineContent = {
  start: [
    "i got my first taste of web development in a bootcamp in kyiv",
    "discovered my passion for creating digital experiences and solving problems through code",
  ],
  "2023": [
    "moved to san francisco to study computer science at sfsu",
    "started working as a web developer for the university",
  ],
  "2024": [
    "continued my studies while working as a web developer for the university",
    "during the summer i interned at b0arding, a travel startup",
  ],
  now: [
    "during the summer i interned at creatio, a software company",
    "this is my final year at uni",
  ],
};

export default function Timeline() {
  const [activePeriod, setActivePeriod] = useState<TimelinePeriod>("start");

  const periods: TimelinePeriod[] = ["start", "2023", "2024", "now"];

  return (
    <div className="w-full mt-8">
      {/* Timeline buttons */}
      <div className="flex flex-row gap-6 mb-6">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setActivePeriod(period)}
            className={`text-sm font-light transition-colors duration-200 ${
              activePeriod === period
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Timeline content */}
      <div className="space-y-4 text-foreground">
        {timelineContent[activePeriod].map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
}
