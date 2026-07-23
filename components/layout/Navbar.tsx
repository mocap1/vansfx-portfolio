"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "Showcase", href: "/showcase" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-6">
      <nav className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-zinc-900/70 px-8 shadow-2xl backdrop-blur-2xl">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Vans<span className="text-violet-500">FX</span>
        </Link>

        <ul className="flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-violet-500 transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}