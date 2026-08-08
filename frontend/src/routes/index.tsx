import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Droplets, Gauge, HeartPulse, ShieldCheck, Waves } from "lucide-react";
import heroWater from "@/assets/hero-water.jpg";
import whyMatters from "@/assets/why-matters.jpg";
import { InfoCard } from "@/components/site/InfoCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Water Quality AI — AI-Powered Drinking Water Prediction" },
      {
        name: "description",
        content:
          "Predict whether water is safe for drinking using internationally recognized water quality parameters.",
      },
      { property: "og:title", content: "Water Quality AI — AI-Powered Water Quality Prediction" },
      {
        property: "og:description",
        content:
          "Machine learning powered assessment of drinking water potability from nine physicochemical parameters.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Gauge,
    title: "Fast Prediction",
    description: "Instant prediction using machine learning.",
  },
  {
    icon: ShieldCheck,
    title: "WHO-Based Parameters",
    description:
      "Prediction is based on important physicochemical water quality indicators.",
  },
  {
    icon: Brain,
    title: "Machine Learning Powered",
    description:
      "Uses supervised machine learning for intelligent water safety assessment.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
              <Waves size={14} /> AI Powered · Machine Learning
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              <span className="block">AI-Powered</span>
              <span className="block">
                <span className="inline-block whitespace-nowrap text-gradient">Water Quality</span>{" "}
                Prediction
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Predict whether water is safe for drinking using Machine Learning and
              internationally recognized water quality parameters.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/prediction"
                className="rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105"
              >
                Predict Water Quality
              </Link>
              <Link
                to="/about-project"
                className="rounded-full border border-primary/25 bg-card/80 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition-colors duration-300 hover:bg-accent"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="glass-card overflow-hidden rounded-[2rem] p-4">
              <img
                src={heroWater}
                alt="Glass of clean drinking water with droplets and laboratory testing"
                width={1024}
                height={1024}
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
            <div className="glass-card absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-8">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
                <Droplets size={18} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">9 Parameters</p>
                <p className="text-sm font-semibold">Potability Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <InfoCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      <section className="section gradient-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-card">
            <img
              src={whyMatters}
              alt="Researchers analysing water samples and quality data charts"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-3xl object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              <HeartPulse size={14} /> Public Health
            </span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Why Water Quality Matters
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Safe drinking water is one of the strongest protections of human health.
              Contaminated water carries pathogens, heavy metals and chemical residues that
              cause diarrhoeal disease, organ damage and long-term illness — especially for
              children and elderly people.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Traditional laboratory testing is accurate but slow and expensive. Continuous
              monitoring of physicochemical indicators such as pH, turbidity, sulfate and
              trihalomethanes makes it possible to detect unsafe water early, before it
              reaches households.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Prevents waterborne disease outbreaks",
                "Supports safe community water supply",
                "Reduces expensive laboratory delays",
                "Enables data-driven decision making",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm shadow-soft"
                >
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
