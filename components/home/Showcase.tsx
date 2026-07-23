import Link from "next/link";
import ProjectCard from "@/components/showcase/ProjectCard";
import { projects } from "@/data/projects";

export default function Showcase() {
  const longProjects = projects.filter(
    (p) => p.type === "long" && p.featured
  );

  const shortProjects = projects.filter(
    (p) => p.type === "short" && p.featured
  );

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-violet-500">
            Selected Work
          </p>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Editing that keeps people watching.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            A collection of long-form videos and short-form edits.
          </p>
        </div>

        <div className="mt-24">
          <h3 className="mb-8 text-2xl font-bold text-white">
            Featured Long-form
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {longProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-28">
          <h3 className="mb-8 text-2xl font-bold text-white">
            Featured Short-form
          </h3>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {shortProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/showcase"
            className="rounded-full border border-violet-500 px-7 py-3 transition hover:bg-violet-500"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}