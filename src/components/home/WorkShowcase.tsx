"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WORK_PROJECTS } from "@/data/kottData";

export function WorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="work" className="-mt-px bg-ink text-paper">
      <div className="px-6 pb-24 pt-28 md:px-14 md:pb-32 md:pt-36">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Left Column: Sticky Title & Live Preview Frame */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-paper/55">
              <span className="idx-tag text-accent-on-ink">01</span> — selected work
            </p>
            <h2 className="font-display mt-6 text-[clamp(46px,6.4vw,104px)] font-normal leading-[0.95] tracking-[-0.015em] md:font-thin">
              Work that <em className="italic">works</em>.
            </h2>

            {/* Desktop Preview Box */}
            <div className="relative mt-10 hidden h-[46vh] w-full border border-paper/15 lg:block overflow-hidden bg-paper/[0.02]">
              {WORK_PROJECTS.map((project, idx) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 h-full w-full p-4 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeIndex === idx ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={project.cover}
                    alt={project.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive List */}
          <div>
            <div>
              {WORK_PROJECTS.map((project, idx) => {
                const isHovered = activeIndex === idx;
                return (
                  <div key={project.id} className="border-t border-paper/15 last:border-b">
                    <Link
                      href={`/work/${project.slug}`}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className="group block py-6 md:py-7 transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 md:flex-nowrap">
                        <span className="eyebrow w-10 shrink-0 text-paper/55 transition-colors duration-300 group-hover:text-accent-on-ink">
                          {project.id}/
                        </span>
                        <span className="font-display text-[clamp(32px,4.4vw,72px)] font-normal leading-[1.02] tracking-[-0.01em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 md:font-thin">
                          {project.title}
                        </span>
                        <span className="eyebrow ml-auto shrink-0 text-paper/60">
                          {project.type} · {project.year}
                        </span>
                      </div>

                      {/* Mobile inline preview */}
                      <div className="mt-6 lg:hidden overflow-hidden rounded border border-paper/10">
                        <img
                          src={project.cover}
                          alt={project.alt}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-wrap items-baseline justify-between gap-3">
              <span className="eyebrow text-paper/55">
                brands · websites · systems · tools
              </span>
              <span className="eyebrow text-paper/55">( selected, and shipped )</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
