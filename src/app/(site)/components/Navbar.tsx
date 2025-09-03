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
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl">
          <span className="text-[--brand-600]">Pohlmans</span> Måleri
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-white ${pathname === l.href ? "text-white" : "text-white/70"}`}
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


