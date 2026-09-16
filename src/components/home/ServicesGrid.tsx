"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/kottData";

export function ServicesGrid() {
  return (
    <section id="services" className="relative bg-paper text-ink">
      <span aria-hidden="true" className="eyebrow absolute left-6 top-6 text-accent/60 md:left-14">
        +
      </span>
      <span aria-hidden="true" className="eyebrow absolute right-6 top-6 text-accent/60 md:right-14">
        +
      </span>

      <div className="px-6 py-24 md:px-14 md:py-32">
        <div className="grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 lg:grid-cols-12">
          {/* Main Hero Card */}
          <div className="flex flex-col justify-between gap-10 bg-paper p-7 md:p-10 lg:col-span-8">
            <p className="eyebrow text-muted">
              <span className="idx-tag text-accent">03</span> — start here
            </p>
            <div>
              <h2 className="font-display text-[clamp(32px,4.4vw,68px)] font-normal leading-[0.98] tracking-[-0.015em]">
                Anything, within <em className="italic text-accent">reason</em>.
              </h2>
              <p className="mt-5 max-w-[34em] text-[0.9rem] leading-relaxed text-muted">
                ( reason negotiable. ) websites, apps, tools, automations, brands: designed and built under one roof,
                so nothing gets lost between departments. there are no departments. partners, yes; departments, no.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`group flex flex-col gap-3 bg-paper p-7 transition-colors duration-300 hover:bg-paper-dim md:p-8 ${
                service.colSpan || "lg:col-span-4"
              }`}
            >
              <span className="eyebrow text-muted transition-colors duration-300 group-hover:text-accent">
                {service.id}
              </span>
              <h3 className="font-display text-[clamp(22px,2.4vw,38px)] font-normal leading-[1.02] tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-[0.85rem] leading-relaxed text-muted">{service.subtitle}</p>

              {service.tags && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="eyebrow border border-ink/25 px-3 py-2 text-ink-soft bg-paper transition-colors group-hover:border-ink/40"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-baseline justify-end gap-3">
          <Link className="eyebrow link-underline text-ink/70" href="/services">
            the full menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
