import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">
          Vans<span className="text-violet-500">FX</span>
        </h2>

        <p className="mt-4 max-w-lg text-zinc-400">
          Professional Video Editor specializing in long-form content,
          YouTube Shorts, trailers and motion graphics.
        </p>

        <div className="mt-8 flex gap-8 text-sm text-zinc-400">
          <Link href="/showcase" className="hover:text-white">
            Showcase
          </Link>

          <Link href="/collaborations" className="hover:text-white">
            Collaborations
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        <p className="mt-10 text-xs text-zinc-600">
          © 2026 VansFX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}