import Clock from "./components/Clock";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
        <div className="flex flex-row justify-between w-full">
          <span className="font-medium text-3xl">kirill pavlov</span>
          <div className="flex flex-col items-end">
            <span className="text-xs">SF </span>
            <Clock />
          </div>
        </div>

        <p>
          I&apos;m an aspiring design engineer focusing on user experience and
          sophisticated animations
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
          this summer i interned at{" "}
          <a
            href="https://www.creatio.com/"
            className="text-orange-400 hover:text-orange-600 transform duration-200"
            target="_blank"
          >
            Creatio
          </a>
          , where i built a semantic search engine for their marketplace.
          <br />
          <br />I love{" "}
          <a
            className="hover:text-custom-accent transform duration-200"
            href="https://www.goodreads.com/user/show/159310567-kirill-pavlov"
          >
            reading
          </a>
          , making music and lifting
        </p>
        {/*<iframe
          allow="autoplay *; encrypted-media *;"
          height="150"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/pixelated-kisses/1838036375?i=1838036376"
        ></iframe>*/}
      </div>
    </>
  );
}
