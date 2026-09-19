import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { JOURNAL_POSTS } from "@/data/kottData";
import { JournalPoster } from "@/components/common/JournalPoster";

export const metadata: Metadata = {
  title: "Journal — Kott Studio",
  description:
    "Short pieces on how we work, what we're learning, and the craft behind the projects.",
};

const GRID_COL_SPANS = [
  "col-span-2 md:col-span-7",
  "col-span-1 md:col-span-5",
  "col-span-1 md:col-span-4",
  "col-span-1 md:col-span-4",
  "col-span-1 md:col-span-4",
  "col-span-1 md:col-span-6",
  "col-span-1 md:col-span-6",
  "col-span-1 md:col-span-5",
  "col-span-1 md:col-span-7",
  "col-span-1 md:col-span-7",
  "col-span-1 md:col-span-5",
  "col-span-1 md:col-span-4",
];

const POSTER_HEIGHTS = [
  "h-64 md:h-[26rem]",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
  "h-52 md:h-64",
];

export default function JournalPage() {
  return (
    <main id="content" className="bg-paper text-ink selection:bg-accent selection:text-paper min-h-screen">
      {/* Header */}
      <header className="px-6 pt-40 pb-12 md:px-14 md:pt-48 md:pb-20">
        <div>
          <p className="eyebrow flex items-center gap-3 text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Journal — Notes from the studio
          </p>
        </div>
        <div>
          <h1 className="font-display mt-6 text-[clamp(3rem,11vw,9rem)] font-light text-ink tracking-tight">
            Thinking<br />
            <span className="italic">out loud.</span>
          </h1>
        </div>
        <div>
          <p className="font-display mt-8 max-w-[var(--measure-tight)] text-[clamp(1.4rem,2.6vw,2.1rem)] font-light leading-snug text-ink-soft">
            Short pieces on how we work, what we&apos;re learning, and the craft behind the projects.
          </p>
        </div>
      </header>

      {/* Grid of Journal Articles */}
      <section className="px-6 pb-24 md:px-14">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12 md:gap-x-[var(--gutter)] md:gap-y-16">
          {JOURNAL_POSTS.map((post, idx) => {
            const colClass = GRID_COL_SPANS[idx % GRID_COL_SPANS.length];
            const heightClass = POSTER_HEIGHTS[idx % POSTER_HEIGHTS.length];
            const isFeatured = idx === 0;

            return (
              <li key={post.slug} className={colClass}>
                <div>
                  <Link
                    className="group block"
                    href={`/journal/${post.slug}`}
                    data-cursor="read"
                  >
                    <div className={`relative overflow-hidden border border-line bg-paper ${heightClass}`}>
                      <JournalPoster
                        number={post.number}
                        category={post.category}
                        className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="eyebrow mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
                      {post.category && <span className="text-accent">{post.category}</span>}
                      {post.date && <span>{post.date}</span>}
                    </p>
                    <h2
                      className={`font-display mt-2 font-light leading-snug text-ink transition-colors duration-300 group-hover:text-accent ${
                        isFeatured
                          ? "text-[clamp(1.5rem,2.6vw,2.4rem)]"
                          : "text-[clamp(1.05rem,1.5vw,1.35rem)]"
                      }`}
                    >
                      {post.title}
                    </h2>
                    {isFeatured && post.excerpt && (
                      <p className="mt-3 max-w-[var(--measure-prose)] text-sm leading-relaxed text-ink-soft">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Bottom Pagination */}
        <nav className="mt-16 border-t border-line pt-8 md:mt-24">
          <ul className="flex items-center gap-2">
            <li className="mr-auto">
              <span className="eyebrow text-muted/40 cursor-not-allowed">← Newer</span>
            </li>
            <li>
              <span className="inline-flex h-9 min-w-9 items-center justify-center border border-accent bg-accent text-paper text-xs font-mono">
                1
              </span>
            </li>
            <li className="ml-auto">
              <span className="eyebrow text-muted/40 cursor-not-allowed">Older →</span>
            </li>
          </ul>
        </nav>
      </section>

      {/* Contact CTA Footer Banner */}
      <section id="contact" className="border-t border-line">
        <div className="flex flex-col gap-5 px-6 py-12 md:flex-row md:items-baseline md:justify-between md:px-14 md:py-14">
          <p className="font-display text-[clamp(1.4rem,3.2vw,2.1rem)] font-light leading-tight text-ink">
            Have a project in mind?
          </p>
          <Link
            className="eyebrow inline-flex items-center gap-2 border border-line bg-paper px-6 py-4 transition-colors hover:border-accent hover:text-accent"
            href="/contact"
          >
            Tell us about it →
          </Link>
        </div>
      </section>
    </main>
  );
}
