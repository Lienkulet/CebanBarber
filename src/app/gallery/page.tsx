import type { Metadata } from "next";
import { galleryImages } from "@/lib/data";
import GalleryGrid from "@/components/GalleryGrid";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse CebanBarber's gallery — precision fades, classic cuts, beard sculpts, and more.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 border-b border-charcoal-600">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-offwhite mb-5">
            The Gallery
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Every photo tells a story. Browse some of our finest work — from
            tight skin fades to classic gentleman cuts.
          </p>
        </FadeIn>
      </section>

      {/* Gallery — GalleryGrid is already a client component with its own GSAP */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Bottom note */}
      <FadeIn className="py-12 bg-charcoal-950 border-t border-charcoal-600 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-muted text-sm leading-relaxed">
            Follow us on Instagram{" "}
            <a
              href="#"
              className="text-gold-500 hover:text-gold-300 transition-colors duration-200"
            >
              @cebanbarber
            </a>{" "}
            for daily style inspiration and behind-the-chair content.
          </p>
        </div>
      </FadeIn>
    </>
  );
}
