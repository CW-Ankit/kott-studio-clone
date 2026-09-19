"use client";

import React from "react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-paper/15 bg-ink text-paper selection:bg-accent selection:text-paper">
      <div className="px-6 pb-20 pt-24 md:px-14 md:pb-24 md:pt-28">
        <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-[var(--gutter)]">
          {/* Left Hero */}
          <div className="md:col-span-5">
            <div>
              <p className="eyebrow text-paper/55">
                <span className="idx-tag text-accent-on-ink">05</span> — say hi anytime
              </p>
              <h2 className="font-display max-w-[12em] text-balance text-[clamp(34px,5.4vw,84px)] font-normal leading-[0.98] md:font-thin mt-6">
                Start with <em className="italic text-accent-on-ink">one letter</em>.
              </h2>
              <p className="mt-8 max-w-[30em] text-[0.9rem] leading-relaxed text-paper/60 font-light">
                a few honest lines about where you&apos;re headed. we&apos;ll answer with what it needs, usually within two days.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <ContactForm />
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-16 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-paper/15 pt-5">
          <span className="eyebrow text-paper/55">
            ( answered by the hand that does the work, usually within two days )
          </span>
          <Link className="eyebrow link-underline text-paper/70" href="/contact">
            or write properly →
          </Link>
        </div>
      </div>
    </section>
  );
}
