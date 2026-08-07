import { Link } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-primary text-lg">
              💧
            </span>
            <span className="font-display text-lg font-bold">Water Quality AI</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A machine learning system that predicts drinking water potability from
            physicochemical parameters.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Developer Information
          </h3>
          <p className="mt-4 font-display text-base font-semibold">Md Minhajul Islam</p>
          <p className="text-sm text-muted-foreground">
            Department of Computer Science and Engineering
          </p>
          <p className="text-sm text-muted-foreground">Daffodil International University</p>
          <div className="mt-4 flex gap-3">
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
        </div>
      </div>

      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        © Copyright{" "}
        <a
          href="https://www.linkedin.com/in/hellominhaj/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary transition-colors hover:underline"
        >
          Md Minhajul Islam
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
}
