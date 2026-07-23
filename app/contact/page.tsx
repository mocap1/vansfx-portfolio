import Navbar from "@/components/layout/Navbar";
import { MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-32">
        <div className="text-center">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Contact
          </span>

          <h1 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Let's Work Together
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Interested in working together? Reach out through Discord and let's
            discuss your next project.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-xl rounded-3xl border border-white/10 bg-[#111111] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/60 hover:shadow-[0_20px_60px_rgba(139,92,246,0.20)]">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-600">
            <MessageCircle className="h-10 w-10 text-white" />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white">
            Discord
          </h2>

          <p className="mt-3 text-lg text-violet-400">
            mocap1
          </p>

          <p className="mx-auto mt-6 max-w-md text-zinc-500">
            The fastest way to contact me for commissions, collaborations,
            pricing, or any editing inquiries.
          </p>

          <a
            href="https://discord.com/users/412104402845958147"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-violet-500"
          >
            <MessageCircle className="h-5 w-5" />
            Add Me on Discord
          </a>
        </div>
      </main>
    </>
  );
}