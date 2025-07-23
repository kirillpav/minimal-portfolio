"use client";

import Image from "next/image";

const books = [
  {
    title: "The Road",
    author: "Cormac McCarthy",
    image: "/books/theroad.jpg",
  },
  {
    title: "Omon Ra",
    author: "Victor Pelevin",
    image: "/books/omonra.jpg",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    image: "/books/norwegianwood.jpg",
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    image: "/books/neuromancer.jpg",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    image: "/books/meditations.jpg",
  },
  {
    title: "Flowers for Algernon",
    author: "Daniel Keyes",
    image: "/books/flowersforalgernon.jpg",
  },
];

export default function BooksGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {books.map((book, index) => (
          <div key={book.title} className="group">
            <div className="aspect-[2/3] relative mb-4 overflow-hidden">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <p className="text-foreground text-sm leading-relaxed">
                {book.title.toLowerCase()} by {book.author.toLowerCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
