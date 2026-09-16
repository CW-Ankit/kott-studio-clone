"use client";

import React, { useEffect, useState } from "react";
import { ImpossibleTriangle } from "./ImpossibleTriangle";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"play" | "done">("play");
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("done");
          setTimeout(() => setMounted(false), 900);
          return 100;
        }
        return prev + 5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      data-phase={phase}
      className={`preloader ${phase === "done" ? "-translate-y-full pointer-events-none" : ""}`}
    >
      <div className="preloader__mark">
        <ImpossibleTriangle className="h-full w-auto" />
      </div>
      <div className="preloader__meta">
        <span className="preloader__word font-display">kott®</span>
        <span className="preloader__count eyebrow tabular-nums">
          {String(Math.min(count, 100)).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
