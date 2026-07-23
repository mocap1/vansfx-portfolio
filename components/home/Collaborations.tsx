"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { creators } from "@/data/creators";

export default function Collaborations() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-violet-500">
            Featured Collaborations
          </p>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Worked with amazing creators.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Creators and brands I've had the opportunity to edit for.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-5">
          {creators.map((creator) => (
            <motion.a
              key={creator.id}
              href={creator.youtube}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group text-center"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-4xl font-black text-white">
              {creator.name.charAt(0)}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {creator.name}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {creator.subscribers}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/collaborations"
            className="rounded-full border border-violet-500 px-7 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:text-white"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}