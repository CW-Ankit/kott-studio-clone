"use client";

import React from "react";

export function InstrumentBand() {
  return (
    <section id="instrument" className="border-t border-paper/15 bg-ink text-paper">
      <div className="px-6 py-20 md:px-14 md:py-24">
        <div className="bg-io-magenta p-8 text-ink md:p-12 rounded-sm">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-14 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="eyebrow flex flex-wrap items-baseline gap-x-3 text-ink/90 font-bold">
                  <span className="idx-tag">kott<sup className="text-[0.6em]">®</sup></span>
                  live now
                </p>

                <h2 className="font-display mt-7 text-[clamp(34px,4.4vw,60px)] font-normal leading-[0.98] tracking-[-0.015em] md:font-thin">
                  We built an <span className="italic text-paper">instrument.</span>
                </h2>

                <p className="mt-6 max-w-[var(--measure-tight)] text-[0.9rem] leading-relaxed text-ink/85">
                  ours, out of the same hands as everything above: kott turns any photo, video or camera into live,
                  print-grade art. it runs in the browser, on your own device, and nothing you drop in gets uploaded.
                </p>

                <p className="eyebrow mt-9 text-ink/75">
                  dither · halftone · ascii · riso · glitch · pixel-sort
                </p>
              </div>

              <a
                href="https://kott.io"
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-9 self-start bg-ink px-6 py-4 text-io-magenta transition-colors duration-200 hover:bg-paper hover:text-ink font-semibold"
              >
                kott.io ↗
              </a>
            </div>

            {/* Right Video Reel */}
            <figure className="lg:col-span-7">
              <div className="relative overflow-hidden rounded border border-ink/20 shadow-2xl bg-black">
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  poster="/media/kott-io-poster.jpg"
                  width={900}
                  height={628}
                  aria-label="A fashion film running through kott, the effect crystallising the frame as it plays"
                  className="block h-auto w-full object-cover"
                >
                  <source src="/media/kott-io-loop.mp4" type="video/mp4" />
                </video>
              </div>
              <figcaption className="eyebrow mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-ink/80 font-medium">
                <span>real footage, running through kott</span>
                <span className="text-ink font-bold">src → fx → out</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
