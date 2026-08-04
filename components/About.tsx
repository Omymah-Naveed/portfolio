import { profile } from "@/data/resume";
import { CodeIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  "Full-stack development with the MERN stack",
  "Clean, scalable REST API architecture",
  "Creative design with Photoshop & Illustrator",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Who I am"
          description="A quick look at who I am and what drives me."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-slate-400">
            <p>{profile.summary}</p>
            <p>
              I enjoy owning features end-to-end — from crafting a responsive
              interface to designing the API that powers it. My background
              blends strong engineering fundamentals with a sharp creative eye,
              so I care as much about how something looks as how it performs.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <CodeIcon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-100">
                What I focus on
              </h3>
            </div>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
