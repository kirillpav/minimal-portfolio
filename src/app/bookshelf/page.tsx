import React from "react";
import BooksGrid from "../components/BooksGrid";
import { Book } from "lucide-react";

export default function ReadingList() {
  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
      <h1 className="text-foreground text-2xl md:text-3xl font-light mb-6">
        <span className="font-medium">bookshelf</span>
      </h1>
      <p className="text-foreground">
        these are some of my favorite books. this is a collection of sci-fi,
        fiction and non-fiction books that I&apos;ve read <br />
      </p>
      <BooksGrid />
    </div>
  );
}
