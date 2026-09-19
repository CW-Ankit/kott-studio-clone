import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Kott Studio",
  description:
    "An independent studio of design & code. Est. 2020. Los Angeles, New York, Istanbul, Zurich, Kyiv, San Juan.",
};

export default function AboutPage() {
  return (
    <main id="content" className="selection:bg-accent selection:text-paper">
      {/* 00 Hero */}
      <section className="bg-ink px-6 pb-24 pt-40 text-paper md:px-14 md:pb-32">
        <p className="eyebrow text-paper/55">the studio — est. 2020 · six cities, one room</p>
        <h1 className="font-display mt-8 text-[clamp(56px,11vw,170px)] font-thin leading-[0.92]">
          About.
        </h1>
        <p className="mt-8 text-[0.85rem] leading-relaxed text-paper/55">
          ( the page about who made the pages )
        </p>
      </section>

      {/* 01 The Studio: "An independent studio of design & code" */}
      <section className="relative bg-paper text-ink">
        <span aria-hidden="true" className="eyebrow absolute left-6 top-6 text-ink/30 md:left-14 select-none">
          +
        </span>
        <span aria-hidden="true" className="eyebrow absolute right-6 top-6 text-ink/30 md:right-14 select-none">
          +
        </span>

        <div className="px-6 py-28 md:px-14 md:py-36">
          <div>
            <p className="eyebrow text-muted">
              <span className="idx-tag text-accent">01</span> — the studio
            </p>
            <h2 className="font-display mt-7 max-w-[15em] text-[clamp(30px,4vw,58px)] leading-[1.08]">
              An independent studio of <em className="italic">design &amp; code</em>.
            </h2>
            <p className="mt-9 max-w-[34em] text-[0.85rem] leading-relaxed text-muted">
              that&apos;s the press-release version. plainly:
            </p>
            <p className="font-display mt-5 max-w-[24em] text-[clamp(20px,1.8vw,27px)] italic leading-[1.3] text-ink-soft">
              we make things look like they mean it, then we build them, so they do.
            </p>
          </div>

          <div>
            <p className="eyebrow mt-16 text-muted">the facts, printed</p>
            <dl className="mt-6 border border-ink/25">
              <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr] border-b border-ink/25">
                <dt className="eyebrow px-4 pt-5 text-muted md:border-r md:border-ink/25 md:px-6 md:py-6">
                  founded
                </dt>
                <dd className="px-4 pb-5 pt-2 md:px-6 md:py-6">
                  <p className="text-[0.9rem] leading-relaxed text-ink-soft">
                    2020, and still warm.
                  </p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr] border-b border-ink/25">
                <dt className="eyebrow px-4 pt-5 text-muted md:border-r md:border-ink/25 md:px-6 md:py-6">
                  shape
                </dt>
                <dd className="px-4 pb-5 pt-2 md:px-6 md:py-6">
                  <p className="max-w-[38em] text-[0.9rem] leading-relaxed text-ink-soft">
                    small and senior, no agency layers. the people you brief are the people who make the thing.
                  </p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr] border-b border-ink/25">
                <dt className="eyebrow px-4 pt-5 text-muted md:border-r md:border-ink/25 md:px-6 md:py-6">
                  range
                </dt>
                <dd className="px-4 pb-5 pt-2 md:px-6 md:py-6">
                  <p className="text-[0.9rem] leading-relaxed text-ink-soft">
                    websites · apps · tools · automations · brands —{" "}
                    <Link className="link-underline text-ink/70" href="/services">
                      the full menu →
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr] border-b border-ink/25">
                <dt className="eyebrow px-4 pt-5 text-muted md:border-r md:border-ink/25 md:px-6 md:py-6">
                  found in
                </dt>
                <dd className="px-4 pb-5 pt-2 md:px-6 md:py-6">
                  <ul className="flex flex-wrap gap-x-2 gap-y-2">
                    <li className="eyebrow border border-ink/25 px-3 py-2 text-ink-soft">
                      los angeles
                    </li>
                    <li className="eyebrow border border-ink/25 px-3 py-2 text-ink-soft">
                      new york
                    </li>
                    <li className="eyebrow border border-ink/25 px-3 py-2 text-ink-soft">
                      istanbul
                    </li>
                    <li className="eyebrow border border-ink/25 px-3 py-2 text-ink-soft">
                      zurich
                    </li>
                    <li className="eyebrow border border-ink/25 px-3 py-2 text-ink-soft">
                      kyiv
                    </li>
                    <li className="eyebrow border border-ink/25 px-3 py-2 text-ink-soft">
                      san juan
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr] border-b border-ink/25">
                <dt className="eyebrow px-4 pt-5 text-muted md:border-r md:border-ink/25 md:px-6 md:py-6">
                  proof
                </dt>
                <dd className="px-4 pb-5 pt-2 md:px-6 md:py-6">
                  <p className="text-[0.9rem] leading-relaxed text-ink-soft">
                    <Link className="link-underline text-ink/70" href="/work">
                      the work
                    </Link>{" "}
                    ·{" "}
                    <Link className="link-underline text-ink/70" href="/#lab">
                      the lab
                    </Link>{" "}
                    ·{" "}
                    <Link className="link-underline text-ink/70" href="/services">
                      live in the stores
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr]">
                <dt className="eyebrow px-4 pt-5 text-muted md:border-r md:border-ink/25 md:px-6 md:py-6">
                  answers
                </dt>
                <dd className="px-4 pb-5 pt-2 md:px-6 md:py-6">
                  <p className="text-[0.9rem] leading-relaxed text-ink-soft">
                    <a
                      href="mailto:hello@kott.studio"
                      className="group link-underline text-ink/80"
                    >
                      <span data-glitch="hello@kott.studio" className="glitch">
                        hello@kott.studio
                      </span>
                    </a>
                    , usually within two days.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 02 The Fine Print: Awards & Ethics */}
      <section className="bg-ink text-paper">
        <div className="px-6 py-24 md:px-14 md:py-32">
          <p className="eyebrow text-paper/55">
            <span className="idx-tag text-accent-on-ink">02</span> — the fine print
          </p>
          <div>
            <h2 className="font-display mt-8 max-w-[16em] text-[clamp(28px,4vw,60px)] font-normal leading-[1.08] md:font-thin">
              Clear scope, honest deadlines, and a little{" "}
              <em className="italic">comfortable silence</em> while the work dries.
            </h2>
            <p className="mt-7 text-[0.9rem] leading-relaxed text-paper/55">
              everything else is negotiable. ( that part isn&apos;t. )
            </p>
          </div>

          <ul className="mt-16 flex flex-col gap-4 md:flex-row md:gap-12">
            <li className="eyebrow border-t border-line-paper pt-4 text-paper/80 md:flex-1">
              site of the day — css winner
            </li>
            <li className="eyebrow border-t border-line-paper pt-4 text-paper/80 md:flex-1">
              special kudos — css design awards
            </li>
            <li className="eyebrow border-t border-line-paper pt-4 text-paper/55 md:flex-1">
              the rest is on the work, where it belongs
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
