import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden gradient-hero px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
