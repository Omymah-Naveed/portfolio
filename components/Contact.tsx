import { profile } from "@/data/resume";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from "./Icons";
import { SectionHeading } from "./SectionHeading";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    icon: GitHubIcon,
  },
  {
    label: "Location",
    value: profile.location,
    href: undefined,
    icon: LocationIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's work together"
                description="Have a project in mind, or want to collaborate? My inbox is always open — I'll get back to you as soon as I can."
              />
              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
              >
                <DownloadIcon className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <ul className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-700 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-slate-200">
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                const classes =
                  "flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition-colors hover:border-cyan-400/40";
                return item.href ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={classes}
                    >
                      {content}
                    </a>
                  </li>
                ) : (
                  <li key={item.label} className={classes}>
                    {content}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
