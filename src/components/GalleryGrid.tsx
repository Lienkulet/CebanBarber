"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { GalleryImage } from "@/lib/data";

interface GalleryGridProps {
  images: GalleryImage[];
}

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQQCAgMBAAAAAAAAAAAAAQIDBBEhMQUSQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ai7FkNQ2e3BVfmZkn4gFrStfPRB8x27AAB+YqS2rXF5s22OOqvxM6jaXlX7QAAAAASUVORK5CYII=";

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  // Split into 3 columns for masonry effect
  const cols = [0, 1, 2].map((colIdx) =>
    images.filter((_, i) => i % 3 === colIdx)
  );

  return (
    <>
      {/* Masonry grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {cols.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-3 md:gap-4">
            {col.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelected(image)}
                className="group relative w-full overflow-hidden rounded-lg border border-charcoal-600/70 bg-charcoal-800 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
                aria-label={`View: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
                <div className="pointer-events-none absolute inset-0 border border-offwhite/0 transition-colors duration-300 group-hover:border-offwhite/15" />
                <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute left-0 top-0 h-1 w-10 bg-gold-500" />
                  <span className="absolute left-0 top-0 h-10 w-1 bg-gold-500" />
                </div>
                <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute bottom-0 right-0 h-1 w-10 bg-gold-500" />
                  <span className="absolute bottom-0 right-0 h-10 w-1 bg-gold-500" />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                  <p className="text-offwhite text-xs font-semibold tracking-[0.28em] uppercase">
                    {image.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 p-2 text-muted hover:text-offwhite transition-colors duration-200"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-3xl w-full max-h-[85vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              className="object-contain w-full h-full max-h-[85vh]"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent px-4 py-3">
              <p className="text-offwhite text-sm">{selected.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
