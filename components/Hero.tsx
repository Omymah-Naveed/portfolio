import Image from "next/image";
import { profile } from "@/data/resume";
import {
  DownloadIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -right-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for opportunities
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-100 sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-200 sm:text-2xl">
            {profile.role} · {profile.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
            >
              View Projects
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <LocationIcon className="h-4 w-4" />
              {profile.location}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/25 via-teal-500/15 to-emerald-500/25 blur-2xl"
            />
            <Image
              src="/MyLogo.png"
              alt={`${profile.name} logo`}
              width={364}
              height={208}
              priority
              className="relative h-auto w-64 object-contain drop-shadow-2xl sm:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
