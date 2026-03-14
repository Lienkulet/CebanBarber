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
              {[
                { label: "Instagram", abbr: "IG", href: SOCIAL_LINKS.instagram },
                { label: "TikTok", abbr: "TT", href: SOCIAL_LINKS.tiktok },
              ].map(({ label, abbr, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded border border-charcoal-600 text-muted text-xs font-bold hover:border-gold-500 hover:text-gold-500 transition-all duration-200"
                >
                  {abbr}
                </a>
              ))}
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
