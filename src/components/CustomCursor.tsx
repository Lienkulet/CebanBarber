"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateEnabled = () => {
      const active = mediaQuery.matches;
      setEnabled(active);
      document.documentElement.classList.toggle("has-custom-cursor", active);
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.18;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%) scale(${isInteractive ? 1.15 : 1})`;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handleMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };

      const target = event.target as Element | null;
      const interactive = target?.closest(
        'a, button, [role="button"], input, textarea, select, summary'
      );

      setIsInteractive(Boolean(interactive));
    };

    const handleLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }

      setIsInteractive(false);
    };

    const handleEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerleave", handleLeave);
    document.addEventListener("pointerenter", handleEnter);

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", handleLeave);
      document.removeEventListener("pointerenter", handleEnter);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled, isInteractive]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[999] h-10 w-10 rounded-full opacity-0 mix-blend-screen transition-[opacity,background-color,border-color] duration-300 ${
        isInteractive
          ? "border border-offwhite/80 bg-offwhite/30"
          : "border border-offwhite/0 bg-offwhite/55"
      }`}
    />
  );
}
