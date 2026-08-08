import { Link } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1fr_280px]">
        
        {/* Project Information */}
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
              💧
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground">
              Water Quality AI
            </h2>
          </div>

          <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
            A machine learning system that predicts drinking water potability
            from physicochemical parameters.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Explore
          </h3>

          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about-project", label: "About Project" },
              { to: "/prediction", label: "Prediction" },
              { to: "/who-guidelines", label: "WHO Guidelines" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">
            <a
              href="https://github.com/hello-minhaj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-primary transition-colors hover:bg-accent"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/hellominhaj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-primary transition-colors hover:bg-accent"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-xs text-muted-foreground">
          © 2026 Water Quality AI · Developed by{" "}
          <a
            href="https://www.linkedin.com/in/hellominhaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary transition-colors hover:underline"
          >
            Md Minhajul Islam
          </a>
        </div>
      </div>
    </footer>
  );
}