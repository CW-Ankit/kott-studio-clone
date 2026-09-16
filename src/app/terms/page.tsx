import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Kott Studio",
  description: "Terms of service for Kott Studio engagements and digital platforms.",
};

export default function TermsPage() {
  return (
    <main id="content" className="pt-28 pb-32 px-6 md:px-14 bg-ink text-paper">
      <div className="mb-8">
        <Link href="/" className="eyebrow link-underline text-paper/60 hover:text-paper">
          ← back to canvas
        </Link>
      </div>

      <header className="border-b border-paper/15 pb-12">
        <p className="eyebrow text-paper/55">legal</p>
        <h1 className="font-display mt-4 text-4xl md:text-6xl font-thin">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-paper/50">
          Last updated: January 2026
        </p>
      </header>

      <article className="py-16 max-w-[42em] space-y-8 text-sm md:text-base leading-relaxed text-paper/75 font-light">
        <section>
          <h2 className="font-display text-2xl text-paper mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or browsing the Kott Studio website, or by engaging our studio for design and software development services, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-paper mb-3">2. Intellectual Property &amp; Ownership</h2>
          <p>
            Unless otherwise agreed in an explicit client statement of work, all final custom deliverables, brand marks, and software source code created for a client become the client&apos;s intellectual property upon receipt of full payment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-paper mb-3">3. Studio Showcase Rights</h2>
          <p>
            Kott Studio reserves the right to showcase delivered project imagery, case studies, and live demonstrations within our studio portfolio, awards submissions, and digital channels unless bound by an express confidentiality agreement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-paper mb-3">4. Limitation of Liability</h2>
          <p>
            Kott Studio provides its advisory and development services with industry-standard professional diligence. In no event shall our studio be liable for indirect, consequential, or punitive damages arising from site downtime, hosting platform failures, or third-party API interruptions.
          </p>
        </section>
      </article>
    </main>
  );
}
