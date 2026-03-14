"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CountUpProps {
  end: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function CountUp({
  end,
  suffix = "",
  className,
  duration = 1.8,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const obj = { value: 0 };

    gsap.to(obj, {
      value: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        once: true,
      },
      onUpdate() {
        if (ref.current) {
          ref.current.textContent = Math.round(obj.value) + suffix;
        }
      },
    });
  });

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
