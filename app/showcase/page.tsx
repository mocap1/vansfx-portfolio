import Navbar from "@/components/layout/Navbar";
import ShowcaseNav from "@/components/showcase/ShowcaseNav";
import ShowcaseGrid from "@/components/showcase/ShowcaseGrid";
import FeaturedProject from "@/components/showcase/FeaturedProject";
import ProjectStats from "@/components/showcase/ProjectStats";
import { projects } from "@/data/projects";

export default function ShowcasePage() {
  return (
    <>
      <Navbar />
      <ShowcaseNav />

      <main className="relative px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.45em] text-violet-500">
              PORTFOLIO
            </p>

            <h1 className="mt-5 text-5xl font-black text-white md:text-7xl">
              Selected Work
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Explore a collection of long-form videos, YouTube Shorts,
              commercial edits and cinematic projects crafted for creators and
              brands.
            </p>
          </div>

          <ProjectStats />

          <FeaturedProject />

          <ShowcaseGrid projects={projects} />
        </div>
      </main>
    </>
  );
}