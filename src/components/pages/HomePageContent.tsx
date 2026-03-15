"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Scissors,
  Star,
  Clock,
  Shield,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  services,
  businessInfo,
  MAPS_EMBED_URL,
  MAPS_LINK,
  BOOKING_URL,
} from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import HeroReveal from "@/components/animations/HeroReveal";
import FadeIn from "@/components/animations/FadeIn";
import StaggerReveal from "@/components/animations/StaggerReveal";
import CountUp from "@/components/animations/CountUp";
import { useLanguage } from "@/components/LanguageProvider";

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQQCAgMBAAAAAAAAAAAAAQIDBBEhMQUSQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ai7FkNQ2e3BVfmZkn4gFrStfPRB8x27AAB+YqS2rXF5s22OOqvxM6jaXlX7QAAAAASUVORK5CYII=";

const featuredServices = services.filter((s) => s.featured);

const perkIcons = [Scissors, Star, Clock, Shield];

export default function HomePageContent() {
  const { copy } = useLanguage();

  const contactCards = [
    {
      icon: MapPin,
      label: copy.common.address,
      value: businessInfo.address,
      href: MAPS_LINK,
      external: true,
    },
    {
      icon: Phone,
      label: copy.common.phone,
      value: businessInfo.phone,
      href: `tel:${businessInfo.phone}`,
      external: false,
    },
    {
      icon: Mail,
      label: copy.common.email,
      value: businessInfo.email,
      href: `mailto:${businessInfo.email}`,
      external: false,
    },
    {
      icon: Clock,
      label: copy.common.today,
      value: copy.home.contactTodayValue,
      href: "/contact",
      external: false,
    },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80"
            alt={copy.home.mapsBadge}
            fill
            priority
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
          <div className="absolute inset-0 bg-linear-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-900" />
        </div>

        <HeroReveal />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
          <p
            data-hero="eyebrow"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-6"
          >
            <span className="w-8 h-px bg-gold-500" />
            {copy.home.eyebrow}
            <span className="w-8 h-px bg-gold-500" />
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-6">
            <span className="block overflow-hidden">
              <span data-hero="line" className="block text-offwhite">
                {copy.home.heroLine1}{" "}
                <span className="text-gold-500">{copy.home.heroLine1Accent}</span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero="line" className="block text-offwhite">
                {copy.home.heroLine2}{" "}
                <span className="text-gold-500">{copy.home.heroLine2Accent}</span>
              </span>
            </span>
          </h1>

          <p
            data-hero="desc"
            className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {copy.home.heroDescription}
          </p>

          <FadeIn
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            y={18}
            delay={0.45}
            duration={0.6}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-950 font-bold tracking-widest uppercase text-sm rounded hover:bg-gold-400 transition-all duration-200 hover:gap-3"
            >
              {copy.common.bookNow}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-offwhite/30 text-offwhite font-semibold tracking-widest uppercase text-sm rounded hover:border-offwhite/60 hover:bg-offwhite/5 transition-all duration-200"
            >
              {copy.common.ourServices}
            </Link>
          </FadeIn>
        </div>

        <div
          data-hero="scroll"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-muted text-xs tracking-widest uppercase">
            {copy.common.scroll}
          </span>
          <div className="w-px h-8 bg-linear-to-b from-gold-500 to-transparent" />
        </div>
      </section>

      <section className="bg-charcoal-950 border-y border-charcoal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <StaggerReveal
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            stagger={0.1}
            y={30}
          >
            {copy.home.perks.map(({ title, desc }, index) => {
              const Icon = perkIcons[index];

              return (
                <div key={title} className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded bg-charcoal-800 border border-charcoal-600">
                    <Icon size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-offwhite font-semibold text-sm">{title}</p>
                    <p className="text-muted text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn
              x={-50}
              y={0}
              className="relative rounded-lg overflow-hidden aspect-4/5 bg-charcoal-800"
            >
              <Image
                src="/gallery/photo3.jpg"
                alt={copy.home.aboutEyebrow}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
              <div className="absolute inset-0 bg-charcoal-950/20" />
              <div className="absolute bottom-6 left-6 bg-gold-500 text-charcoal-950 px-5 py-3 rounded">
                <CountUp
                  end={10000}
                  suffix="+"
                  className="text-2xl font-extrabold leading-none"
                />
                <p className="text-xs font-semibold tracking-wider uppercase">
                  {copy.home.happyClients}
                </p>
              </div>
            </FadeIn>

            <FadeIn x={50} y={0}>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
                {copy.home.aboutEyebrow}
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-offwhite leading-tight mb-6">
                {copy.home.aboutTitle}{" "}
                <span className="text-gold-500">{copy.home.aboutTitleAccent}</span>
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {copy.home.aboutBody1}
              </p>
              <p className="text-muted leading-relaxed mb-8">
                {copy.home.aboutBody2}
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-gold-500 font-semibold tracking-wide hover:gap-3 transition-all duration-200"
              >
                {copy.common.viewAllServices}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-3">
              {copy.home.featuredEyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-offwhite">
              {copy.home.featuredTitle}
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((service, index) => (
              <FadeIn
                key={service.id}
                className="h-full"
                y={50}
                delay={index * 0.12}
                duration={0.75}
              >
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10" delay={0.2}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold-500/50 text-gold-500 font-semibold tracking-widest uppercase text-sm rounded hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-200"
            >
              {copy.common.seeFullMenu}
              <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-3">
              {copy.home.findUsEyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-offwhite">
              {copy.home.findUsTitle}
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <FadeIn
              x={-40}
              y={0}
              className="relative rounded-lg overflow-hidden border border-charcoal-600 min-h-80"
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
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_16px_#111111]" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-charcoal-900/90 backdrop-blur-sm border border-charcoal-600 rounded px-3 py-2">
                <MapPin size={13} className="text-gold-500 shrink-0" />
                <span className="text-offwhite text-xs font-semibold tracking-wide">
                  {copy.home.mapsBadge}
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

            <FadeIn x={40} y={0} className="flex flex-col justify-between gap-6">
              <StaggerReveal className="grid sm:grid-cols-2 gap-5" stagger={0.08} y={30}>
                {contactCards.map(({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex gap-3 items-start bg-charcoal-800 border border-charcoal-600 rounded-lg p-4 hover:border-gold-500/50 transition-colors duration-200"
                  >
                    <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded bg-charcoal-700 border border-charcoal-600">
                      <Icon size={15} className="text-gold-500" />
                    </div>
                    <div>
                      <p className="text-muted text-xs tracking-widest uppercase mb-0.5">
                        {label}
                      </p>
                      <p className="text-offwhite text-sm font-medium group-hover:text-gold-500 transition-colors duration-200 leading-snug">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </StaggerReveal>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-charcoal-950 font-bold tracking-widest uppercase text-sm rounded hover:bg-gold-400 transition-all duration-200"
                >
                  {copy.common.fullContactInfo} <ArrowRight size={15} />
                </Link>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-charcoal-600 text-muted font-semibold tracking-widest uppercase text-sm rounded hover:border-gold-500 hover:text-gold-500 transition-all duration-200"
                >
                  <Phone size={15} /> {copy.common.callNow}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1920&q=80"
            alt={copy.home.featuredTitle}
            fill
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
          <div className="absolute inset-0 bg-charcoal-950/80" />
        </div>
        <FadeIn className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            {copy.home.ctaEyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-offwhite mb-6">
            {copy.home.ctaTitle}
          </h2>
          <p className="text-muted text-lg mb-10">{copy.home.ctaBody}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-950 font-bold tracking-widest uppercase text-sm rounded hover:bg-gold-400 transition-all duration-200"
            >
              {copy.common.bookNow} <ArrowRight size={16} />
            </a>
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-offwhite/30 text-offwhite font-semibold tracking-widest uppercase text-sm rounded hover:bg-offwhite/10 transition-all duration-200"
            >
              {businessInfo.phone}
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
