"use client";

import Link from "next/link";
import { Scissors, Phone, MapPin } from "lucide-react";
import { businessInfo, SOCIAL_LINKS } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { copy } = useLanguage();

  const footerLinks = [
    { href: "/", label: copy.footer.home },
    { href: "/services", label: copy.footer.services },
    { href: "/gallery", label: copy.footer.gallery },
    { href: "/contact", label: copy.footer.contact },
  ];

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Scissors className="text-gold-500" size={20} />
              <span className="text-lg font-bold tracking-widest uppercase text-offwhite">
                Ceban<span className="text-gold-500">Barber</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {copy.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded border border-charcoal-600 text-muted hover:border-gold-500 hover:text-gold-500 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded border border-charcoal-600 text-muted hover:border-gold-500 hover:text-gold-500 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-5">
              {copy.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-offwhite text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-5">
              {copy.footer.findUs}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-muted text-sm">{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-500 shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-muted hover:text-offwhite text-sm transition-colors duration-200"
                >
                  {businessInfo.phone}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3">
                {copy.common.hours}
              </h4>
              <ul className="space-y-1">
                {businessInfo.hours.slice(0, 3).map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-sm">
                    <span className="text-muted">
                      {copy.weekdays[h.day as keyof typeof copy.weekdays]}
                    </span>
                    <span className="text-offwhite">{h.hours}</span>
                  </li>
                ))}
                <li className="text-muted text-sm italic pt-1">
                  {copy.common.andMoreContact}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-charcoal-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} CebanBarber. {copy.common.allRightsReserved}
          </p>
          <p>{copy.common.craftedWithCare}</p>
        </div>
      </div>
    </footer>
  );
}
