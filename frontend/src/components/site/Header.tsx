import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-project", label: "About Project" },
  
  { to: "/prediction", label: "Prediction" },
  { to: "/who-guidelines", label: "WHO Guidelines" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-primary text-lg shadow-soft">
            💧
          </span>
          <span className="truncate font-display text-lg font-bold tracking-tight">
            Water Quality <span className="text-gradient">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {l.label}
              <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 rounded-full gradient-primary transition-transform duration-300 [[data-status=active]>&]:scale-x-100" />
            </Link>
          ))}
          <Link
            to="/prediction"
            className="ml-2 rounded-full gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105"
          >
            Try Prediction
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="animate-rise border-t border-border bg-card px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
