"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Hem" },
  { href: "/#tjanster", label: "Tjänster" },
  { href: "/#om-oss", label: "Om oss" },
  { href: "/projekt", label: "Projekt" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-md supports-[backdrop-filter]:bg-black/50" />
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl gradient-text">
          <span className="text-gradient">Pohlmans</span> <span className="text-gradient">Måleri</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "text-white" : "text-white/70 hover:text-white"}`}
              data-active={pathname === l.href}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Link href="/kontakt" className="btn-primary text-sm py-2 px-3">Offert</Link>
        </div>
      </div>
    </header>
  );
}


