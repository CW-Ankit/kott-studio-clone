"use client";

import React, { useEffect, useState } from "react";
import { ImpossibleTriangle } from "../common/ImpossibleTriangle";

export function HeroMonolith() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute scale and opacity based on scroll
  const progress = Math.min(scrollY / 800, 1);
  const scale = 1 + progress * 0.25;
  const wordOpacity = Math.max(0, 1 - progress * 1.5);
  const tagOpacity = Math.min(1, Math.max(0, (progress - 0.2) * 1.8));

  return (
    <section
      aria-label="Kott Studio — the impossible object"
      className="relative min-h-screen md:h-[220vh] bg-paper text-ink"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between">
        {/* Background "IMPOSSIBLE" watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: wordOpacity }}
        >
          <span className="font-display block -translate-y-[12vh] whitespace-nowrap text-[17vw] font-thin leading-none tracking-[-0.04em] text-ink/90 sm:translate-y-0">
            <span className="text-accent">IM</span>POSSIBLE
          </span>
        </div>

        {/* Central Impossible Triangle Object */}
        <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
          <div
            className="h-[min(54vh,54vw)] w-auto transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `scale(${scale}) translateY(${-progress * 40}px)`,
            }}
          >
            <ImpossibleTriangle className="h-full w-auto" />
          </div>
        </div>

        {/* Tagline revealed on scroll */}
        <div
          className="absolute inset-x-6 bottom-28 z-20 md:inset-x-14 pointer-events-none transition-opacity duration-300"
          style={{ opacity: tagOpacity }}
        >
          <h1 className="sr-only">
            Kott Studio — there are probably things we cannot do. We are not sure of that.
          </h1>
          <p
            aria-hidden="true"
            className="font-display max-w-[22em] text-[clamp(18px,1.9vw,26px)] leading-[1.25] tracking-[-0.01em] text-ink"
          >
            <span className="block">there are probably things we simply cannot do.</span>
            <span className="mt-1 block italic">we are not sure of that.</span>
          </p>
        </div>

        {/* Bottom meta bar */}
        <div className="absolute inset-x-6 bottom-6 z-20 flex flex-col gap-2 md:inset-x-14 md:flex-row md:items-baseline md:justify-between">
          <span className="eyebrow text-muted">
            visual communications, engineered by hand
          </span>
          <span className="inline-flex items-baseline gap-3.5 self-end md:self-auto">
            <span className="eyebrow tabular-nums text-muted" aria-hidden="true">
              {String(Math.min(Math.floor(progress * 100), 100)).padStart(3, "0")}
            </span>
            <span className="eyebrow text-muted">scroll to inspect ↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}
