"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Scissors, ChevronDown } from "lucide-react";
import { BOOKING_URL } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";
import { languageOptions } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, copy } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: copy.nav.services },
    { href: "/gallery", label: copy.nav.gallery },
    { href: "/contact", label: copy.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLangOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target?.closest("[data-lang-menu]")) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isLangOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-charcoal-950/95 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scissors
              className="text-gold-500 transition-transform duration-300 group-hover:rotate-12"
              size={22}
            />
            <span className="text-xl font-bold tracking-widest uppercase text-offwhite">
              Ceban<span className="text-gold-500">Barber</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-gold-500 after:transition-all after:duration-300 ${
                    pathname === link.href
                      ? "text-gold-500 after:w-full"
                      : "text-muted hover:text-offwhite after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative" data-lang-menu>
              <button
                type="button"
                onClick={() => setIsLangOpen((open) => !open)}
                className={`inline-flex items-center gap-2 rounded border px-4 py-2 text-sm font-semibold tracking-[0.28em] uppercase transition-all duration-200 ${
                  isLangOpen
                    ? "border-gold-500 bg-charcoal-800 text-offwhite shadow-lg shadow-black/30"
                    : "border-charcoal-600 bg-charcoal-900/70 text-muted hover:border-gold-500/60 hover:text-offwhite"
                }`}
                aria-haspopup="menu"
                aria-expanded={isLangOpen}
                aria-label="Select language"
              >
                <span className="text-gold-500">{language}</span>
                <ChevronDown
                  size={15}
                  className={`text-gold-500 transition-transform duration-200 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 top-full mt-3 min-w-[8.5rem] overflow-hidden rounded border border-charcoal-600 bg-charcoal-950/98 p-2 backdrop-blur-md transition-all duration-200 ${
                  isLangOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="mb-2 border-b border-charcoal-600 px-2 pb-2 text-[0.65rem] font-semibold tracking-[0.32em] uppercase text-gold-500">
                  {copy.nav.language}
                </div>
                {languageOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setLanguage(option);
                      setIsLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded px-3 py-2 text-sm font-semibold tracking-[0.24em] uppercase transition-colors duration-200 ${
                      language === option
                        ? "bg-charcoal-800 text-offwhite"
                        : "text-muted hover:bg-charcoal-800 hover:text-offwhite"
                    }`}
                  >
                    <span>{option}</span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        language === option
                          ? "bg-gold-500"
                          : "bg-charcoal-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 border border-gold-500 text-gold-500 text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-200"
            >
              {copy.nav.bookNow}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-offwhite hover:text-gold-500 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-charcoal-950/98 backdrop-blur-md px-4 pb-6 pt-2 flex flex-col gap-1 border-t border-charcoal-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm font-medium tracking-widest uppercase rounded transition-colors duration-200 ${
                pathname === link.href
                  ? "text-gold-500 bg-charcoal-800"
                  : "text-muted hover:text-offwhite hover:bg-charcoal-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mx-4 mt-4 rounded border border-charcoal-600 bg-charcoal-900/80 p-3">
            <p className="mb-3 text-[0.65rem] font-semibold tracking-[0.32em] uppercase text-gold-500">
              {copy.nav.language}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {languageOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={`rounded px-3 py-2 text-sm font-semibold tracking-[0.24em] uppercase transition-colors duration-200 ${
                    language === option
                      ? "bg-charcoal-800 text-offwhite"
                      : "border border-charcoal-600 text-muted hover:border-gold-500/60 hover:text-offwhite"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-3 mx-4 text-center px-5 py-3 border border-gold-500 text-gold-500 text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-200"
          >
            {copy.nav.bookNow}
          </a>
        </div>
      </div>
    </header>
  );
}
