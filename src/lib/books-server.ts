import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export type { Book, ReadingStats } from "./books-client";
export { formatReadingTime, getReadingProgress } from "./books-client";
import type { Book, ReadingStats } from "./books-client";

async function openDB() {
  const dbPath = path.join(process.cwd(), "src", "data", "statistics.sqlite3");

  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}

export async function getAllBooks(): Promise<Book[]> {
  const db = await openDB();

  const books = await db.all<Book[]>(
    `SELECT * FROM Book
    WHERE total_read_pages > 50
    ORDER BY last_open DESC
    LIMIT 5
    OFFSET 1
    `,
  );

  await db.close();

  return books;
}

export async function getCurrentBook(): Promise<Book | null> {
  const db = await openDB();

  const book = await db.get<Book>(
    `SELECT * FROM Book
    WHERE total_read_pages > 50
    ORDER BY last_open DESC
    LIMIT 1
    `,
  );

  await db.close();

  return book || null;
}

export async function getReadingStats(): Promise<ReadingStats> {
  const db = await openDB();

  const readingStats = await db.get<{
    totalBooks: number;
    totalPages: number;
    totalTime: number;
  }>(
    `SELECT
      COUNT(*) AS totalBooks,
      COALESCE(SUM(total_read_pages), 0) as totalPages,
      COALESCE(SUM(total_read_time), 0) as totalTime
      FROM book
    `,
  );

  await db.close();

  if (!readingStats) {
    return {
      totalBooks: 0,
      totalPages: 0,
      totalTime: 0,
      totalTimeFormatted: "0h",
    };
  }

  const hours = Math.floor(readingStats.totalTime / 3600);
  const minutes = Math.floor((readingStats.totalTime % 3600) / 60);

  return {
    totalBooks: readingStats.totalBooks,
    totalPages: readingStats.totalPages,
    totalTime: readingStats.totalTime,
    totalTimeFormatted: minutes > 0 ? `${hours}h ${minutes}m` : `${hours}`,
  };
}
