import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t mb-1 border-white/10 bg-black/80 text-white relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_0%,rgba(244,196,48,0.08),transparent)]" />
      <div className="container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
        <div>
          <div className="font-extrabold tracking-tight text-xl gradient-text">Pohlmans Måleri</div>
          <p className="mt-2 text-white/70 text-sm">
            Kvalitetsmåleri i Skåne. Invändigt och utvändigt – för hem och företag.
          </p>
        </div>
        <div>
          <div className="font-semibold">Kontakt</div>
          <ul className="mt-3 space-y-2 text-white/70 text-sm">
            <li>Tel: 073-512 99 18</li>
            <li>E-post: info@pohlmansmaleri.se</li>
            <li>Skåne</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Sidor</div>
          <ul className="mt-3 space-y-2 text-white/70 text-sm">
            <li><Link className="nav-link hover:text-white" href="/">Hem</Link></li>
            <li><Link className="nav-link hover:text-white" href="/projekt">Projekt</Link></li>
            <li><Link className="nav-link hover:text-white" href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Följ oss</div>
          <ul className="mt-3 space-y-2 text-white/70 text-sm">
            <li><a className="nav-link hover:text-white" href="https://www.instagram.com/pohlmans_maleri?igsh=MWd5c2NpdjJ5OTdwZw==">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-xs text-white/60 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Pohlmans Måleri</div>
          <a href="https://pohlmanprotean.se" target="_blank" rel="noopener noreferrer">Webb av Pohlman Protean AB</a>
        </div>
      </div>
    </footer>
  );
}


