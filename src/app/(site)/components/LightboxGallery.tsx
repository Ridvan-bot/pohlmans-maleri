"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export type GalleryImage = {
  src: string;
  w?: number;
  h?: number;
  alt?: string;
};

type LightboxGalleryProps = {
  images: GalleryImage[];
  gridClassName?: string;
};

export default function LightboxGallery({ images, gridClassName }: LightboxGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState<number>(0);

  const safeImages = useMemo(() => images.map((img, i) => ({
    ...img,
    alt: img.alt || `Bild ${i + 1}`,
    w: img.w || 1600,
    h: img.h || 1200,
  })), [images]);

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % safeImages.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, safeImages.length]);

  return (
    <>
      <div className={gridClassName || "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
        {safeImages.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            onClick={() => { setIndex(i); setIsOpen(true); }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10 bg-[--muted] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-600] gallery-tile"
            aria-label={`Öppna ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-10 opacity-80 group-hover:opacity-100 transition duration-300"
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.currentTarget === e.target) setIsOpen(false);
          }}
        >
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image
              key={safeImages[index].src}
              src={safeImages[index].src}
              alt={safeImages[index].alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
              priority
            />

            <button
              type="button"
              aria-label="Stäng"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1 text-sm"
            >
              Stäng
            </button>

            {safeImages.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Föregående"
                  onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + safeImages.length) % safeImages.length); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white p-2"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Nästa"
                  onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % safeImages.length); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white p-2"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
