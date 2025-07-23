export default function Socials() {
  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2 mt-8">
      <div className="flex flex-row items-center justify-between gap-2">
        <a
          href="https://www.linkedin.com/in/kirillpavlov2020/"
          className="text-sm text-foreground hover:text-primary transform duration-200 border-b-2 border-b-primary"
        >
          linkedin
        </a>
        <a
          href="https://github.com/kirillpav"
          className="text-sm text-foreground hover:text-primary transform duration-200 border-b-2 border-b-primary"
        >
          github
        </a>
        <a
          href="mailto:2020kirillp@gmail.com"
          className="text-sm text-foreground hover:text-primary transform duration-200 border-b-2 border-b-primary"
        >
          email
        </a>
      </div>
    </div>
  );
}
