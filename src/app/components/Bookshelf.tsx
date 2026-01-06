"use client";

import { useState } from "react";
import Image from "next/image";
import { books, getBookCoverUrl, getYears, ShelfBook } from "@/data/bookshelf";

export default function Bookshelf() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const years = getYears();

  const getBooksByYear = (year: number) => {
    return books.filter((b) => b.year === year);
  };

  const handleImageError = (isbn: string | undefined) => {
    if (isbn) {
      setImageErrors((prev) => new Set(prev).add(isbn));
    }
  };

  const getDisplayCover = (book: ShelfBook) => {
    if (book.isbn && imageErrors.has(book.isbn)) {
      return null;
    }
    return getBookCoverUrl(book, "M");
  };

  return (
    <div className="bookshelf w-full">
      {/* Book count */}
      <div className="mb-8 text-sm text-muted-foreground">
        {books.length} books
      </div>

      {/* Books by year */}
      <div className="space-y-10">
        {years.map((year) => {
          const yearBooks = getBooksByYear(year);
          if (yearBooks.length === 0) return null;

          return (
            <section key={year}>
              <h2 className="text-xl font-semibold text-custom-accent mb-4">
                {year}
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                {yearBooks.map((book, index) => (
                  <BookCard
                    key={`${book.isbn || book.title}-${index}`}
                    book={book}
                    coverUrl={getDisplayCover(book)}
                    onImageError={() => handleImageError(book.isbn)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

interface BookCardProps {
  book: ShelfBook;
  coverUrl: string | null;
  onImageError: () => void;
}

function BookCard({ book, coverUrl, onImageError }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book cover */}
      <div className="relative aspect-[2/3] bg-secondary overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={book.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 16vw"
            onError={onImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-2 bg-secondary">
            <span className="text-[10px] text-center text-muted-foreground leading-tight">
              {book.title}
            </span>
          </div>
        )}
      </div>

      {/* Hover tooltip */}
      {isHovered && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-40 p-2 bg-card border border-border shadow-lg rounded pointer-events-none">
          <p className="text-xs font-medium text-foreground leading-tight mb-0.5">
            {book.title}
          </p>
          <p className="text-[10px] text-muted-foreground">{book.author}</p>
        </div>
      )}
    </div>
  );
}
