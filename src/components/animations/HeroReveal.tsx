"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

/**
 * Drop this component anywhere inside the hero section.
 * It targets [data-hero="*"] attributes in the DOM and runs a
 * cinematic entrance timeline — no extra wrappers needed.
 */
export default function HeroReveal() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Eyebrow line fades + lifts
    tl.from('[data-hero="eyebrow"]', {
      opacity: 0,
      y: 16,
      duration: 0.8,
    })
      // 2. Each headline line rises from behind its overflow-hidden clip
      .from(
        '[data-hero="line"]',
        {
          y: "115%",
          opacity: 0,
          duration: 1.1,
          stagger: 0.14,
          ease: "power4.out",
        },
        "-=0.5"
      )
      // 3. Tagline fades in
      .from(
        '[data-hero="desc"]',
        { opacity: 0, y: 22, duration: 0.8 },
        "-=0.55"
      )
      // 4. CTA buttons stagger up
      .from(
        '[data-hero="cta"]',
        { opacity: 0, y: 18, duration: 0.6, stagger: 0.1 },
        "-=0.5"
      )
      // 5. Scroll indicator fades in last
      .from(
        '[data-hero="scroll"]',
        { opacity: 0, duration: 0.5 },
        "-=0.3"
      );
  });

  return null;
}
