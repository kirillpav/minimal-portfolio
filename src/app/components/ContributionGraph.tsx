"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionGraphProps {
  username: string;
}

export default function ContributionGraph({
  username,
}: ContributionGraphProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Fetch contribution data from GitHub
        const response = await fetch(
          `/api/github-contributions?username=${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setContributions(data.contributions);
          setTotalContributions(data.total);
        }
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const getLevelColor = (level: number) => {
    // Using site's custom orange #FB9B2A
    const colors = {
      0: "bg-zinc-100 dark:bg-zinc-800",
      1: "bg-[#fdd5ab] dark:bg-[#fb9b2a]/30",
      2: "bg-[#fbb96f] dark:bg-[#fb9b2a]/60",
      3: "bg-[#fb9b2a] dark:bg-[#fb9b2a]/80",
      4: "bg-[#e88a1a] dark:bg-[#fb9b2a]",
    };
    return colors[level as keyof typeof colors] || colors[0];
  };

  const getWeeksArray = () => {
    if (contributions.length === 0) return [];

    const weeks: ContributionDay[][] = [];
    const firstDate = new Date(contributions[0].date);
    const firstDayOfWeek = firstDate.getDay(); // 0 = Sunday, 6 = Saturday

    // Start with empty days to align to Sunday
    let currentWeek: ContributionDay[] = [];

    contributions.forEach((day) => {
      const date = new Date(day.date);
      const dayOfWeek = date.getDay();

      // Start a new week on Sunday
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push(day);
    });

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const getMonthLabels = () => {
    const months: { label: string; weekIndex: number }[] = [];
    const weeks = getWeeksArray();
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      if (week.length > 0) {
        const firstDay = new Date(week[0].date);
        const month = firstDay.getMonth();

        if (month !== lastMonth) {
          months.push({
            label: firstDay.toLocaleDateString("en-US", { month: "short" }),
            weekIndex: weekIndex,
          });
          lastMonth = month;
        }
      }
    });

    return months;
  };

  if (loading) {
    return (
      <div className="w-full">
        <h3 className="text-lg font-medium mb-4">Contribution Graph</h3>
        <div className="flex items-center justify-center h-32 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
          <span className="text-sm text-zinc-500">
            Loading contributions...
          </span>
        </div>
      </div>
    );
  }

  const weeks = getWeeksArray();
  const monthLabels = getMonthLabels();

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-4">GitHub Contributions</h3>
      <div className="overflow-x-auto pb-2">
        <div className="inline-block">
          {/* Month labels */}
          <div className="relative mb-2" style={{ height: "20px" }}>
            {monthLabels.map((month, index) => (
              <span
                key={index}
                className="absolute text-xs text-zinc-600 dark:text-zinc-400"
                style={{
                  left: `${month.weekIndex * 14}px`,
                }}
              >
                {month.label}
              </span>
            ))}
          </div>

          {/* Graph grid */}
          <div className="flex">
            {/* Contribution squares */}
            <div className="flex gap-[3px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-[11px] h-[11px] rounded-sm ${getLevelColor(
                        day.level
                      )} transition-colors cursor-pointer hover:ring-2 hover:ring-[#fb9b2a]`}
                      title={`${day.count} contributions on ${new Date(
                        day.date
                      ).toLocaleDateString()}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span>{totalContributions} contributions in the last year</span>
            <div className="flex items-center gap-2">
              <span className="text-xs">Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-[11px] h-[11px] rounded-sm ${getLevelColor(
                      level
                    )}`}
                  />
                ))}
              </div>
              <span className="text-xs">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
