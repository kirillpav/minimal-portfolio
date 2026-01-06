import Bookshelf from "@/app/components/Bookshelf";

export const metadata = {
  title: "Bookshelf",
  description: "Books I've read and loved",
};

export default function BookshelfPage() {
  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
      <h1 className="text-foreground text-3xl font-medium mb-6">bookshelf</h1>
      <Bookshelf />
    </div>
  );
}
