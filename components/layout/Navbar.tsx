import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "Showcase", href: "/showcase" },
  { name: "Store", href: "/store" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-6">
      <nav className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 backdrop-blur-xl">
        <Link href="/" className="text-2xl font-bold">
          Vans<span className="text-violet-500">FX</span>
        </Link>

        <ul className="flex items-center gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-zinc-300 transition duration-300 hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}