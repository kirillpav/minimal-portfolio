import booksData from "../data/books.json";

export type { Book, ReadingStats } from "./books-client";
export { formatReadingTime, getReadingProgress } from "./books-client";
import type { Book, ReadingStats } from "./books-client";

export async function getAllBooks(): Promise<Book[]> {
  const books = booksData
    .filter((book) => book.total_read_pages > 50)
    .sort((a, b) => b.last_open - a.last_open)
    .slice(1, 6);

  return books;
}

export async function getCurrentBook(): Promise<Book | null> {
  const books = booksData
    .filter((book) => book.total_read_pages > 50)
    .sort((a, b) => b.last_open - a.last_open);

  return books.length > 0 ? books[0] : null;
}

export async function getReadingStats(): Promise<ReadingStats> {
  const totalBooks = booksData.length;
  const totalPages = booksData.reduce(
    (sum, book) => sum + book.total_read_pages,
    0
  );
  const totalTime = booksData.reduce(
    (sum, book) => sum + book.total_read_time,
    0
  );

  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);

  return {
    totalBooks,
    totalPages,
    totalTime,
    totalTimeFormatted: minutes > 0 ? `${hours}h ${minutes}m` : `${hours}`,
  };
}
