import CurrentTechnologies from "../components/currentTechnologies";
import Timeline from "../components/Timeline";

export default function About() {
  return (
    <div className="flex flex-col items-start w-full md:mx-auto md:w-1/2">
      <h1 className="text-foreground text-2xl md:text-3xl font-light">
        <span className="font-medium">about me</span>
      </h1>

      <Timeline />

      <CurrentTechnologies />
    </div>
  );
}
