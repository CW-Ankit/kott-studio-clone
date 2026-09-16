import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ImpossibleTriangle } from "@/components/common/ImpossibleTriangle";

export const metadata: Metadata = {
  title: "About — Kott Studio",
  description: "Kott Studio is a design and development studio. We draw it, then we build it. Since 2020.",
};

export default function AboutPage() {
  return (
    <main id="content" className="pt-28 pb-32 px-6 md:px-14 bg-ink text-paper">
      {/* Header */}
      <header className="border-b border-paper/15 pb-16">
        <p className="eyebrow text-paper/55">
          <span className="idx-tag text-accent-on-ink">04</span> — studio ethos
        </p>
        <h1 className="font-display mt-6 text-[clamp(44px,7.5vw,112px)] font-normal leading-[0.95] tracking-[-0.02em] md:font-thin">
          We draw it, then <em className="italic text-accent-on-ink">we build it</em>.
        </h1>
        <p className="mt-8 max-w-[34em] text-[1.15rem] leading-relaxed text-paper/80 font-light">
          Founded in 2020, Kott Studio is an independent design and engineering practice creating digital products, brand identities, and custom tools for clients across the United States and Europe.
        </p>
      </header>

      {/* Manifesto Section */}
      <section className="py-20 border-b border-paper/15 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow text-paper/50">Our Principle</span>
          <h2 className="font-display mt-4 text-3xl md:text-5xl font-normal leading-tight">
            No departments. Partners, yes; departments, no.
          </h2>
          <div className="mt-8 w-32 h-32 opacity-80">
            <ImpossibleTriangle className="w-full h-full" />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-paper/75 text-base md:text-lg leading-relaxed font-light">
          <p>
            The traditional agency model is broken: clients pay senior strategists for pitches, only to have their work passed down to junior designers, and eventually handed off to disconnected engineering vendors overseas.
          </p>
          <p>
            At Kott Studio, the person who concepts your visual system is the same person engineering your interactive components in code. When design and engineering inhabit the same mind, friction vanishes. Micro-interactions become second nature, layout responsiveness is considered from the first keystroke, and performance is treated as a core design aesthetic.
          </p>
          <p>
            We don&apos;t build disposable marketing gimmicks. We craft durable platforms, lightweight mobile utilities, and memorable typographic identities that stand out in crowded markets.
          </p>
        </div>
      </section>

      {/* Core Tenets Grid */}
      <section className="py-20 border-b border-paper/15">
        <p className="eyebrow text-paper/50 mb-10">How we make things</p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 border border-paper/10 rounded bg-paper/[0.02]">
            <span className="eyebrow text-accent">01</span>
            <h3 className="font-display mt-3 text-2xl font-normal">Code is the Canvas</h3>
            <p className="mt-4 text-xs text-paper/60 leading-relaxed">
              Figma artboards are flat approximations. Real software has latency, font reflow, gestures, and physics. We prototype directly in browser code so you experience reality immediately.
            </p>
          </div>

          <div className="p-8 border border-paper/10 rounded bg-paper/[0.02]">
            <span className="eyebrow text-accent">02</span>
            <h3 className="font-display mt-3 text-2xl font-normal">Performance is Respect</h3>
            <p className="mt-4 text-xs text-paper/60 leading-relaxed">
              We respect your users&apos; time and battery. Zero third-party tracker bloat, sub-50KB bundle budgets where possible, and instantaneous static prerendering across all viewports.
            </p>
          </div>

          <div className="p-8 border border-paper/10 rounded bg-paper/[0.02]">
            <span className="eyebrow text-accent">03</span>
            <h3 className="font-display mt-3 text-2xl font-normal">Direct Asynchrony</h3>
            <p className="mt-4 text-xs text-paper/60 leading-relaxed">
              No bloated status meetings. We collaborate transparently through shared GitHub pull requests, Loom walkthroughs, and direct Slack syncs with decision makers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-3xl md:text-5xl font-thin">
            Ready to build something impossible?
          </h2>
          <p className="mt-2 text-sm text-paper/60">
            Tell us about your project, timeline, and rough budget.
          </p>
        </div>
        <Link
          href="/contact"
          className="eyebrow border border-accent bg-accent px-7 py-4 text-paper hover:bg-paper hover:text-ink transition-colors font-semibold"
        >
          say hi anytime →
        </Link>
      </section>
    </main>
  );
}
