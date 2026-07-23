import Link from "next/link";
import RotatingTitle from "./RotatingTitle";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-24">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <RotatingTitle />

        <h1 className="mt-8 text-5xl font-black leading-[0.9] text-white sm:text-6xl md:text-8xl">
          BRING YOUR
          <br />
          IDEAS TO <span className="text-violet-500">LIFE.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          Professional video editing that transforms raw footage into engaging
          content. Long-form videos, Shorts, trailers, motion graphics, and
          content designed to keep viewers watching.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/showcase"
            className="rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500"
          >
            View Showcase →
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-500"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-16 flex flex-col items-center text-zinc-500">
          <span className="animate-bounce text-2xl">↓</span>

          <p className="mt-2 text-xs uppercase tracking-[0.45em]">
            SCROLL TO EXPLORE
          </p>
        </div>
      </div>
    </section>
  );
}