import { skills } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";
import { SkillIcon } from "./SkillIcon";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & Tools"
          description="The languages, frameworks and tools I use to bring ideas to life."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:border-cyan-400/30"
            >
              <h3 className="mb-5 text-base font-semibold text-slate-100">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    <SkillIcon name={item} className="h-3.5 w-3.5 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
