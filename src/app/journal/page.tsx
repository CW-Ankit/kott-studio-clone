import React from "react";
import { Metadata } from "next";
import { JOURNAL_POSTS } from "@/data/kottData";

export const metadata: Metadata = {
  title: "Journal — Kott Studio",
  description: "Field notes on creative engineering, typography, and building digital products.",
};

export default function JournalPage() {
  return (
    <main id="content" className="pt-28 pb-32 px-6 md:px-14 bg-ink text-paper">
      {/* Header */}
      <header className="border-b border-paper/15 pb-16">
        <p className="eyebrow text-paper/55">
          <span className="idx-tag text-accent-on-ink">06</span> — field notes &amp; essays
        </p>
        <h1 className="font-display mt-6 text-[clamp(44px,7.5vw,112px)] font-normal leading-[0.95] tracking-[-0.02em] md:font-thin">
          The <em className="italic text-accent-on-ink">Journal</em>.
        </h1>
        <p className="mt-8 max-w-[34em] text-[1.1rem] leading-relaxed text-paper/70 font-light">
          Occasional thoughts on typography, shader mathematics, performance engineering, and the craft of designing in code.
        </p>
      </header>

      {/* Articles Feed */}
      <section className="py-20 divide-y divide-paper/15">
        {JOURNAL_POSTS.map((post) => (
          <article key={post.slug} className="py-16 grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4 text-xs text-paper/50">
                <span className="eyebrow">{post.date}</span>
                <span>·</span>
                <span className="eyebrow">{post.readingTime}</span>
              </div>
              <h2 className="font-display mt-4 text-3xl md:text-4xl font-normal leading-tight">
                {post.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-base text-paper/85 leading-relaxed font-normal">
                {post.excerpt}
              </p>
              <div className="pt-4 border-t border-paper/10 space-y-3">
                {post.content.map((paragraph, i) => (
                  <p key={i} className="text-sm text-paper/65 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
