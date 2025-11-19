"use client";

import { useState } from "react";
import { Book } from "@/lib/books-client";
import { formatReadingTime, getReadingProgress } from "@/lib/books-client";

interface BookItemProps {
  book: Book;
}

export default function BookItem({ book }: BookItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = getReadingProgress(book);
  const readingTime = formatReadingTime(book.total_read_time);

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left flex items-center justify-between py-2 hover:opacity-70 transition-opacity"
      >
        <div className="flex-1">
          <span className="text-base">
            {book.title}{" "}
            <span className="text-gray-500 dark:text-gray-400">
              by {book.authors !== "N/A" ? book.authors : "Unknown Author"}
            </span>
          </span>
        </div>
        <div
          className={`ml-4 flex-shrink-0 w-5 h-5 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600 dark:text-gray-400"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-2 pl-0 flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{progress}% complete</span>
          <span>•</span>
          <span>
            {book.total_read_pages} / {book.pages} pages
          </span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </div>
  );
}

