"use client";

import { motion } from "framer-motion";
import type { Creator } from "@/data/creators";

type Props = {
  creator: Creator;
};

export default function CreatorCard({ creator }: Props) {
  return (
    <motion.a
      href={creator.youtube}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/60 hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)]"
    >
      {/* Banner */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={creator.banner}
          alt={`${creator.name} banner`}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
      </div>

      {/* Profile */}
      <div className="relative z-10 -mt-12 flex justify-center">
        <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-[#111111] bg-zinc-900 shadow-xl">
          <img
            src={creator.image}
            alt={creator.name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-7 pt-4 text-center">
        <h3 className="text-2xl font-extrabold tracking-tight text-white">
          {creator.name}
        </h3>

        <p className="mt-2 text-violet-400 font-medium">
          {creator.subscribers} Subscribers
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {creator.category}
        </p>

        <div className="mt-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:border-violet-600 group-hover:bg-violet-600">
            View Channel
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}