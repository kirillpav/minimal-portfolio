import { NextResponse } from "next/server";
import { getAllBooks, getReadingStats } from "../../../lib/books-server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [books, stats] = await Promise.all([
      getAllBooks(),
      getReadingStats(),
    ]);
    console.log(books.length);
    console.log(stats.totalBooks);

    return NextResponse.json({
      books,
      stats,
    });
  } catch (error) {
    console.error("error parsing books: ", error);
    return NextResponse.json(
      { error: "failed to fetch books" },
      { status: 500 },
    );
  }
}
