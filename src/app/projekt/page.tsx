import Image from "next/image";

export const metadata = {
  title: "Projekt",
  description: "Ett urval av projekt från Pohlmans Måleri.",
};

export default function ProjectsPage() {
  const images = [
    { src: "/globe.svg", w: 800, h: 600, alt: "Fasadmålning" },
    { src: "/file.svg", w: 800, h: 600, alt: "Invändig målning" },
    { src: "/window.svg", w: 800, h: 600, alt: "Tapetsering" },
    { src: "/next.svg", w: 800, h: 600, alt: "Snickerimålning" },
  ];
  return (
    <main className="container py-16">
      <h1 className="text-3xl sm:text-4xl font-bold">Projekt</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Här visar vi ett urval av våra arbeten. Kontakta oss för fler referenser.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <div key={img.alt} className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10 bg-[--muted]">
            <Image src={img.src} alt={img.alt} fill className="object-contain p-10 opacity-80" />
          </div>
        ))}
      </div>
    </main>
  );
}


