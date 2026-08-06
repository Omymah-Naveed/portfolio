import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";
import { LogoCover } from "./LogoCover";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="Real-world projects I have designed and built, end-to-end."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              {project.images.length > 0 ? (
                <div className="relative aspect-video overflow-hidden border-b border-white/10">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <LogoCover title={project.title} />
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {project.title}
                    </h3>
                    {project.subtitle ? (
                      <p className="mt-0.5 text-sm text-slate-500">
                        {project.subtitle}
                      </p>
                    ) : null}
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 transition-transform group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
