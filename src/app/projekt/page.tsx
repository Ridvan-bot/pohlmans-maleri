import Image from "next/image";
import LightboxGallery from "@/app/(site)/components/LightboxGallery";

export const metadata = {
  title: "Projekt",
  description: "Ett urval av projekt från Pohlmans Måleri.",
};

export default function ProjectsPage() {
  const images = [
    { src: "/hollviken.PNG", w: 800, h: 600, alt: "Fasadmålning" },
    { src: "/hollviken2.PNG", w: 800, h: 600, alt: "Invändig målning" },
    { src: "/hollviken3.PNG", w: 800, h: 600, alt: "Tapetsering" },
  ];
  return (
    <main className="container py-16">
      <h1 className="text-3xl sm:text-4xl font-bold">Projekt</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Här visar vi ett urval av våra arbeten. Kontakta oss för fler referenser.
      </p>
      <div className="mt-10">
        <LightboxGallery images={images} />
      </div>
    </main>
  );
}


