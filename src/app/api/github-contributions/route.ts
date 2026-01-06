import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    // GitHub GraphQL API query
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  contributionLevel
                }
              }
            }
          }
        }
      }
    `;

    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      console.warn("GITHUB_TOKEN not found, using mock data");
      return NextResponse.json(generateMockData());
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      console.warn("GitHub API error, using mock data");
      return NextResponse.json(generateMockData());
    }

    const data = await response.json();

    if (data.errors) {
      console.warn("GitHub API returned errors, using mock data");
      return NextResponse.json(generateMockData());
    }

    const contributionCalendar =
      data.data.user.contributionsCollection.contributionCalendar;
    const contributions = contributionCalendar.weeks.flatMap((week: any) =>
      week.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
        level: getContributionLevel(day.contributionCount),
      }))
    );

    return NextResponse.json({
      contributions,
      total: contributionCalendar.totalContributions,
    });
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(generateMockData());
  }
}

function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

function generateMockData() {
  const contributions: {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Start from 365 days ago
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);

  let totalContributions = 0;
  let currentDate = new Date(startDate);

  while (currentDate <= today) {
    // Random contribution with higher chance of some activity
    const count = Math.random() > 0.3 ? Math.floor(Math.random() * 15) : 0;
    totalContributions += count;

    contributions.push({
      date: currentDate.toISOString().split("T")[0],
      count,
      level: getContributionLevel(count),
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return {
    contributions,
    total: totalContributions,
  };
}
