"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
  scale?: number;
}

/**
 * Wraps a grid/list and stagger-animates its direct children
 * as the container scrolls into view.
 */
export default function StaggerReveal({
  children,
  className,
  stagger = 0.08,
  y = 50,
  duration = 0.75,
  start = "top 88%",
  scale = 1,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = Array.from(ref.current.children);

      gsap.from(items, {
        opacity: 0,
        y,
        scale,
        duration,
        stagger,
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
