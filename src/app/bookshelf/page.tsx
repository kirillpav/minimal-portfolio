import {
  getAllBooks,
  getReadingStats,
  getCurrentBook,
} from "@/lib/books-server";
import { formatReadingTime, getReadingProgress } from "@/lib/books-client";

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

      <div className="grid grid-cols-3 gap-6 mb-12 w-full">
        <div>
          <div className="text-sm text-gray-500 mb-2">total time</div>
          <div className="text-2xl font-mono">{stats.totalTimeFormatted}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-2">pages read</div>
          <div className="text-2xl font-mono">
            {stats.totalPages.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-2">books read</div>
          <div className="text-2xl font-mono">{stats.totalBooks}</div>
        </div>
      </div>

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
      <div className="space-y-6 w-full">
        {books.map((book) => {
          const progress = getReadingProgress(book);
          const readingTime = formatReadingTime(book.total_read_time);

          return (
            <div
              key={book.id}
              className="border-b border-gray-200 dark:border-gray-800 pb-6"
            >
              <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {book.authors !== "N/A" ? book.authors : "Unknown Author"}
              </div>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>{progress}% complete</span>
                <span>•</span>
                <span>
                  {book.total_read_pages} / {book.pages} pages
                </span>
                <span>•</span>
                <span>{readingTime}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
