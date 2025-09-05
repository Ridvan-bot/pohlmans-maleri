import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/80 text-white">
      <div className="container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-extrabold tracking-tight text-xl text-[--brand-600]">Pohlmans Måleri</div>
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
            <li><Link href="/">Hem</Link></li>
            <li><Link href="/projekt">Projekt</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Följ oss</div>
          <ul className="mt-3 space-y-2 text-white/70 text-sm">
            <li><a href="https://www.instagram.com/pohlmans_maleri?igsh=MWd5c2NpdjJ5OTdwZw==">Instagram</a></li>
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


