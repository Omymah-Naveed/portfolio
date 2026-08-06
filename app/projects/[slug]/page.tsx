import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/resume";
import { LogoCover } from "@/components/LogoCover";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Omymah Naveed`,
    description: project.overview,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          {project.title}
        </h1>
        {project.subtitle ? (
          <p className="mt-2 text-lg text-slate-500">{project.subtitle}</p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {project.images.length > 0 ? (
        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.images[0]}
            alt={`${project.title} preview`}
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      ) : (
        <LogoCover title={project.title} size="hero" />
      )}

      <div className="grid gap-10 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            Overview
          </h2>
          <p className="leading-relaxed text-slate-400">{project.overview}</p>

          {project.highlights.length > 0 ? (
            <>
              <h2 className="mb-4 mt-10 text-xl font-semibold text-slate-100">
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm leading-relaxed text-slate-300">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>

        <aside>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Links
            </h3>
            <div className="flex flex-col gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
                >
                  View on GitHub
                </a>
              ) : null}
              {project.linkedinUrl ? (
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  View on LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </aside>
      </div>

      {project.images.length > 1 ? (
        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-100">
            Gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.slice(1).map((image, i) => {
              const caption = project.captions?.[i + 1];
              return (
                <div
                  key={image}
                  className="group/img overflow-hidden rounded-xl border border-white/10"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      alt={caption ?? `${project.title} screenshot ${i + 2}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                    />
                  </div>
                  {caption ? (
                    <p className="border-t border-white/10 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-300">
                      {caption}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      <nav className="mt-16 flex items-center justify-between gap-4 border-t border-white/10 pt-8">
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex max-w-[45%] flex-col"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Previous
          </span>
          <span className="mt-1 truncate text-sm font-semibold text-slate-200 transition-colors group-hover:text-cyan-300">
            {prev.title}
          </span>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="group flex max-w-[45%] flex-col items-end text-right"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Next
          </span>
          <span className="mt-1 truncate text-sm font-semibold text-slate-200 transition-colors group-hover:text-cyan-300">
            {next.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
