import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Kott Studio",
  description: "Privacy policy for Kott Studio website and client interactions.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-paper/50">
          Last updated: January 2026
        </p>
      </header>

      <article className="py-16 max-w-[42em] space-y-8 text-sm md:text-base leading-relaxed text-paper/75 font-light">
        <section>
          <h2 className="font-display text-2xl text-paper mb-3">1. Information We Collect</h2>
          <p>
            When you contact us via our inquiry form or direct email, we collect your name, email address, company name, and whatever project details you choose to share. We do not sell, rent, or lease your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-paper mb-3">2. Zero Tracking &amp; Cookies</h2>
          <p>
            Kott Studio does not use invasive surveillance pixels, third-party analytics trackers, or commercial advertising cookies. Our products are engineered with privacy by default.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-paper mb-3">3. How We Protect Your Data</h2>
          <p>
            Any communication and project documentation shared with Kott Studio is kept confidential and accessible only to active project contributors under strict non-disclosure terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-paper mb-3">4. Contacting Us</h2>
          <p>
            If you have questions regarding this privacy policy or wish to have your submitted contact records removed, email us at <a href="mailto:hello@kott.studio" className="text-accent underline">hello@kott.studio</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
