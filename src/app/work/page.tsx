import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { WORK_PROJECTS, SHIPPED_APPS } from "@/data/kottData";

export const metadata: Metadata = {
  title: "Work — Kott Studio",
  description: "Websites, apps, tools, automations, and brands designed and shipped by Kott Studio.",
};

export default function WorkPage() {
  return (
    <main id="content" className="pt-28 pb-32 px-6 md:px-14 bg-ink text-paper">
      {/* Header */}
      <div className="border-b border-paper/15 pb-14">
        <p className="eyebrow text-paper/55">
          <span className="idx-tag text-accent-on-ink">01</span> — portfolio archive
        </p>
        <h1 className="font-display mt-6 text-[clamp(44px,7vw,110px)] font-normal leading-[0.92] tracking-[-0.02em] md:font-thin">
          Selected &amp; <em className="italic">shipped</em>.
        </h1>
        <p className="mt-6 max-w-[34em] text-[1.05rem] leading-relaxed text-paper/70">
          A selection of identities, web platforms, and native tools built from the ground up for ambitious founders and studios worldwide.
        </p>
      </div>

      {/* Main Client Works Grid */}
      <section className="py-20">
        <div className="grid gap-y-16">
          {WORK_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="grid gap-10 lg:grid-cols-12 border-b border-paper/15 pb-16 items-start"
            >
              {/* Media Preview */}
              <div className="lg:col-span-7 overflow-hidden rounded border border-paper/15 bg-paper/[0.02]">
                <Link href={`/work/${project.slug}`} className="block group">
                  <img
                    src={project.cover}
                    alt={project.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  />
                </Link>
              </div>

              {/* Meta & Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-baseline justify-between border-b border-paper/15 pb-4">
                    <span className="eyebrow text-accent-on-ink">{project.id}/</span>
                    <span className="eyebrow text-paper/60">{project.type} · {project.year}</span>
                  </div>

                  <h2 className="font-display mt-6 text-[clamp(32px,3.8vw,60px)] font-normal leading-[1.0] tracking-[-0.01em]">
                    <Link
                      href={`/work/${project.slug}`}
                      className="transition-colors hover:text-accent-on-ink"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="mt-5 text-[0.95rem] leading-relaxed text-paper/70">
                    {project.summary}
                  </p>

                  <div className="mt-6 space-y-2">
                    <p className="text-xs text-paper/50">
                      <strong className="text-paper/80">Client:</strong> {project.client}
                    </p>
                    <p className="text-xs text-paper/50">
                      <strong className="text-paper/80">Role:</strong> {project.role}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/work/${project.slug}`}
                    className="eyebrow inline-flex items-center gap-2 border border-paper/30 px-5 py-3 text-paper hover:border-accent hover:bg-accent transition-colors"
                  >
                    view case study →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Shipped iOS Apps Shelf */}
      <section id="apps" className="pt-16 border-t border-paper/20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow text-paper/55">
              <span className="idx-tag text-accent-on-ink">02</span> — app store products
            </p>
            <h2 className="font-display mt-4 text-[clamp(32px,4.5vw,68px)] font-normal leading-none md:font-thin">
              The App Shelf.
            </h2>
          </div>
          <span className="eyebrow text-paper/55">7 native utilities shipped</span>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHIPPED_APPS.map((app) => (
            <div
              key={app.name}
              className="border border-paper/15 rounded-md p-5 bg-paper/[0.02] flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden rounded border border-paper/10 bg-paper/[0.04]">
                  <img
                    src={app.screen}
                    alt={`${app.name} — screen`}
                    className="h-auto w-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3
                  data-glitch={app.name}
                  className="glitch font-display mt-4 text-xl font-normal"
                >
                  {app.name}
                </h3>
                <p className="mt-2 text-xs text-paper/65 leading-relaxed">
                  {app.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-paper/10">
                <a
                  href={app.link}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow inline-flex items-center justify-between w-full text-paper/70 hover:text-accent-on-ink transition-colors"
                >
                  <span>App Store</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
