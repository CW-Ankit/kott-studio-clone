import React, { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { SoundDetails } from "@/components/common/SoundDetails";

export const metadata: Metadata = {
  title: "Services — Kott Studio",
  description:
    "Websites, apps, tools, automations, brands: designed and built under one roof.",
};

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  desc: string;
  list: string[];
  contactQuery: string;
}

const SERVICES_MENU: ServiceItem[] = [
  {
    id: "01",
    title: "Websites",
    subtitle: "designed, built, launched",
    tags: [
      "landing pages",
      "corporate & e-commerce",
      "Next.js / React builds",
      "motion & interactions",
    ],
    desc: "from one strong page to a full store. design and code by the same team, live on a real domain.",
    list: [
      "landing / conversion page",
      "marketing site",
      "award-winning motion",
    ],
    contactQuery: "websites",
  },
  {
    id: "02",
    title: "Apps",
    subtitle: "same care, app-store sized",
    tags: [
      "iOS & Android",
      "React Native / Flutter",
      "design systems",
      "store release",
    ],
    desc: "flows, screens and the build itself, shipped to the stores, not to a handoff doc.",
    list: [
      "native iOS build",
      "app store launch pipeline",
      "product design",
    ],
    contactQuery: "apps",
  },
  {
    id: "03",
    title: "Tools & platforms",
    subtitle: "software with a job",
    tags: [
      "SaaS & dashboards",
      "internal tools",
      "APIs & integrations",
      "production hardening",
    ],
    desc: "the software your team actually lives in. we design it, build it, and keep it standing.",
    list: [
      "web app / dashboard",
      "supabase backend",
      "design system",
    ],
    contactQuery: "tools",
  },
  {
    id: "04",
    title: "Automations",
    subtitle: "the busywork, made to do itself",
    tags: [
      "AI agents & assistants",
      "workflow automation",
      "CRM / billing / auth glue",
      "internal bots",
    ],
    desc: "agents and workflows between the tools you already pay for, so the boring parts run themselves.",
    list: [
      "workflow automation",
      "llm features in your product",
      "custom ai agents",
    ],
    contactQuery: "automations",
  },
  {
    id: "05",
    title: "Brands",
    subtitle: "the part people remember",
    tags: [
      "strategy & positioning",
      "identity & wordmarks",
      "packaging",
      "decks & social systems",
    ],
    desc: "identity that survives contact with real life: cups, decks, feeds, print.",
    list: [
      "brand & identity system",
      "guidelines & asset kit",
      "design audit / discovery",
    ],
    contactQuery: "brands",
  },
  {
    id: "06",
    title: "Rescue & support",
    subtitle: "we do not disappear after launch",
    tags: [
      "project recovery",
      "code & design review",
      "embedded support",
      "ongoing art direction",
    ],
    desc: "stalled roadmap, messy middle, post-launch drift: we pick things up where they are.",
    list: [
      "keep: a site, looked after",
      "grow: plus a page or campaign a month",
      "product care: a live app or platform",
      "embedded, per week",
      "audit / discovery sprint",
    ],
    contactQuery: "rescue",
  },
];

const COST_QUESTIONS = [
  {
    q: "How much does a website cost?",
    a: "It depends on how much site there is. A single conversion page, a full marketing site and an award-tier motion build are three different jobs, and the number follows the scope rather than a list. The price is set after one call and put in writing before anything starts.",
  },
  {
    q: "How much does a brand identity cost?",
    a: "By how far the system has to reach. A wordmark and a core kit is one job; strategy and positioning, packaging, and the deck and social systems that have to survive contact with real life is a larger one. One call is enough to tell which you need, and the price is fixed in writing after it.",
  },
  {
    q: "How much does it cost to build an app?",
    a: "By the size of the build, and by what has to be in the first release. Cross-platform work in React Native or Flutter is quoted the same way as native, and the quote covers getting it into the store rather than handing over a document. Apps are the largest thing on the menu.",
  },
  {
    q: "What does a web app, dashboard or internal tool cost?",
    a: "Tools are priced on surface area: how many screens, how much backend, and whether there is a design system to build or one to work inside. Automations sit at the cheaper end of the same work, because a workflow or an LLM feature inside a product you already have is a smaller thing than a platform.",
  },
  {
    q: "What is the cheapest way to start working with you?",
    a: "An audit or discovery sprint, or a single landing page. Both are real engagements with a written scope, and both are a reasonable way to find out how the studio works before committing to a larger build.",
  },
  {
    q: "Is the price fixed?",
    a: "Yes, once it is set. The quote comes after one call, goes in writing before any work begins, and does not move unless the scope does. There is no hourly meter running underneath it. The studio does not publish a price list, so there is no figure sitting on the site to be held to before anyone has described the job.",
  },
  {
    q: "Do you offer ongoing monthly support?",
    a: "Yes, in three tiers: keeping a site looked after, the same plus a page or a campaign each month, and care for a live app or platform. Embedded support is available by the week when a team needs someone inside it.",
  },
];

