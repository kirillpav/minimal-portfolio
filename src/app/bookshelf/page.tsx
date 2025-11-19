import {
  getAllBooks,
  getReadingStats,
  getCurrentBook,
} from "@/lib/books-server";
import { formatReadingTime, getReadingProgress } from "@/lib/books-client";
import BookItem from "@/app/components/BookItem";
import ReadingStatsDisplay from "@/app/components/ReadingStatsDisplay";

export default async function BookshelfPage() {
  const [books, stats, currentBook] = await Promise.all([
    getAllBooks(),
    getReadingStats(),
    getCurrentBook(),
  ]);

  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
      <h1 className="text-foreground text-2xl md:text-3xl font-light mb-6">
        <span className="font-medium">reading stats</span>
      </h1>

      <ReadingStatsDisplay stats={stats} />

      {currentBook && (
        <div className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-800 w-full">
          <h2 className="text-sm text-gray-500 mb-3">currently reading</h2>
          <h3 className="text-xl font-semibold mb-1">{currentBook.title}</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {currentBook.authors !== "N/A"
              ? currentBook.authors
              : "Unknown Author"}
          </div>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>{getReadingProgress(currentBook)}% complete</span>
            <span>•</span>
            <span>
              {currentBook.total_read_pages} / {currentBook.pages} pages
            </span>
            <span>{formatReadingTime(currentBook.total_read_time)}</span>
          </div>
        </div>
      )}

      <h2 className="text-xl font-light mb-6 w-full">
        <span className="font-medium">all books</span>
      </h2>
      <div className="space-y-2 w-full">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
