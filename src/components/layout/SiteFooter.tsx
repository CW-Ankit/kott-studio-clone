"use client";

import React, { useState } from "react";
import Link from "next/link";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-line-paper bg-ink text-paper">
      <div className="grid gap-y-12 px-6 py-12 md:grid-cols-12 md:items-end md:gap-x-8 md:px-14 md:py-16">
        <div className="md:col-span-6">
          <Link
            href="/"
            className="font-display inline-block text-[clamp(56px,8vw,120px)] font-thin leading-none"
            aria-label="Kott Studio — home"
          >
            kott<sup className="text-[0.22em] font-normal">®</sup>
          </Link>
          <p className="font-display mt-6 text-xl italic text-paper/70">
            We draw it, then we build it. Since 2020.
          </p>
        </div>

        <nav aria-label="Pages" className="flex flex-col gap-3 md:col-span-3">
          <Link className="eyebrow link-underline w-fit text-paper/70" href="/work">
            /work
          </Link>
          <Link className="eyebrow link-underline w-fit text-paper/70" href="/services">
            /services
          </Link>
          <Link className="eyebrow link-underline w-fit text-paper/70" href="/journal">
            /journal
          </Link>
          <Link className="eyebrow link-underline w-fit text-paper/70" href="/about">
            /about
          </Link>
          <Link className="eyebrow link-underline w-fit text-paper/70" href="/faq">
            /faq
          </Link>
          <Link className="eyebrow link-underline w-fit text-paper/70" href="/contact">
            /contact
          </Link>
        </nav>

        <nav aria-label="Elsewhere" className="flex flex-col gap-3 md:col-span-3">
          <a
            href="https://www.behance.net/kottstudio"
            target="_blank"
            rel="noreferrer"
            className="eyebrow link-underline w-fit text-paper/70"
          >
            Behance ↗
          </a>
          <a
            href="https://www.instagram.com/kott_studio/"
            target="_blank"
            rel="noreferrer"
            className="eyebrow link-underline w-fit text-paper/70"
          >
            Instagram ↗
          </a>
          <a
            href="https://www.linkedin.com/company/kott-studio/"
            target="_blank"
            rel="noreferrer"
            className="eyebrow link-underline w-fit text-paper/70"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.kharnaa.com/playground"
            target="_blank"
            rel="noreferrer"
            className="eyebrow link-underline w-fit text-paper/70"
          >
            Playground ↗
          </a>
          <a
            href="mailto:hello@kott.studio"
            className="eyebrow link-underline w-fit text-paper/70"
          >
            hello@kott.studio
          </a>
        </nav>
      </div>

      {/* Newsletter */}
      <div className="border-t border-line-paper px-6 py-8 md:px-14">
        <form onSubmit={handleSubscribe} className="max-w-[26rem]">
          <label className="block">
            <span className="eyebrow text-paper/55">
              One design note a month. The kind clients ask us in meetings.
            </span>
            <span className="mt-2 flex items-baseline gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                className="min-w-0 flex-1 border-b border-paper/45 hover:border-paper/70 placeholder:text-paper/40 bg-transparent py-2 text-[0.85rem] text-paper transition-colors duration-200 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="eyebrow shrink-0 border-b border-accent pb-2 text-accent transition-opacity duration-200 hover:opacity-70 disabled:opacity-50"
              >
                {subscribed ? "sent ✓" : "send it"}
              </button>
            </span>
          </label>
        </form>
      </div>

      {/* Awards & Recognition */}
      <div className="flex flex-col gap-3 border-t border-line-paper px-6 py-6 md:flex-row md:items-baseline md:gap-8 md:px-14">
        <p className="eyebrow text-paper/55 md:w-[7rem] md:shrink-0">Recognition</p>
        <nav aria-label="Awards" className="flex flex-col gap-3 md:flex-row md:gap-10">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="eyebrow text-paper/55">Awwwards</p>
            <a
              href="https://www.awwwards.com/sites/hue-cry"
              target="_blank"
              rel="noreferrer"
              aria-label="Awwwards — Hue &amp; Cry"
              className="eyebrow link-underline text-paper/70"
            >
              Hue &amp; Cry
            </a>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="eyebrow text-paper/55">CSS Design Awards</p>
            <a
              href="https://www.cssdesignawards.com/sites/hue-cry/49751/"
              target="_blank"
              rel="noreferrer"
              aria-label="CSS Design Awards — Hue &amp; Cry"
              className="eyebrow link-underline text-paper/70"
            >
              Hue &amp; Cry
            </a>
            <span aria-hidden="true" className="eyebrow text-paper/30">
              ·
            </span>
            <a
              href="https://www.cssdesignawards.com/sites/kott-studio/49904/"
              target="_blank"
              rel="noreferrer"
              aria-label="CSS Design Awards — Kott Studio"
              className="eyebrow link-underline text-paper/70"
            >
              Kott Studio
            </a>
            <span aria-hidden="true" className="eyebrow text-paper/30">
              ·
            </span>
            <a
              href="https://www.cssdesignawards.com/sites/kott/50010/"
              target="_blank"
              rel="noreferrer"
              aria-label="CSS Design Awards — kott.io"
              className="eyebrow link-underline text-paper/70"
            >
              kott.io
            </a>
          </div>
        </nav>
      </div>

      {/* Copyright & Legal */}
      <div className="flex flex-col gap-4 border-t border-line-paper px-6 py-6 md:flex-row md:items-center md:justify-between md:px-14">
        <p className="eyebrow text-paper/55">
          © 2020–2026 Kott Studio. All rights reserve
          <span className="text-accent-on-ink">D</span>
        </p>
        <nav aria-label="Legal" className="flex gap-6">
          <Link className="eyebrow link-underline text-paper/55" href="/privacy">
            Privacy
          </Link>
          <Link className="eyebrow link-underline text-paper/55" href="/terms">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
