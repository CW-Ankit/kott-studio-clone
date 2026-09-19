import React from "react";
import { Metadata } from "next";
import { FAQ_ITEMS } from "@/data/kottData";
import { ContactForm } from "@/components/contact/ContactForm";
import { SoundDetails } from "@/components/common/SoundDetails";

export const metadata: Metadata = {
  title: "FAQ — Kott Studio",
  description:
    "The things people ask before they write to us, answered plainly.",
};

interface FaqChapter {
  id: string;
  category: string;
  num: string;
  title: string;
  desc: string;
}

const FAQ_CHAPTERS: FaqChapter[] = [
  {
    id: "what-we-do",
    category: "01 — what we do",
    num: "01",
    title: "What we do",
    desc: "( the short version, before the money )",
  },
  {
    id: "cost",
    category: "02 — what it costs",
    num: "02",
    title: "What it costs",
    desc: "( what the number depends on, and when you get it in writing )",
  },
  {
    id: "process",
    category: "03 — how it runs",
    num: "03",
    title: "How it runs",
    desc: "( no secret sauce )",
  },
  {
    id: "working-together",
    category: "04 — working together",
    num: "04",
    title: "Working together",
    desc: "( the parts people ask about after the money )",
  },
];

export default function FaqPage() {
  return (
    <main id="content" className="bg-ink text-paper selection:bg-accent selection:text-paper">
      {/* 00 Hero Section */}
      <section className="bg-ink px-6 pb-24 pt-40 text-paper md:px-14 md:pb-32">
        <p className="eyebrow text-paper/55">faq — asked before the call</p>
        <h1 className="font-display mt-8 text-[clamp(56px,11vw,170px)] font-thin leading-[0.92]">
          Questions.
        </h1>
        <p className="mt-8 max-w-[36em] text-[0.85rem] leading-relaxed text-paper/55">
          ( the things people ask before they write to us, answered plainly )
        </p>
      </section>

      {/* 4 Chapters */}
      {FAQ_CHAPTERS.map((chap, chapIdx) => {
        const items = FAQ_ITEMS.filter((item) => item.category === chap.category);
        const isFirst = chapIdx === 0;

        return (
          <section
            key={chap.id}
            id={chap.id}
            className={`bg-paper text-ink ${!isFirst ? "border-t border-line" : ""}`}
          >
            <div className="px-6 py-20 md:px-14 md:py-28">
              <p className="eyebrow text-muted">
                <span className="idx-tag text-accent">{chap.num}</span> — {chap.title.toLowerCase()}
              </p>
              <div>
                <h2 className="font-display mt-7 max-w-[16em] text-[clamp(28px,3.6vw,54px)] leading-[1.05]">
                  {chap.title}
                </h2>
              </div>
              <p className="mt-5 max-w-[34em] text-[0.85rem] leading-relaxed text-muted">
                {chap.desc}
              </p>

              <div className="mt-10">
                <div className="border border-ink/25">
                  {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;
                    return (
                      <SoundDetails
                        key={item.question}
                        className={`group ${!isLast ? "border-b border-ink/25" : ""}`}
                      >
                        <summary className="flex cursor-pointer list-none items-baseline gap-x-6 px-4 py-5 transition-colors duration-300 hover:bg-paper-dim [&::-webkit-details-marker]:hidden md:px-6 md:py-6">
                          <span className="font-display max-w-[26em] text-[clamp(17px,1.9vw,26px)] leading-[1.15] tracking-[-0.01em] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                            {item.question}
                          </span>
                          <span
                            aria-hidden="true"
                            className="font-display ml-auto shrink-0 text-2xl leading-none text-muted transition-[transform,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent group-open:rotate-45 group-open:text-accent select-none"
                          >
                            +
                          </span>
                        </summary>
                        <div className="px-4 pb-7 md:px-6">
                          <p className="max-w-[48em] text-[0.85rem] leading-relaxed text-muted">
                            {item.answer}
                          </p>
                        </div>
                      </SoundDetails>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Chapter 05: Still wondering? */}
      <section className="border-t border-paper/15 bg-ink text-paper">
        <div className="px-6 pb-20 pt-24 md:px-14 md:pb-24 md:pt-28">
          <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-[var(--gutter)]">
            <div className="md:col-span-5">
              <div>
                <p className="eyebrow text-paper/55">
                  <span className="idx-tag text-accent-on-ink">05</span> — still wondering?
                </p>
                <h2 className="font-display max-w-[12em] text-balance text-[clamp(34px,5.4vw,84px)] font-normal leading-[0.98] md:font-thin mt-6">
                  Still <em className="italic text-accent-on-ink">wondering</em>?
                </h2>
                <p className="mt-8 max-w-[30em] text-[0.9rem] leading-relaxed text-paper/60 font-light">
                  a few honest lines about where you&apos;re headed. we&apos;ll answer with what it needs, usually within two days.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 md:self-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
