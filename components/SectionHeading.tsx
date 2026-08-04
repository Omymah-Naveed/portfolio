type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
      <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
    </div>
  );
}
