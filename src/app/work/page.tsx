import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { WORK_PROJECTS, SHIPPED_APPS } from "@/data/kottData";

export const metadata: Metadata = {
  title: "Work — Kott Studio",
  description: "Selected work by Kott Studio — brand identities, websites, tools and shipped iOS/Android apps. Full case studies on Behance.",
};

export default function WorkPage() {
  const colClasses = [
    "md:col-span-7",
    "md:col-span-5 md:mt-24",
    "md:col-span-5",
    "md:col-span-7 md:mt-24",
    "md:col-span-5",
    "md:col-span-7 md:mt-24",
    "md:col-span-7",
  ];

  return (
    <main id="content" className="bg-ink pt-28 pb-32 px-6 text-paper md:pt-36 md:px-14">
      {/* Header */}
      <header className="border-b border-paper/15 pb-14">
        <p className="eyebrow text-paper/55">/work — portfolio archive</p>
        <h1 className="font-display mt-8 text-[clamp(52px,9vw,140px)] font-thin leading-[0.92]">
          Selected &amp; <span className="italic">up close.</span>
        </h1>
        <p className="mt-8 max-w-[38em] text-[1.05rem] leading-relaxed text-paper/70 font-light">
          Seven case studies from six years of practice — identity systems, web platforms and tools.
          Shipped with founders, studios and technology companies across the USA and Europe.
        </p>
      </header>

      {/* Asymmetric 12-Column Projects Grid */}
      <section className="mt-16 grid gap-x-10 gap-y-16 md:mt-24 md:grid-cols-12 md:gap-y-10">
        {WORK_PROJECTS.map((project, idx) => {
          const colClass = colClasses[idx] || "md:col-span-6";

          return (
            <div key={project.id} className={colClass}>
              <Link href={`/work/${project.slug}`} data-cursor="view ↗" className="group block">
                <div className="group/plate relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.cover}
                      alt={`${project.title} — cover`}
                      loading="lazy"
                      width={820}
                      height={615}
                      className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover/plate:scale-[1.03]"
                    />
                    {/* Glowing hover border */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 border border-accent opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/plate:opacity-100"
                    />
                    {/* Floating view ↗ badge */}
                    <span
                      aria-hidden="true"
                      className="eyebrow pointer-events-none absolute bottom-3 left-3 translate-y-1.5 bg-accent px-2.5 py-1.5 text-paper opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/plate:translate-y-0 group-hover/plate:opacity-100"
                    >
                      view ↗
                    </span>
                  </div>

                  {/* Giant faint watermark numeral */}
                  <span
                    aria-hidden="true"
                    className="font-display pointer-events-none absolute -top-2 right-4 z-10 text-[clamp(72px,8vw,130px)] font-thin leading-none text-paper/[0.08] mix-blend-luminosity"
                  >
                    {project.id}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="font-display text-[clamp(24px,2.4vw,38px)] leading-none font-normal">
                    {project.title}
                  </span>
                  <span className="eyebrow ml-auto text-paper/50">
                    {project.type} · {project.year}
                  </span>
                </div>

                <p className="mt-3 max-w-[40em] text-[0.85rem] leading-relaxed text-paper/55">
                  {project.summary}
                </p>
              </Link>
            </div>
          );
        })}
      </section>

      {/* Shipped Apps Shelf (#apps) */}
      <section id="apps" className="mt-28 border-t border-paper/15 pt-24 md:mt-36 md:pt-32">
        <p className="eyebrow text-paper/55">
          <span className="idx-tag text-accent brightness-150 saturate-150">02</span> — shipped apps
        </p>
        <h2 className="font-display mt-7 text-[clamp(40px,6.5vw,96px)] font-thin leading-[0.95]">
          Also, in your <em className="italic">pocket</em>.
        </h2>
        <p className="mt-6 max-w-[36em] text-[0.9rem] leading-relaxed text-paper/60">
          designed and shipped by the studio, live on the App Store. screens from the listings, apps yours to download.
        </p>

        {/* 2-Column Grid with 3-Screen Previews */}
        <div className="mt-16 grid gap-x-8 gap-y-12 md:mt-20 md:grid-cols-2">
          {SHIPPED_APPS.map((app) => (
            <div
              key={app.name}
              className="border border-paper/15 p-5 transition-colors duration-300 hover:border-paper/35 md:p-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.icon}
                  alt={`${app.name} — app icon`}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-[11px] border border-paper/15 object-cover"
                />
                <div className="min-w-0">
                  <span
                    data-glitch={app.name}
                    className="glitch font-display block text-[clamp(22px,2.4vw,32px)] leading-none tracking-[-0.01em]"
                  >
                    {app.name}
                  </span>
                  <span className="eyebrow mt-2 block text-paper/55">
                    {app.platform || "ios"}
                  </span>
                </div>

                {app.link && app.link.startsWith("http") ? (
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${app.name} in App Store`}
                    className="eyebrow ml-auto shrink-0 self-start text-paper/55 transition-transform duration-300 hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    App Store ↗
                  </a>
                ) : (
                  <span
                    aria-hidden="true"
                    className="eyebrow ml-auto shrink-0 self-start text-paper/55"
                  >
                    {app.status || "soon in the App Store"}
                  </span>
                )}
              </div>

              <p className="mt-4 max-w-[34em] text-[0.82rem] leading-relaxed text-paper/55">
                {app.desc}
              </p>

              {/* 3 Phone Screens Side by Side */}
              <div className="mt-6 grid grid-cols-3 gap-2 md:gap-3">
                {app.screens.map((screen, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-md border border-paper/10 bg-paper/[0.03]"
                  >
                    <img
                      src={screen}
                      alt={`${app.name} — screen ${idx + 1}`}
                      loading="lazy"
                      width={600}
                      height={1298}
                      className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Shelf Footer Row */}
        <div className="mt-16 flex flex-wrap items-baseline justify-between gap-3 border-t border-paper/20 pt-5 md:mt-20">
          <span className="eyebrow text-paper/55">
            want yours in the store?{" "}
            <a href="mailto:hello@kott.studio" className="link-underline text-paper/80">
              hello@kott.studio
            </a>
          </span>
          <span className="eyebrow text-paper/55">
            designed &amp; shipped with{" "}
            <a
              href="https://echopersona.com"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-paper/80"
            >
              echopersona llc ↗
            </a>
          </span>
        </div>
      </section>
    </main>
  );
}
