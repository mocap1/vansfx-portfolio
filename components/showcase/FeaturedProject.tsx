"use client";

import { projects } from "@/data/projects";
import { Play, Sparkles, Eye, Clock3 } from "lucide-react";

export default function FeaturedProject() {
  const featured = projects.find((p) => p.id === 1);

  if (!featured) return null;

  return (
    <section
      id="featured"
      className="group relative mb-32 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-violet-500/40"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="grid lg:grid-cols-2">
        {/* Video */}
        <div className="relative overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${featured.youtubeId}`}
            className="aspect-video h-full w-full transition duration-500 group-hover:scale-[1.02]"
            allowFullScreen
          />

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-violet-500/30 bg-black/60 px-4 py-2 backdrop-blur">
            <Sparkles size={15} className="text-violet-400" />
            <span className="text-sm font-medium text-white">
              Featured Project
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center p-10 lg:p-14">
          <p className="text-xs uppercase tracking-[0.4em] text-violet-400">
            Showcase
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-white lg:text-5xl">
            {featured.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            One of my highest-quality long-form edits, combining pacing,
            storytelling, motion graphics, sound design, and retention-focused
            editing to keep viewers engaged from start to finish.
          </p>

          {/* Quick Info */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white">
              {featured.category}
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
              {featured.software}
            </span>

            <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
              <Clock3 size={15} />
              Long Form
            </span>
          </div>

          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-violet-500 hover:text-white"
          >
            <Play size={18} />
            Watch Project
          </a>
        </div>
      </div>
    </section>
  );
}