"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrame = useRef<number>(0);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointer
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setIsVisible(true);

      // Check for interactive targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, summary, [role='button']");
      const customCursorEl = target.closest("[data-cursor]") as HTMLElement | null;

      if (customCursorEl) {
        setCursorText(customCursorEl.dataset.cursor || "");
        setIsHovering(true);
      } else if (interactive) {
        setCursorText("");
        setIsHovering(true);
      } else {
        setCursorText("");
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth linear interpolation animation loop
    const render = () => {
      // Lerp ring towards dot position
      const ease = 0.22;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrame.current = requestAnimationFrame(render);
    };

    animFrame.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full transition-transform duration-100 ease-out mix-blend-difference pointer-events-none ${
          cursorText ? "opacity-0" : "bg-paper"
        }`}
      />

      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          cursorText
            ? "-ml-8 -mt-8 h-16 w-16 border border-accent bg-accent/20 text-accent backdrop-blur-[2px]"
            : isHovering
            ? "-ml-6 -mt-6 h-12 w-12 border border-paper/40 bg-paper/10 mix-blend-difference"
            : "-ml-3.5 -mt-3.5 h-7 w-7 border border-paper/30 mix-blend-difference"
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-paper select-none font-bold">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
