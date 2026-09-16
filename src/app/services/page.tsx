import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICES } from "@/data/kottData";

export const metadata: Metadata = {
  title: "Services — Kott Studio",
  description: "Websites, apps, tools, automations, and brands: designed and built under one roof.",
};

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: "01",
      title: "Websites",
      subtitle: "Designed, engineered, and launched.",
      desc: "We build websites that look like editorial art books and run with sub-second page transitions. No generic templates or bloated builders — every layout is drawn in custom code.",
      capabilities: [
        "Interactive editorial & portfolio sites",
        "High-converting marketing & product pages",
        "Next.js App Router & serverless architecture",
        "Fluid responsive interactions & smooth scroll",
        "Rigorous performance & accessibility auditing",
      ],
    },
    {
      id: "02",
      title: "Native iOS Apps",
      subtitle: "Same craftsmanship, App Store sized.",
      desc: "Single-purpose utilities and modern companion apps designed for Apple's ecosystem. Built with pure Swift and SwiftUI for 120Hz responsiveness and zero cloud bloat.",
      capabilities: [
        "Native Swift & SwiftUI architecture",
        "Offline-first local storage & data vaults",
        "iOS widgets, lock screen complications, dynamic island",
        "Complete App Store review & deployment handling",
        "Haptic feedback & micro-interaction design",
      ],
    },
    {
      id: "03",
      title: "Tools & Platforms",
      subtitle: "Software with a serious job to do.",
      desc: "Internal tooling, SaaS products, and custom operational platforms. Clean information architecture where high density meets effortless usability.",
      capabilities: [
        "SaaS platforms & administrative portals",
        "Custom APIs, webhooks & microservices",
        "Postgres, Prisma & edge database integration",
        "Role-based authentication & enterprise security",
        "Continuous deployment & CI/CD infrastructure",
      ],
    },
    {
      id: "04",
      title: "Automations & AI",
      subtitle: "The busywork, made to do itself.",
      desc: "Intelligent background workers, autonomous AI assistants, and bespoke operational glue that eliminate repetitive friction across your organization.",
      capabilities: [
        "Custom LLM agents & conversational tooling",
        "Automated data extraction & document processing",
        "Stripe, CRM & Slack ecosystem integrations",
        "Scheduled background tasks & cron workers",
        "Human-in-the-loop validation dashboards",
      ],
    },
    {
      id: "05",
      title: "Brand Identity",
      subtitle: "The part people remember.",
      desc: "Distinctive visual languages that survive outside the Figma canvas. From typographic marks and custom color physics to printed physical collateral.",
      capabilities: [
        "Logo marks, isometric monograms & emblems",
        "Typographic hierarchy & bespoke font pairings",
        "Product packaging & tactile print production",
        "Design systems & component tokenization",
        "Comprehensive brand guidelines",
      ],
    },
    {
      id: "06",
      title: "Rescue & Support",
      subtitle: "We do not disappear after launch.",
      desc: "Taking over stalled codebases, untangling legacy architectures, and providing ongoing art direction as your venture scales.",
      capabilities: [
        "Comprehensive code & security audits",
        "PageSpeed & Core Web Vitals optimization",
        "Embedded engineering sprints",
        "Ongoing art direction & feature extensions",
        "Production incident support",
      ],
    },
  ];

  return (
    <main id="content" className="pt-28 pb-32 px-6 md:px-14 bg-ink text-paper">
      {/* Header */}
      <header className="border-b border-paper/15 pb-16">
        <p className="eyebrow text-paper/55">
          <span className="idx-tag text-accent-on-ink">03</span> — capabilities &amp; scope
        </p>
        <h1 className="font-display mt-6 text-[clamp(44px,7.5vw,112px)] font-normal leading-[0.95] tracking-[-0.02em] md:font-thin">
          The Full <em className="italic text-accent-on-ink">Menu</em>.
        </h1>
        <p className="mt-8 max-w-[38em] text-[1.1rem] leading-relaxed text-paper/70 font-light">
          There are no account managers, no handoff silos, and no outsourced junior developers. The hands that design your system write the code that delivers it.
        </p>
      </header>

      {/* Services List */}
      <section className="py-20 divide-y divide-paper/15">
        {serviceDetails.map((service) => (
          <article key={service.id} className="py-16 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <span className="eyebrow text-accent-on-ink">{service.id} — capability</span>
              <h2 className="font-display mt-3 text-4xl md:text-5xl font-normal">
                {service.title}
              </h2>
              <p className="mt-3 text-sm text-paper/60">{service.subtitle}</p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-base md:text-lg text-paper/80 leading-relaxed max-w-[36em]">
                {service.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-paper/10">
                <h3 className="eyebrow text-paper/40 mb-4">Specific Deliverables</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-baseline gap-2 text-sm text-paper/70">
                      <span className="text-accent-on-ink select-none">+</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* How We Engage */}
      <section className="mt-16 p-8 md:p-14 border border-paper/15 rounded bg-paper/[0.02]">
        <p className="eyebrow text-paper/55">engagement models</p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl font-thin">
          Transparent, predictable collaboration.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="p-6 border border-paper/10 rounded bg-paper/[0.02]">
            <span className="eyebrow text-accent">01 · Sprint</span>
            <h3 className="font-display mt-3 text-2xl">2–4 Weeks</h3>
            <p className="mt-3 text-xs text-paper/60 leading-relaxed">
              Ideal for focused marketing sites, brand identity sprints, or single-feature MVPs. Fixed scope, fixed price, guaranteed launch date.
            </p>
          </div>

          <div className="p-6 border border-paper/10 rounded bg-paper/[0.02]">
            <span className="eyebrow text-accent">02 · Product Build</span>
            <h3 className="font-display mt-3 text-2xl">6–10 Weeks</h3>
            <p className="mt-3 text-xs text-paper/60 leading-relaxed">
              Full-scale web applications, SaaS dashboards, or native iOS apps from initial concept and UI design through backend build and App Store release.
            </p>
          </div>

          <div className="p-6 border border-paper/10 rounded bg-paper/[0.02]">
            <span className="eyebrow text-accent">03 · Studio Retainer</span>
            <h3 className="font-display mt-3 text-2xl">Monthly Partner</h3>
            <p className="mt-3 text-xs text-paper/60 leading-relaxed">
              Direct access to our studio for ongoing engineering, design iterations, and rapid feature ship cycles without internal hiring overhead.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-paper/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-paper/70">
            Have a project in mind? We respond within one working day.
          </p>
          <Link
            href="/contact"
            className="eyebrow border border-accent bg-accent px-6 py-4 text-paper hover:bg-paper hover:text-ink transition-colors font-semibold"
          >
            start a conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}
