import { profile } from "@/data/resume";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-cyan-300"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-cyan-300"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
