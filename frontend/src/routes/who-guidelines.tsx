import { createFileRoute } from "@tanstack/react-router";
import { Info, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/who-guidelines")({
  head: () => ({
    meta: [
      { title: "WHO Guidelines — Drinking Water Parameter Values" },
      {
        name: "description",
        content:
          "Reference table of recommended drinking water values for pH, hardness, TDS, chloramines, sulfate, conductivity, organic carbon, trihalomethanes and turbidity.",
      },
      { property: "og:title", content: "WHO Guidelines — Water Quality AI" },
      {
        property: "og:description",
        content:
          "Internationally recognized drinking water guideline values used by the prediction model.",
      },
    ],
  }),
  component: Guidelines,
});

const rows = [
  {
    parameter: "pH",
    value: "6.5 – 8.5",
    description:
      "Acidity or alkalinity of water. Extreme values corrode pipes and affect disinfection.",
  },
  {
    parameter: "Hardness",
    value: "≤ 300 mg/L",
    description:
      "Dissolved calcium and magnesium salts. High hardness causes scaling and poor taste.",
  },
  {
    parameter: "Total Dissolved Solids (TDS)",
    value: "≤ 1000 mg/L",
    description:
      "Total mineral content. Very high TDS makes water unpalatable and may indicate contamination.",
  },
  {
    parameter: "Chloramines",
    value: "≤ 4 mg/L",
    description:
      "Disinfectant residual. Necessary for safety but harmful to health at excessive levels.",
  },
  {
    parameter: "Sulfate",
    value: "≤ 250 mg/L",
    description:
      "Naturally occurring salt. Elevated sulfate causes taste issues and gastrointestinal effects.",
  },
  {
    parameter: "Conductivity",
    value: "≤ 400 μS/cm",
    description:
      "Ability to conduct electric current, reflecting the concentration of dissolved ions.",
  },
  {
    parameter: "Organic Carbon",
    value: "≤ 4 mg/L",
    description:
      "Total organic carbon from decaying matter. Reacts with disinfectants to form by-products.",
  },
  {
    parameter: "Trihalomethanes (THMs)",
    value: "≤ 80 μg/L",
    description:
      "Chlorination by-products. Long-term exposure at high levels poses health risks.",
  },
  {
    parameter: "Turbidity",
    value: "≤ 5 NTU",
    description:
      "Cloudiness from suspended particles. High turbidity shields microorganisms from disinfection.",
  },
];

function Guidelines() {
  return (
    <>
      <PageHero
        eyebrow="Reference Standards"
        title="WHO Guidelines"
        subtitle="Recommended values for the nine physicochemical parameters used by the water potability prediction model."
      />

      <section className="section mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="gradient-primary text-primary-foreground">
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">
                    Parameter
                  </th>
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">
                    Recommended Value
                  </th>
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.parameter}
                    className={`border-t border-border transition-colors hover:bg-accent/50 ${
                      i % 2 === 1 ? "bg-secondary/40" : ""
                    }`}
                  >
                    <td className="px-6 py-5 text-sm font-semibold">{r.parameter}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                        {r.value}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-primary/25 bg-accent/60 p-6 sm:flex-row">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground">
            <Info size={20} />
          </span>
          <div>
            <h2 className="text-base font-bold">Important Information</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              These guideline values are based on internationally recognized drinking water
              recommendations and should be used only for educational purposes.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
          <ShieldCheck size={16} className="shrink-0 text-primary" />
          Always confirm water safety with an accredited laboratory before consumption.
        </div>
      </section>
    </>
  );
}
