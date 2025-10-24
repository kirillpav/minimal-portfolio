export interface Book {
  id: number;
  title: string;
  authors: string;
  notes: number;
  last_open: number;
  highlights: number;
  pages: number;
  series: string;
  language: string;
  md5: string;
  total_read_time: number; // in seconds
  total_read_pages: number;
}

export interface ReadingStats {
  totalBooks: number;
  totalPages: number;
  totalTime: number; // in seconds
  totalTimeFormatted: string;
}

/**
 * Format reading time from seconds to human-readable format
 */
export function formatReadingTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0 && minutes === 0) {
    return "< 1m";
  }

  if (hours === 0) {
    return `${minutes}m`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
}

/**
 * Calculate reading progress percentage
 */
export function getReadingProgress(book: Book): number {
  if (book.pages === 0) return 0;
  return Math.round((book.total_read_pages / book.pages) * 100);
}
