"use client";

import { creators } from "@/data/creators";
import CreatorCard from "./CreatorCard";

export default function Collaborations() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
          Collaborations
        </span>

        <h1 className="mt-6 text-5xl font-black tracking-tight text-white md:text-6xl">
          Trusted by Amazing Creators
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Every collaboration represents a creator who trusted me to transform
          their ideas into engaging, high-quality content through professional
          editing, motion design, and storytelling.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            creator={creator}
          />
        ))}
      </div>
    </section>
  );
}