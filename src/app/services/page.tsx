import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/animations/FadeIn";
import StaggerReveal from "@/components/animations/StaggerReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CebanBarber's full menu — haircuts, beard trims, hot towel shaves, fades, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 border-b border-charcoal-600">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            What We Offer
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-offwhite mb-5">
            Our Services
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Every service is delivered with precision, premium products, and a
            commitment to making you look your absolute best.
          </p>
        </FadeIn>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerReveal
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            stagger={0.07}
            y={50}
            scale={0.97}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Info banner */}
      <section className="py-16 bg-charcoal-950 border-t border-charcoal-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerReveal className="grid sm:grid-cols-3 gap-8 text-center" stagger={0.12} y={30}>
            {[
              {
                title: "Walk-Ins Welcome",
                desc: "No appointment needed — but calling ahead guarantees your preferred time slot.",
              },
              {
                title: "Group Bookings",
                desc: "Coming in with the crew? We accommodate groups of up to 6. Call to arrange.",
              },
              {
                title: "Gift Cards",
                desc: "Give the gift of a great cut. Gift cards available in-store and by phone.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-8 h-px bg-gold-500 mb-4" />
                <h3 className="text-offwhite font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <FadeIn className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-offwhite mb-4">Ready to Book?</h2>
          <p className="text-muted mb-8">
            Visit us at our location or give us a call to set up your appointment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-950 font-bold tracking-widest uppercase text-sm rounded hover:bg-gold-400 transition-all duration-200"
          >
            Book Now <ArrowRight size={16} />
          </Link>
        </div>
      </FadeIn>
    </>
  );
}
