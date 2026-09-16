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
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Kott Studio Case Study`,
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

  return (
    <main id="content" className="pt-28 pb-32 px-6 md:px-14 bg-ink text-paper">
      {/* Back to Work link */}
      <div className="mb-8">
        <Link href="/work" className="eyebrow link-underline text-paper/60 hover:text-paper">
          ← back to all work
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="border-b border-paper/15 pb-12">
        <div className="flex items-baseline justify-between">
          <span className="eyebrow text-accent-on-ink">{project.id} / 06</span>
          <span className="eyebrow text-paper/60">{project.type} · {project.year}</span>
        </div>

        <h1 className="font-display mt-6 text-[clamp(44px,7.5vw,112px)] font-normal leading-[0.95] tracking-[-0.02em] md:font-thin">
          {project.title}
        </h1>

        <p className="mt-8 max-w-[42em] text-[clamp(18px,2vw,24px)] leading-relaxed text-paper/80 font-light">
          {project.summary}
        </p>

        {/* Project Meta Details Bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-paper/10">
          <div>
            <span className="eyebrow block text-paper/40">Client</span>
            <span className="mt-1 block text-sm font-medium">{project.client}</span>
          </div>
          <div>
            <span className="eyebrow block text-paper/40">Timeline</span>
            <span className="mt-1 block text-sm font-medium">{project.year}</span>
          </div>
          <div>
            <span className="eyebrow block text-paper/40">Deliverables</span>
            <span className="mt-1 block text-sm font-medium">{project.type}</span>
          </div>
          <div>
            <span className="eyebrow block text-paper/40">Live Site</span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm text-accent hover:underline font-medium"
              >
                visit live ↗
              </a>
            ) : (
              <span className="mt-1 block text-sm text-paper/50">Private / On-prem</span>
            )}
          </div>
        </div>
      </header>

      {/* Deep Dive Insights */}
      {project.details && project.details.length > 0 && (
        <section className="py-16 border-b border-paper/15">
          <h2 className="eyebrow text-paper/50 mb-6">Key Engineering &amp; Design Notes</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {project.details.map((detail, idx) => (
              <div key={idx} className="p-6 border border-paper/10 rounded bg-paper/[0.02]">
                <span className="eyebrow text-accent">0{idx + 1}</span>
                <p className="mt-3 text-sm text-paper/75 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Gallery of Project Images */}
      <section className="py-16">
        <h2 className="eyebrow text-paper/50 mb-8">Visual Showcase</h2>
        <div className="space-y-12">
          {project.images.map((imgSrc, idx) => (
            <figure
              key={idx}
              className="overflow-hidden rounded-md border border-paper/15 bg-paper/[0.02]"
            >
              <img
                src={imgSrc}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Next Project Footer */}
      <footer className="mt-20 pt-16 border-t border-paper/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="eyebrow text-paper/40">Next Case Study</span>
          <h3 className="font-display mt-2 text-3xl md:text-5xl font-normal hover:text-accent-on-ink transition-colors">
            <Link href={`/work/${nextProject.slug}`}>{nextProject.title} →</Link>
          </h3>
        </div>

        <Link
          href="/work"
          className="eyebrow border border-paper/30 px-6 py-4 text-paper hover:bg-paper hover:text-ink transition-colors"
        >
          browse all projects
        </Link>
      </footer>
    </main>
  );
}
