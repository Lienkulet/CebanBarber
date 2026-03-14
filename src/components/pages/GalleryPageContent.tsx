"use client";

import { galleryImages, SOCIAL_LINKS } from "@/lib/data";
import GalleryGrid from "@/components/GalleryGrid";
import FadeIn from "@/components/animations/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";

export default function GalleryPageContent() {
  const { copy } = useLanguage();

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 border-b border-charcoal-600">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            {copy.galleryPage.eyebrow}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-offwhite mb-5">
            {copy.galleryPage.title}
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {copy.galleryPage.intro}
          </p>
        </FadeIn>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <FadeIn className="py-12 bg-charcoal-950 border-t border-charcoal-600 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-muted text-sm leading-relaxed">
            {copy.common.followUsOnInstagram}{" "}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-300 transition-colors duration-200"
            >
              @cebanbarber
            </a>{" "}
            {copy.galleryPage.bottomNote}
          </p>
        </div>
      </FadeIn>
    </>
  );
}
