"use client";

import CountUp from "./CountUp";
import { ReadingStats } from "@/lib/books-client";

interface ReadingStatsDisplayProps {
  stats: ReadingStats;
}

export default function ReadingStatsDisplay({
  stats,
}: ReadingStatsDisplayProps) {
  // Parse the time to get hours and minutes
  const hours = Math.floor(stats.totalTime / 3600);
  const minutes = Math.floor((stats.totalTime % 3600) / 60);

  return (
    <div className="grid grid-cols-3 gap-6 mb-12 w-full">
      <div>
        <div className="text-sm text-gray-500 mb-2">total time</div>
        <div className="text-2xl font-mono">
          <CountUp end={hours} duration={2000} />h{" "}
          {minutes > 0 && (
            <>
              <CountUp end={minutes} duration={2000} />m
            </>
          )}
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-2">pages read</div>
        <div className="text-2xl font-mono">
          <CountUp
            end={stats.totalPages}
            duration={2000}
            formatter={(val) => val.toLocaleString()}
          />
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-2">books read</div>
        <div className="text-2xl font-mono">
          <CountUp end={stats.totalBooks} duration={2000} />
        </div>
      </div>
    </div>
  );
}
