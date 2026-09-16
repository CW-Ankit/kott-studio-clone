"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQ_ITEMS } from "@/data/kottData";

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)));

  return (
    <main id="content" className="pt-28 pb-32 px-6 md:px-14 bg-ink text-paper">
      {/* Header */}
      <header className="border-b border-paper/15 pb-16">
        <p className="eyebrow text-paper/55">
          <span className="idx-tag text-accent-on-ink">07</span> — inquiries &amp; answers
        </p>
        <h1 className="font-display mt-6 text-[clamp(44px,7.5vw,112px)] font-normal leading-[0.95] tracking-[-0.02em] md:font-thin">
          Frequently <em className="italic text-accent-on-ink">Asked</em>.
        </h1>
        <p className="mt-8 max-w-[34em] text-[1.1rem] leading-relaxed text-paper/70 font-light">
          Everything you need to know about working with Kott Studio, timelines, budgets, and engineering practices.
        </p>
      </header>

      {/* Accordion by Category */}
      <div className="py-20 space-y-16">
        {categories.map((cat) => {
          const items = FAQ_ITEMS.filter((item) => item.category === cat);
          return (
            <section key={cat} className="border-b border-paper/15 pb-14">
              <h2 className="eyebrow text-accent-on-ink mb-8">{cat}</h2>
              <div className="divide-y divide-paper/15">
                {items.map((item, idx) => {
                  const globalIdx = FAQ_ITEMS.indexOf(item);
                  const isOpen = openIdx === globalIdx;

                  return (
                    <div key={idx} className="py-6">
                      <button
                        type="button"
                        onClick={() => setOpenIdx(isOpen ? null : globalIdx)}
                        className="w-full text-left flex items-baseline justify-between gap-6 group"
                      >
                        <span className="font-display text-2xl md:text-3xl font-normal group-hover:text-accent transition-colors">
                          {item.question}
                        </span>
                        <span className="eyebrow text-paper/50 shrink-0 text-lg">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="mt-4 max-w-[38em] text-sm md:text-base leading-relaxed text-paper/75 font-light animate-[typeset-swap_0.3s_ease-out]">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Still have questions? */}
      <section className="mt-8 p-8 md:p-12 border border-paper/15 rounded bg-paper/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-normal">
            Have a question not listed here?
          </h3>
          <p className="mt-2 text-sm text-paper/60">
            Write to Jane directly. We are always happy to answer specific architectural questions.
          </p>
        </div>
        <Link
          href="/contact"
          className="eyebrow border border-accent bg-accent px-6 py-4 text-paper hover:bg-paper hover:text-ink transition-colors font-semibold"
        >
          ask us directly →
        </Link>
      </section>
    </main>
  );
}
