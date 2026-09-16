"use client";

import React from "react";
import Link from "next/link";
import { SHIPPED_APPS } from "@/data/kottData";

export function AppsShelf() {
  return (
    <section id="apps" className="border-t border-paper/15 bg-ink text-paper">
      <div className="px-6 py-24 md:px-14 md:py-32">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="eyebrow text-paper/55">
            <span className="idx-tag text-accent-on-ink">02</span> — shipped apps
          </p>
          <Link className="eyebrow link-underline text-paper/70" href="/work#apps">
            the whole shelf, up close →
          </Link>
        </div>

        <h2 className="font-display mt-7 text-[clamp(30px,4vw,56px)] font-normal leading-[1.0] tracking-[-0.015em] md:font-thin">
          In your pocket, <em className="italic">too</em>.
        </h2>
        <p className="mt-5 max-w-[var(--measure-tight)] text-[0.9rem] leading-relaxed text-paper/60">
          products we designed and shipped to the App Store — one screen each.
        </p>

        <div className="mt-12 md:mt-14">
          <div className="mb-3 flex justify-end lg:hidden">
            <span className="eyebrow text-paper/55" aria-hidden="true">
              swipe for more →
            </span>
          </div>

          <div className="relative">
            <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] lg:grid lg:snap-none lg:grid-cols-7 lg:gap-4 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {SHIPPED_APPS.map((app) => (
                <a
                  key={app.name}
                  href={app.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-[42vw] shrink-0 snap-start sm:w-[30vw] md:w-[22vw] lg:w-auto"
                >
                  <div className="overflow-hidden rounded-md border border-paper/10 bg-paper/[0.03]">
                    <img
                      src={app.screen}
                      alt={`${app.name} — screen`}
                      loading="lazy"
                      width={600}
                      height={1298}
                      className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-2">
                    <span
                      data-glitch={app.name}
                      className="glitch font-display text-[13px] leading-none md:text-[15px]"
                    >
                      {app.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="eyebrow shrink-0 text-paper/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
