"use client";

import React, { useEffect, useRef } from "react";
import { LAB_SPECIMENS } from "@/data/kottData";

export function LabSection() {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  // Subtle animated generative canvas for specimens 1 & 3 & 4
  useEffect(() => {
    let animFrame: number;
    let t = 0;

    const render = () => {
      t += 0.03;
      canvasRefs.current.forEach((canvas, idx) => {
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const w = (canvas.width = 88);
        const h = (canvas.height = 88);
        ctx.clearRect(0, 0, w, h);

        if (idx === 0) {
          // Letterform matrix simulation
          ctx.fillStyle = "rgba(244, 245, 247, 0.75)";
          ctx.font = "9px monospace";
          const chars = "KOTT01X#@*";
          for (let y = 14; y < h; y += 14) {
            for (let x = 6; x < w; x += 14) {
              const char = chars[Math.floor(Math.abs(Math.sin(t + x * 0.1 + y * 0.1)) * chars.length)];
              ctx.fillText(char, x, y);
            }
          }
        } else if (idx === 2) {
          // Resonance circular waves
          ctx.strokeStyle = "rgba(244, 245, 247, 0.6)";
          ctx.lineWidth = 1;
          for (let r = 8; r < 36; r += 7) {
            const rad = r + Math.sin(t * 1.5 + r) * 3;
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, rad, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (idx === 3) {
          // Wobble sinuous wave
          ctx.strokeStyle = "rgba(0, 55, 255, 0.9)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let x = 8; x < w - 8; x++) {
            const y = h / 2 + Math.sin(x * 0.15 + t * 2) * 12;
            if (x === 8) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      });

      animFrame = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section id="lab" className="border-t border-paper/15 bg-ink text-paper">
      <div className="px-6 py-24 md:px-14 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-paper/55">
              <span className="idx-tag text-accent-on-ink">04</span> — the lab
            </p>
            <h2 className="font-display mt-7 text-[clamp(40px,6vw,88px)] font-normal leading-[0.95] tracking-[-0.015em] md:font-thin">
              Play that works.
            </h2>
          </div>
          <p className="max-w-[30em] text-[0.9rem] leading-relaxed text-paper/60">
            toys we built to stay sharp. free, in the browser, no sign-up. designed and coded by the same hands,
            which is rather the point.
          </p>
        </div>

        <p className="eyebrow mt-12 text-paper/55">specimens</p>

        <div className="mt-4 grid grid-cols-1 gap-px border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {LAB_SPECIMENS.map((specimen, idx) => (
            <a
              key={specimen.id}
              href={specimen.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between bg-ink p-7 transition-colors duration-300 hover:bg-paper/[0.04] md:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="block border border-paper/20 p-3 transition-colors duration-300 group-hover:border-accent-on-ink">
                  {specimen.previewType === "font" ? (
                    <div
                      className="flex h-[88px] w-[88px] items-center justify-center text-[44px] font-bold font-display leading-none text-paper/85 transition-transform group-hover:scale-110"
                    >
                      Aa
                    </div>
                  ) : (
                    <canvas
                      ref={(el) => {
                        canvasRefs.current[idx] = el;
                      }}
                      width={88}
                      height={88}
                      className="block h-[88px] w-[88px]"
                    />
                  )}
                </div>
                <span
                  aria-hidden="true"
                  className="eyebrow text-paper/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </div>

              <div className="mt-12">
                <span className="eyebrow block text-paper/55 transition-colors duration-300 group-hover:text-accent-on-ink">
                  {specimen.id}
                </span>
                <h3
                  data-glitch={specimen.title}
                  className="glitch font-display mt-2 text-[clamp(28px,3.2vw,44px)] leading-[1.02] tracking-[-0.01em] md:font-thin"
                >
                  {specimen.title}
                </h3>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-paper/60">
                  {specimen.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-3">
          <span className="eyebrow text-paper/55">
            ( toys, but load-bearing: typeset already did client work )
          </span>
          <a
            href="https://www.kharnaa.com/playground"
            target="_blank"
            rel="noreferrer"
            className="eyebrow link-underline text-paper/70"
          >
            the whole bench ↗
          </a>
        </div>
      </div>
    </section>
  );
}
