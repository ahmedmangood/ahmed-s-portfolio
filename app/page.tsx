import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="p-5 bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
