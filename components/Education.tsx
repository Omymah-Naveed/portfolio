import { education } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Education & Training"
          description="The academic foundation behind my engineering practice."
        />

        <div className="mx-auto max-w-3xl space-y-0">
          {education.map((item, index) => (
            <div key={item.school} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                  <span className="h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950" />
                </span>
                {index < education.length - 1 ? (
                  <span className="mt-1 w-px flex-1 bg-slate-800" />
                ) : null}
              </div>
              <div
                className={`pb-10 ${
                  index === education.length - 1 ? "pb-0" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-100">
                  {item.degree}
                </h3>
                <p className="mt-0.5 text-sm text-slate-400">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
