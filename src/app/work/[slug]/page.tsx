import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { WORK_PROJECTS } from "@/data/kottData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WORK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = WORK_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Case — Kott Studio" };

  return {
    title: `${project.title} — case — Kott Studio`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = WORK_PROJECTS.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = WORK_PROJECTS[currentIndex];
  const nextProject = WORK_PROJECTS[(currentIndex + 1) % WORK_PROJECTS.length];

  // Images after the cover plate are treated as editorial spreads
  const spreadImages = project.images.filter((img) => img !== project.cover);

  return (
    <main id="content" className="bg-ink pt-28 pb-0 text-paper md:pt-36">
      {/* Editorial Header */}
      <header className="px-6 md:px-14">
        <p className="eyebrow text-paper/55">
          <Link className="link-underline text-paper/70 hover:text-paper" href="/work">
            /work
          </Link>{" "}
          · case {project.id}
        </p>

        <h1 className="font-display mt-8 text-[clamp(52px,10vw,150px)] font-thin leading-[0.92]">
          {project.title}
          <span className="text-accent brightness-150 saturate-150">.</span>
        </h1>

        <p className="font-display mt-6 max-w-[24em] text-[clamp(20px,2vw,30px)] italic leading-[1.2] text-paper/70">
          {project.headline || project.summary}
        </p>

        {/* Structured Definition List Matrix */}
        <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-paper/20 pt-6 md:mt-16 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-3">
            <dt className="eyebrow text-paper/55">discipline</dt>
            <dd className="mt-2 text-[0.9rem] text-paper/80 font-light">{project.type}</dd>
          </div>

          <div className="md:col-span-2">
            <dt className="eyebrow text-paper/55">year</dt>
            <dd className="mt-2 text-[0.9rem] text-paper/80 font-light">{project.year}</dd>
          </div>

          <div className="md:col-span-5">
            <dt className="eyebrow text-paper/55">printed matter</dt>
            <dd className="mt-2 text-[0.9rem] leading-relaxed text-paper/80 font-light">
              {project.printedMatter || project.role}
            </dd>
          </div>

          <div className="md:col-span-2 md:text-right">
            <dt className="sr-only">full case</dt>
            <dd>
              {project.behanceUrl ? (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow link-underline text-paper/70 hover:text-accent-on-ink"
                >
                  full case ↗
                </a>
              ) : project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow link-underline text-paper/70 hover:text-accent-on-ink"
                >
                  live site ↗
                </a>
              ) : null}
            </dd>
          </div>
        </dl>
      </header>

      {/* Hero Plate Showcase */}
      <div className="mt-14 px-6 md:mt-20 md:px-14">
        <div className="relative mx-auto md:w-[62%]">
          <img
            alt={`${project.title} — cover`}
            width={1400}
            height={1215}
            src={project.cover}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* The Situation (2-Column Editorial Split) */}
      <div className="grid gap-8 px-6 py-20 md:grid-cols-12 md:gap-x-8 md:gap-y-10 md:px-14 md:py-28">
        <p className="eyebrow text-paper/55 md:col-span-4">the situation</p>
        <div className="md:col-span-8">
          {project.situation && project.situation.length > 0 ? (
            project.situation.map((para, idx) => (
              <p
                key={idx}
                className={`max-w-[38em] text-[1.05rem] leading-relaxed text-paper/75 font-light ${
                  idx > 0 ? "mt-6" : ""
                }`}
              >
                {para}
              </p>
            ))
          ) : (
            <p className="max-w-[38em] text-[1.05rem] leading-relaxed text-paper/75 font-light">
              {project.summary}
            </p>
          )}
        </div>
      </div>

      {/* Editorial Image Spreads */}
      {spreadImages.length > 0 && (
        <div className="grid gap-6 px-6 pb-20 md:gap-10 md:px-14 md:pb-28 md:grid-cols-2">
          {spreadImages.map((spread, idx) => (
            <div key={idx} className="relative">
              <img
                src={spread}
                alt={`${project.title} — spread ${idx + 1}`}
                loading="lazy"
                width={1400}
                height={1650}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Next Case Footer Banner */}
      <footer className="border-t border-paper/20">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group grid items-center gap-y-10 px-6 py-16 md:grid-cols-12 md:gap-x-8 md:px-14 md:py-24"
        >
          <div className="md:col-span-7">
            <p className="eyebrow text-paper/55">next case</p>
            <p className="font-display mt-4 text-[clamp(40px,7vw,110px)] font-thin leading-[0.95] text-paper">
              {nextProject.title}
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                {" "}→
              </span>
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="group/plate relative">
              <div className="relative overflow-hidden">
                <img
                  alt={`${nextProject.title} — cover`}
                  loading="lazy"
                  width={820}
                  height={615}
                  src={nextProject.cover}
                  className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover/plate:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 border border-accent opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/plate:opacity-100"
                />
              </div>
            </div>
          </div>
        </Link>
      </footer>
    </main>
  );
}
