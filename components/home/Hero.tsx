import BackgroundScene from "@/components/background/BackgroundScene";
import RotatingTitle from "./RotatingTitle";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <BackgroundScene />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 flex justify-center">
          <RotatingTitle />
        </div>

        <h1 className="text-6xl font-black leading-none md:text-8xl">
          BRING YOUR
          <br />
          IDEAS TO <span className="text-violet-500">LIFE.</span>
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-400">
          Helping creators produce videos people actually want to watch.
        </p>

        <button className="mt-10 rounded-full border border-violet-500 px-8 py-4 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:text-white">
          View My Work →
        </button>

        <div className="mt-24 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-lg">↓</span>
          <p className="text-xs uppercase tracking-[0.5em]">
            SCROLL
          </p>
        </div>
      </div>
    </section>
  );
}