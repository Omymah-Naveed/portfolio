import Image from "next/image";

type Props = {
  title: string;
  size?: "card" | "hero";
};

export function LogoCover({ title, size = "card" }: Props) {
  const isHero = size === "hero";

  return (
    <div
      className={`relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden ${
        isHero
          ? "gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60"
          : "gap-3 border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <Image
        src="/MyLogo.png"
        alt={`${title} logo`}
        width={isHero ? 176 : 112}
        height={isHero ? 100 : 64}
        className={`w-auto object-contain ${isHero ? "h-24" : "h-16"}`}
      />
      <span className="text-sm font-semibold tracking-wide text-slate-300">
        {title}
      </span>
    </div>
  );
}
