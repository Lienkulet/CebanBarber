"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** px to translate from (vertical) */
  y?: number;
  /** px to translate from (horizontal) */
  x?: number;
  delay?: number;
  duration?: number;
  /** ScrollTrigger start e.g. "top 88%" */
  start?: string;
}

export default function FadeIn({
  children,
  className,
  y = 40,
  x = 0,
  delay = 0,
  duration = 0.85,
  start = "top 88%",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        y,
        x,
        delay,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
