"use client";

import { ArrowRight } from "lucide-react";
import { services, BOOKING_URL } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/animations/FadeIn";
import StaggerReveal from "@/components/animations/StaggerReveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicesPageContent() {
  const { copy } = useLanguage();

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 border-b border-charcoal-600">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            {copy.servicesPage.eyebrow}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-offwhite mb-5">
            {copy.servicesPage.title}
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {copy.servicesPage.intro}
          </p>
        </FadeIn>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <FadeIn
                key={service.id}
                className="h-full"
                y={50}
                delay={index * 0.08}
                duration={0.75}
              >
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal-950 border-t border-charcoal-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerReveal className="grid sm:grid-cols-3 gap-8 text-center" stagger={0.12} y={30}>
            {copy.servicesPage.infoBanner.map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-8 h-px bg-gold-500 mb-4" />
                <h3 className="text-offwhite font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <FadeIn className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-offwhite mb-4">
            {copy.common.readyToBook}
          </h2>
          <p className="text-muted mb-8">{copy.servicesPage.ctaBody}</p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-950 font-bold tracking-widest uppercase text-sm rounded hover:bg-gold-400 transition-all duration-200"
          >
            {copy.common.bookNow} <ArrowRight size={16} />
          </a>
        </div>
      </FadeIn>
    </>
  );
}
