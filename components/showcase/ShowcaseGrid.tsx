"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type ShowcaseGridProps = {
  projects: Project[];
};

function Heading({
  id,
  label,
  title,
  description,
}: {
  id: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div id={id} className="scroll-mt-32 border-b border-white/10 pb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-violet-400">
        {label}
      </p>
      <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function Section({
  id,
  title,
  description,
  projects,
  portrait = false,
}: {
  id: string;
  title: string;
  description: string;
  projects: Project[];
  portrait?: boolean;
}) {
  if (!projects.length) return null;

  return (
    <section id={id} className="scroll-mt-32 space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base">
          {description}
        </p>
      </div>

      <div
        className={
          portrait
            ? "grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"
            : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function ShowcaseGrid({ projects }: ShowcaseGridProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.software.toLowerCase().includes(q)
    );
  }, [projects, search]);

  const filter = (type: "long" | "short", category: string) =>
    filtered.filter((p) => p.type === type && p.category === category);

  return (
    <div className="space-y-32">
      <div className="sticky top-24 z-20 mb-10 flex justify-end">
        <input
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         placeholder="🔍 Search projects..."
         className="w-full max-w-xs rounded-full border border-white/10 bg-zinc-900/80 px-5 py-3 text-sm text-white outline-none backdrop-blur transition-all duration-300 focus:border-violet-500 focus:max-w-sm"
  />
</div>

      <div className="space-y-20">
        <Heading
          id="longform"
          label="Long-form"
          title="Long-form Videos"
          description="Longer projects featuring gaming content, educational videos, storytelling and montage editing."
        />

        <Section
          id="guides"
          title="Gaming Guides"
          description="Gaming tutorials and creator-focused videos."
          projects={filter("long", "Gaming Guide")}
        />

        <Section
          id="montages"
          title="Gaming Montages"
          description="Music-synced gameplay edits."
          projects={filter("long", "Gaming Montage")}
        />

        <Section
          id="education"
          title="Educational Content"
          description="Educational long-form content."
          projects={filter("long", "Educational Content")}
        />

        <Section
  id="trailers"
  title="Trailers & Showcases"
  description="Product trailers, showcases and promotional videos."
  projects={filter("long", "Trailer / Showcase")}
/>
      </div>

      <div className="space-y-20">
        <Heading
          id="shortform"
          label="Short-form"
          title="Short-form Videos"
          description="Content created for Shorts, TikTok and Reels."
        />

        <Section
          id="gamingshorts"
          title="Gaming Shorts"
          description="Vertical gaming edits."
          portrait
          projects={filter("short", "Gaming Short")}
        />

        <Section
          id="ads"
          title="Advertisements"
          description="Promotional edits."
          portrait
          projects={filter("short", "Advertisement")}
        />

        <Section
          id="entertainment"
          title="Entertainment"
          description="Entertainment edits."
          portrait
          projects={filter("short", "Entertainment")}
        />

        <Section
          id="ai"
          title="Educational & AI"
          description="AI and educational shorts."
          portrait
          projects={filter("short", "AI Content")}
        />
      </div>
    </div>
  );
}