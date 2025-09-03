import Image from "next/image";
import Link from "next/link";

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`container py-20 sm:py-28 scroll-mt-24 ${className || ""}`}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(212,160,23,.15),transparent)]" />
        <Section className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Pohlmans Måleri
            </h1>
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
              Vi hjälper privatpersoner och företag med invändig och utvändig målning,
              tapetsering och renovering. Kvalitet, noggrannhet och service i varje penseldrag.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary">Få offert</Link>
              <a href="#projekt" className="btn-outline">Se projekt</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
              <div>ROT-avdrag</div>
              <div>Kostnadsfri offert</div>
              <div>Trygghetsgaranti</div>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[--muted]">
            <Image src="/pohlmansmaleriloga.png" alt="Måleri" fill className="object-contain p-10 opacity-80" />
          </div>
        </Section>
      </div>

      {/* Tjänster */}
      <Section id="tjanster">
        <h2 className="text-3xl sm:text-4xl font-bold">Tjänster</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Vi utför allt från mindre servicejobb till större renoveringar och nyproduktion.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Invändig målning", desc: "Tak, väggar, snickerier och kök." },
            { title: "Utvändig målning", desc: "Fasader, fönster och altaner." },
            { title: "Tapetsering", desc: "Noggrann montering av alla typer av tapeter." },
            { title: "Spackling & slipning", desc: "Släta väggar och perfekta ytor." },
            { title: "Fönsterrenovering", desc: "Upprustning och målning av fönster." },
            { title: "Trapphus & lokaler", desc: "Professionellt utförande för BRF och företag." },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/10 bg-[--muted] p-6 hover:border-white/20 transition"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Om oss */}
      <Section id="om-oss" className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[--muted]">
          <Image src="/paint-roller.svg" alt="Om oss" fill className="object-contain p-10 opacity-80" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Om oss</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Vi är ett engagerat målarteam med lång erfarenhet av måleri och renovering
            i Skåne. Vi kombinerar traditionellt hantverk med moderna metoder
            för ett hållbart resultat.
          </p>
          <ul className="mt-6 grid gap-3 text-white/75">
            <li>• Auktoriserade målare</li>
            <li>• Tydlig kommunikation och tidsplan</li>
            <li>• Miljövänliga produkter</li>
          </ul>
        </div>
      </Section>

      {/* Projekt */}
      <Section id="projekt">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Utvalda projekt</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Ett urval av slutförda uppdrag. Fler bilder finns i vårt galleri.
            </p>
          </div>
          <Link href="/projekt" className="btn-outline whitespace-nowrap">Se alla</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["/hollviken.PNG", "/hollviken2.PNG", "/hollviken3.PNG"].map((src, i) => (
            <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10 bg-[--muted]">
              <Image src={src} alt={`Projekt ${i + 1}`} fill className="object-contain p-10 opacity-80 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[--muted] px-8 py-12">
          <h3 className="text-2xl sm:text-3xl font-bold">Redo att förnya ditt hem eller kontor?</h3>
          <p className="mt-3 text-white/70">
            Kontakta oss för en kostnadsfri offert och rådgivning.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href="/kontakt" className="btn-primary">Begär offert</Link>
            <a href="#tjanster" className="btn-outline">Våra tjänster</a>
          </div>
        </div>
      </Section>
    </div>
  );
}
