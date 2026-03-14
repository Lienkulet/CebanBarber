"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  businessInfo,
  MAPS_EMBED_URL,
  MAPS_LINK,
  BOOKING_URL,
} from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import StaggerReveal from "@/components/animations/StaggerReveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPageContent() {
  const { copy } = useLanguage();

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 border-b border-charcoal-600">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            {copy.contactPage.eyebrow}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-offwhite mb-5">
            {copy.contactPage.title}
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {copy.contactPage.intro}
          </p>
        </FadeIn>
      </section>

      <FadeIn
        y={0}
        duration={1}
        className="relative w-full h-72 md:h-96 overflow-hidden border-b border-charcoal-600"
      >
        <iframe
          title="CebanBarber Location"
          src={MAPS_EMBED_URL}
          className="absolute inset-0 w-full h-full"
          style={{
            border: 0,
            filter:
              "invert(90%) hue-rotate(180deg) grayscale(20%) brightness(0.85) contrast(1.1) saturate(0.8)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_20px_#111111]" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-charcoal-900/90 backdrop-blur-sm border border-charcoal-600 rounded px-3 py-2">
          <MapPin size={14} className="text-gold-500 shrink-0" />
          <span className="text-offwhite text-xs font-semibold tracking-wide">
            {copy.contactPage.mapBadge}
          </span>
        </div>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 text-xs font-semibold tracking-widest uppercase bg-gold-500 text-charcoal-950 px-3 py-2 rounded hover:bg-gold-400 transition-colors duration-200"
        >
          {copy.common.openInMaps} →
        </a>
      </FadeIn>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <StaggerReveal className="space-y-10" stagger={0.12} y={35}>
              <div className="flex gap-4">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded bg-charcoal-800 border border-charcoal-600">
                  <MapPin size={18} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-offwhite font-semibold mb-1">
                    {copy.common.address}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {businessInfo.address}
                  </p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold tracking-widest uppercase text-gold-500 hover:text-gold-300 transition-colors duration-200"
                  >
                    {copy.common.getDirections} →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded bg-charcoal-800 border border-charcoal-600">
                  <Phone size={18} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-offwhite font-semibold mb-1">
                    {copy.common.phone}
                  </h3>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-muted hover:text-offwhite text-sm transition-colors duration-200"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded bg-charcoal-800 border border-charcoal-600">
                  <Mail size={18} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-offwhite font-semibold mb-1">
                    {copy.common.email}
                  </h3>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-muted hover:text-offwhite text-sm transition-colors duration-200"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded bg-charcoal-800 border border-charcoal-600">
                  <Clock size={18} className="text-gold-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-offwhite font-semibold mb-3">
                    {copy.common.hoursOfOperation}
                  </h3>
                  <ul className="space-y-2">
                    {businessInfo.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between text-sm border-b border-charcoal-600 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-muted">
                          {copy.weekdays[h.day as keyof typeof copy.weekdays]}
                        </span>
                        <span className="text-offwhite font-medium">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerReveal>

            <FadeIn x={40} y={0} className="flex flex-col gap-6">
              <div className="bg-charcoal-800 border border-charcoal-600 rounded-lg p-8">
                <div className="w-8 h-px bg-gold-500 mb-5" />
                <h3 className="text-offwhite font-bold text-2xl mb-3">
                  {copy.common.readyToBook}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {copy.contactPage.bookingBody}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-charcoal-950 font-bold tracking-widest uppercase text-sm rounded hover:bg-gold-400 transition-all duration-200"
                  >
                    <Phone size={15} /> {copy.common.bookNow}
                  </a>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-charcoal-600 text-muted font-semibold tracking-widest uppercase text-sm rounded hover:border-gold-500 hover:text-gold-500 transition-all duration-200"
                  >
                    <Mail size={15} /> {copy.common.sendEmail}
                  </a>
                </div>
              </div>

              <div className="relative w-full rounded-lg overflow-hidden bg-charcoal-800 border border-charcoal-600 h-56">
                <iframe
                  title="CebanBarber Mini Map"
                  src={MAPS_EMBED_URL}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) grayscale(20%) brightness(0.85) contrast(1.1) saturate(0.8)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-charcoal-600 rounded-lg shadow-[inset_0_0_30px_10px_#111111]" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
