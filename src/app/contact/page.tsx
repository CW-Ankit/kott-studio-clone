import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Kott Studio",
  description:
    "No discovery-call gauntlet, no intake funnel. A few honest lines about where you're headed. Usually answered within two days.",
};

export default function ContactPage() {
  return (
    <main id="content" className="bg-ink text-paper selection:bg-accent selection:text-paper min-h-screen">
      <section className="grid grid-cols-4 gap-x-6 px-6 pb-28 pt-40 md:grid-cols-12 md:gap-x-[var(--gutter)] md:px-14 md:pb-36 md:pt-48">
        {/* Left Editorial Info */}
        <div className="col-span-4 md:col-span-5">
          <p className="eyebrow text-paper/55">contact — correspondence</p>
          <h1 className="font-display mt-6 text-[clamp(44px,6vw,92px)] font-thin leading-[0.95]">
            Write <span className="italic">first.</span>
          </h1>
          <p className="mt-8 max-w-[var(--measure-tight)] text-[0.95rem] leading-relaxed text-paper/60 font-light">
            No discovery-call gauntlet, no intake funnel. A few honest lines about where you&apos;re headed. Usually answered within two days.
          </p>

          <a
            href="mailto:hello@kott.studio"
            className="font-display group mt-10 inline-block break-all text-[clamp(24px,2.6vw,40px)] leading-none tracking-[-0.015em] md:break-normal text-paper"
          >
            hello@kott.studio
            <span className="mt-2 block h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </a>

          <p className="eyebrow mt-6 text-paper/55">( say hi anytime )</p>

          <div className="mt-10 flex gap-8">
            <a
              href="https://www.behance.net/kottstudio"
              target="_blank"
              rel="noreferrer"
              className="eyebrow link-underline text-paper/70"
            >
              Behance ↗
            </a>
            <a
              href="https://www.instagram.com/kott_studio/"
              target="_blank"
              rel="noreferrer"
              className="eyebrow link-underline text-paper/70"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="col-span-4 mt-14 md:col-span-6 md:col-start-7 md:mt-0">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
