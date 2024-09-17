import Approach from "@/components/Approach";
import { Clients } from "@/components/Clients";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
// import RecentProjects from "@/components/RecentProjects";
import dynamic from "next/dynamic";

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="p-5 bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
