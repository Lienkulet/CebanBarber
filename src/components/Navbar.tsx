"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { BOOKING_URL } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* Desktop CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-gold-500 text-gold-500 text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-200"
          >
            Book Now
          </a>

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
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-3 mx-4 text-center px-5 py-3 border border-gold-500 text-gold-500 text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-200"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
