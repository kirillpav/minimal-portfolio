import CurrentTechnologies from "../components/currentTechnologies";

export default function About() {
  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
      <h1 className="text-foreground text-2xl md:text-3xl font-light mb-6">
        <span className="font-medium">about me</span>
      </h1>
      <div className="space-y-4 text-foreground">
        <p>i got my first taste of web development in a bootcamp in kyiv</p>
        <p>
          from there, i moved to san francisco to study computer science at
          sfsu.
        </p>
        <p>
          at sfsu i worked as a web developer for the university where i got a
          first taste of development in a professional setting.
        </p>
        <p>currently i'm an intern at Creatio</p>
      </div>

      <CurrentTechnologies />
    </div>
  );
}
