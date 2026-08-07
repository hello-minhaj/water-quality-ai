import type { LucideIcon } from "lucide-react";

export function InfoCard({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  items?: string[];
}) {
  return (
    <article className="lift rounded-3xl border border-border bg-card p-7 shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
      {items && (
        <ul className="mt-4 space-y-2">
          {items.map((it) => (
            <li key={it} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
