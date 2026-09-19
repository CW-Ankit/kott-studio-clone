import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { JOURNAL_POSTS } from "@/data/kottData";
import { JournalPoster } from "@/components/common/JournalPoster";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNAL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Journal — Kott Studio" };

  return {
    title: `${post.title} — Kott Studio`,
    description: post.excerpt,
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = JOURNAL_POSTS.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const post = JOURNAL_POSTS[currentIndex];
  const nextPost = JOURNAL_POSTS[(currentIndex + 1) % JOURNAL_POSTS.length];

  return (
    <main id="content" className="bg-[#f5f5f3] text-[#101113] min-h-screen">
      {/* Header */}
      <header className="px-6 pt-36 pb-12 md:px-14 md:pt-48">
        <div>
          <Link
            href="/journal"
            className="eyebrow link-underline text-[#101113]/55 hover:text-[#101113] transition-colors"
          >
            ← Journal
          </Link>
        </div>

        <div className="mt-10">
          <h1 className="font-display text-[clamp(2.4rem,7vw,5rem)] font-light leading-[1.02] text-[#101113]">
            {post.title}
          </h1>

          <p className="font-display mt-7 max-w-[36ch] text-[clamp(1.15rem,2.1vw,1.55rem)] font-light leading-snug text-[#101113]/70">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Main Grid: Sticky Aside with Poster + Prose Body */}
      <div className="grid grid-cols-4 gap-x-6 gap-y-10 px-6 pt-8 pb-20 md:grid-cols-12 md:gap-x-8 md:px-14 md:pt-10 md:pb-28 border-t border-[#101113]/10">
        {/* Sticky Left Column: Poster & Metadata */}
        <aside className="order-1 col-span-4 md:col-span-4 md:col-start-1 md:self-start md:sticky md:top-28">
          <div className="max-w-[15rem] md:max-w-none overflow-hidden rounded border border-[#101113]/15 shadow-sm">
            <JournalPoster
              number={post.number || "01"}
              category={post.category || "Brand"}
              className="h-auto w-full"
            />
          </div>

          <dl className="mt-6 flex flex-row flex-wrap gap-x-10 gap-y-4 border-t border-[#101113]/15 pt-4 md:flex-col md:gap-y-5">
            <div>
              <dt className="eyebrow text-[#101113]/50">Filed under</dt>
              <dd className="eyebrow mt-1.5 text-accent font-medium">
                {post.category || "Studio"}
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-[#101113]/50">Published</dt>
              <dd className="eyebrow mt-1.5 text-[#101113] font-light">{post.date}</dd>
            </div>

            <div>
              <dt className="eyebrow text-[#101113]/50">Reading time</dt>
              <dd className="eyebrow mt-1.5 text-[#101113] font-light">
                {post.readingTime}
              </dd>
            </div>
          </dl>
        </aside>

        {/* Right Column: Article Prose */}
        <article className="order-2 col-span-4 md:col-span-7 md:col-start-6">
          <div className="max-w-[42em] space-y-6 text-[1.05rem] leading-relaxed text-[#101113]/85 font-light">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="first-of-type:text-[1.12rem] first-of-type:leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>

      {/* Next Read Navigation Banner */}
      <section className="border-t border-[#101113]/15">
        <Link
          href={`/journal/${nextPost.slug}`}
          className="group flex items-center justify-between gap-6 px-6 py-12 md:px-14 md:py-16 transition-colors hover:bg-[#101113]/[0.03]"
        >
          <span className="eyebrow shrink-0 text-[#101113]/50">Next read</span>
          <span className="font-display min-w-0 flex-1 text-right text-[clamp(1.5rem,3.2vw,2.5rem)] font-light leading-[1.05] text-[#101113] transition-colors duration-300 group-hover:text-accent">
            {nextPost.title}
          </span>
          <span className="hidden text-2xl text-accent transition-transform duration-300 group-hover:translate-x-2 sm:block">
            →
          </span>
        </Link>
      </section>

      {/* Direct Contact Footer Bar */}
      <section id="contact" className="border-t border-[#101113]/15">
        <div className="flex flex-col gap-5 px-6 py-12 md:flex-row md:items-baseline md:justify-between md:px-14 md:py-14">
          <p className="font-display text-[clamp(1.4rem,3.2vw,2.1rem)] font-light leading-tight text-[#101113]">
            Have a project in mind?
          </p>
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <a
              href="mailto:hello@kott.studio"
              className="eyebrow link-underline text-[#101113] hover:text-accent transition-colors"
            >
              hello@kott.studio
            </a>
            <Link
              href="/contact"
              className="eyebrow link-underline text-accent font-medium hover:opacity-80 transition-opacity"
            >
              start a project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
