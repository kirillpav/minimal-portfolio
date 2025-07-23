import Title from "./components/title";
import BooksGrid from "./components/BooksGrid";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
        <h1 className="text-foreground text-2xl md:text-3xl font-light mb-6">
          <span className="font-medium">kirill pavlov</span>
        </h1>
        <p>
          i'm a software engineer focusing on user experience and sophisticated
          design and a rising senior at{" "}
          <a
            href="https://www.sfsu.edu/ "
            className="text-purple-400 hover:text-purple-600 transform duration-200"
            target="_blank"
          >
            sfsu.
          </a>{" "}
          <br /> <br />i was born in Greece, grew up in{" "}
          <a
            href="https://war.ukraine.ua/donate/"
            className="text-blue-400 hover:text-yellow-400 transform duration-200"
            target="_blank"
          >
            Ukraine
          </a>{" "}
          and am now living in San Francisco.
          <br /> <br />
          at the moment i am interning at{" "}
          <a
            href="https://www.creatio.com/"
            className="text-orange-400 hover:text-orange-600 transform duration-200"
            target="_blank"
          >
            Creatio
          </a>
          , where i am building a semantic search engine for their marketplace.
          <br />
          <br />
          i'm passionate about reading, making music and swimming.
        </p>
      </div>
    </>
  );
}