const STEPS = [
  {
    id: "01",
    title: "Discover",
    desc: "we read the code, the roadmap and the room before promising anything.",
  },
  {
    id: "02",
    title: "Plan",
    desc: "a short backlog with honest dates: work broken into slices you can review and own.",
  },
  {
    id: "03",
    title: "Ship",
    desc: "incremental releases from week one. the plan adapts; the shipping does not stop.",
  },
  {
    id: "04",
    title: "Handoff",
    desc: "documentation, clean repos and momentum you keep after we leave.",
  },
];

export default function ServicesPage() {
  return (
    <main id="content" className="bg-ink text-paper selection:bg-accent selection:text-paper">
      {/* 00 Hero Section */}
      <section className="bg-ink px-6 pb-24 pt-40 text-paper md:px-14 md:pb-32">
        <p className="eyebrow text-paper/55">services — the full menu</p>
        <h1 className="font-display mt-8 text-[clamp(56px,11vw,170px)] font-thin leading-[0.92]">
          Services.
        </h1>
        <p className="mt-8 max-w-[36em] text-[0.85rem] leading-relaxed text-paper/55">
          ( websites, apps, tools, automations, brands. we keep looking for the thing we can&apos;t do, no luck so far )
        </p>
      </section>

      {/* 01 The Menu: One roof, no handoffs */}
      <section className="relative bg-paper text-ink">
        <span aria-hidden="true" className="eyebrow absolute left-6 top-6 text-ink/30 md:left-14 select-none">
          +
        </span>
        <span aria-hidden="true" className="eyebrow absolute right-6 top-6 text-ink/30 md:right-14 select-none">
          +
        </span>

        <div className="px-6 py-24 md:px-14 md:py-32">
          <p className="eyebrow text-muted">
            <span className="idx-tag text-accent">01</span> — the menu
          </p>
          <div>
            <h2 className="font-display mt-7 max-w-[16em] text-[clamp(28px,3.6vw,54px)] leading-[1.05]">
              One roof, no <em className="italic">handoffs</em>.
            </h2>
          </div>
          <p className="mt-5 max-w-[34em] text-[0.9rem] leading-relaxed text-muted">
            every line covers the drawing and the shipping. you brief once; nothing gets lost in a handoff, because there isn&apos;t one.
          </p>

          <div className="mt-10">
            <div className="border border-ink/25">
              {SERVICES_MENU.map((item, idx) => {
                const isLast = idx === SERVICES_MENU.length - 1;
                return (
                  <SoundDetails
                    key={item.id}
                    className={`group ${!isLast ? "border-b border-ink/25" : ""}`}
                  >
                    <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-6 px-4 py-5 transition-colors duration-300 hover:bg-paper-dim [&::-webkit-details-marker]:hidden md:px-6 md:py-6">
                      <span className="eyebrow w-10 shrink-0 text-muted transition-colors duration-300 group-hover:text-accent">
                        {item.id}
                      </span>
                      <span className="font-display border-l border-ink/25 pl-6 text-[clamp(22px,2.6vw,38px)] leading-none tracking-[-0.015em] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                        {item.title}
                      </span>
                      <span className="ml-auto inline-flex items-baseline gap-3 md:gap-5">
                        <span className="hidden text-[0.8rem] text-muted md:inline">
                          {item.subtitle}
                        </span>
                        <span
                          aria-hidden="true"
                          className="font-display text-2xl leading-none text-muted transition-[transform,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent group-open:rotate-45 group-open:text-accent select-none"
                        >
                          +
                        </span>
                      </span>
                    </summary>

                    <div className="grid gap-6 px-4 pb-7 md:grid-cols-12 md:px-6 md:pl-[6.5rem]">
                      <ul className="flex flex-wrap content-start items-start gap-x-2 gap-y-2 self-start md:col-span-7">
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className="eyebrow border border-ink/25 px-3 py-2 text-ink-soft"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <div className="md:col-span-5">
                        <p className="max-w-[30em] text-[0.8rem] leading-relaxed text-muted">
                          {item.desc}
                        </p>
                        <ul className="mt-5 flex max-w-[30em] flex-col gap-y-1.5 border-t border-ink/15 pt-4 text-[0.8rem] leading-snug text-muted">
                          {item.list.map((listItem) => (
                            <li key={listItem}>{listItem}</li>
                          ))}
                        </ul>
                        <Link
                          className="eyebrow link-underline mt-6 inline-block text-accent"
                          href={`/contact?about=${item.contactQuery}`}
                        >
                          ask about {item.title.toLowerCase()} →
                        </Link>
                      </div>
                    </div>
                  </SoundDetails>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 02 Before You Ask: What it costs */}
      <section className="border-t border-line bg-paper text-ink">
        <div className="px-6 py-20 md:px-14 md:py-24">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="eyebrow text-muted">
              <span className="idx-tag text-accent">02</span> — before you ask
            </p>
            <Link className="eyebrow link-underline text-ink-soft" href="/faq">
              every question →
            </Link>
          </div>
          <div>
            <h2 className="font-display mt-7 max-w-[16em] text-[clamp(28px,3.6vw,54px)] leading-[1.05]">
              What it <em className="italic">costs</em>.
            </h2>
          </div>

          <div className="mt-10">
            <div className="border border-ink/25">
              {COST_QUESTIONS.map((item, idx) => {
                const isLast = idx === COST_QUESTIONS.length - 1;
                return (
                  <SoundDetails
                    key={item.q}
                    className={`group ${!isLast ? "border-b border-ink/25" : ""}`}
                  >
                    <summary className="flex cursor-pointer list-none items-baseline gap-x-6 px-4 py-5 transition-colors duration-300 hover:bg-paper-dim [&::-webkit-details-marker]:hidden md:px-6 md:py-6">
                      <span className="font-display max-w-[26em] text-[clamp(17px,1.9vw,26px)] leading-[1.15] tracking-[-0.01em] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-display ml-auto shrink-0 text-2xl leading-none text-muted transition-[transform,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent group-open:rotate-45 group-open:text-accent select-none"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-7 md:px-6">
                      <p className="max-w-[44em] text-[0.85rem] leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </div>
                  </SoundDetails>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 03 How It Runs: No secret sauce */}
      <section className="border-t border-line bg-paper text-ink">
        <div className="px-6 py-24 md:px-14 md:py-32">
          <p className="eyebrow text-muted">
            <span className="idx-tag text-accent">03</span> — how it runs
          </p>
          <div>
            <h2 className="font-display mt-7 max-w-[16em] text-[clamp(28px,3.6vw,54px)] leading-[1.05]">
              No <em className="italic">secret sauce</em>.
            </h2>
          </div>

          <div className="mt-12 grid gap-y-10 md:grid-cols-4 md:gap-y-0">
            {STEPS.map((step) => (
              <div key={step.id}>
                <div className="group h-full border-l border-ink/25 pl-5 transition-colors duration-300 hover:border-accent md:min-h-[13em] md:pr-8">
                  <p className="font-display text-[clamp(30px,3vw,46px)] font-thin leading-none text-ink/20 transition-colors duration-300 group-hover:text-accent">
                    {step.id}
                  </p>
                  <h3 className="font-display mt-4 text-[clamp(22px,2.2vw,32px)] leading-none">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[24em] text-[0.85rem] leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Proof: Live in the stores */}
      <section className="bg-ink text-paper">
        <div className="px-6 py-24 md:px-14 md:py-32">
          <p className="eyebrow text-paper/55">
            <span className="idx-tag text-accent-on-ink">04</span> — proof, downloadable
          </p>
          <div>
            <h2 className="font-display mt-7 max-w-[14em] text-[clamp(30px,4.4vw,68px)] font-normal leading-[1.02] md:font-thin">
              Live in the <em className="italic">stores</em>.
            </h2>
          </div>
          <p className="mt-6 max-w-[36em] text-[0.9rem] leading-relaxed text-paper/60">
            we don&apos;t hand off a deck. we ship. the apps we&apos;ve built are on the App Store and Google Play right now; the screens, and the rest of the proof, live in the work.
          </p>
          <div className="mt-10 flex flex-wrap items-baseline justify-between gap-3">
            <span className="eyebrow text-paper/55">
              ( engineering with our partners at{" "}
              <a
                href="https://echopersona.com"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-accent-on-ink"
              >
                echopersona llc ↗
              </a>{" "}
              )
            </span>
            <Link className="eyebrow link-underline text-paper/70" href="/work">
              see the apps →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 Start with one letter: Contact Section */}
      <Suspense fallback={<div className="h-96 bg-ink" />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}
