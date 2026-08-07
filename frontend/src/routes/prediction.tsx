import { createFileRoute } from "@tanstack/react-router";
import { Activity, CheckCircle2, Droplet, Loader2, ShieldAlert, Waves } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/prediction")({
  head: () => ({
    meta: [
      { title: "Water Quality Prediction — Check Drinking Water Safety" },
      {
        name: "description",
        content:
          "Enter nine water quality parameters and get an instant machine learning prediction of drinking water potability.",
      },
      { property: "og:title", content: "Water Quality Prediction — Water Quality AI" },
      {
        property: "og:description",
        content:
          "Instant Random Forest based prediction of whether a water sample is safe for drinking.",
      },
    ],
  }),
  component: Prediction,
});

type FieldKey =
  | "ph"
  | "hardness"
  | "solids"
  | "chloramines"
  | "sulfate"
  | "conductivity"
  | "organicCarbon"
  | "trihalomethanes"
  | "turbidity";

const fields: { key: FieldKey; label: string; unit: string; helper: string }[] = [
  { key: "ph", label: "pH", unit: "0 – 14", helper: "Acidity or alkalinity of the water sample." },
  { key: "hardness", label: "Hardness", unit: "mg/L", helper: "Dissolved calcium and magnesium content." },
  { key: "solids", label: "Total Dissolved Solids", unit: "ppm", helper: "Total minerals dissolved in the water." },
  { key: "chloramines", label: "Chloramines", unit: "ppm", helper: "Disinfectant residual left after treatment." },
  { key: "sulfate", label: "Sulfate", unit: "mg/L", helper: "Naturally occurring sulfate salt concentration." },
  { key: "conductivity", label: "Conductivity", unit: "μS/cm", helper: "Electrical conductivity from dissolved ions." },
  { key: "organicCarbon", label: "Organic Carbon", unit: "ppm", helper: "Total organic carbon from decaying matter." },
  { key: "trihalomethanes", label: "Trihalomethanes", unit: "μg/L", helper: "By-products formed during chlorination." },
  { key: "turbidity", label: "Turbidity", unit: "NTU", helper: "Cloudiness caused by suspended particles." },
];

const sample: Record<FieldKey, string> = {
  ph: "7.2",
  hardness: "204",
  solids: "20791",
  chloramines: "7.3",
  sulfate: "368",
  conductivity: "564",
  organicCarbon: "10.4",
  trihalomethanes: "86.9",
  turbidity: "2.96",
};

const empty: Record<FieldKey, string> = fields.reduce(
  (acc, f) => ({ ...acc, [f.key]: "" }),
  {} as Record<FieldKey, string>,
);

type Result = {
  safe: boolean;
  confidence: number;
  phStatus: string;
  turbidityStatus: string;
  whoRecommendation: string;
  overall: string;
};

function Prediction() {
  const [values, setValues] = useState<Record<FieldKey, string>>(empty);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const set = (key: FieldKey, v: string) => setValues((p) => ({ ...p, [key]: v }));

  // Dummy logic — a FastAPI backend will replace this later.
const predict = async () => {
  setLoading(true);
  setResult(null);

  try {
    const response = await fetch("https://water-quality-ai-hj6y.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ph: Number(values.ph),
        Hardness: Number(values.hardness),
        Solids: Number(values.solids),
        Chloramines: Number(values.chloramines),
        Sulfate: Number(values.sulfate),
        Conductivity: Number(values.conductivity),
        Organic_carbon: Number(values.organicCarbon),
        Trihalomethanes: Number(values.trihalomethanes),
        Turbidity: Number(values.turbidity),
      }),
    });

    const data = await response.json();

    const safe = data.prediction === "Drinkable";

    setResult({
      safe,
      confidence: 100,
      phStatus:
        Number(values.ph) >= 6.5 && Number(values.ph) <= 8.5
          ? "Within WHO range"
          : "Outside WHO range",

      turbidityStatus:
        Number(values.turbidity) <= 5
          ? "Acceptable"
          : "High",

      whoRecommendation:
        safe
          ? "Suitable for drinking."
          : "Water treatment is recommended before drinking.",

      overall:
        safe
          ? "Good"
          : "Poor",
    });
  } catch (error) {
    alert("Backend connection failed.");
    console.error(error);
  }

  setLoading(false);
};

  return (
    <>
      <PageHero
        eyebrow="Prediction Engine"
        title="Water Quality Prediction"
        subtitle="Enter the measured parameters of your water sample and the model will assess its potability."
      />

      <section className="section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div className="min-w-0">
                <h2 className="truncate text-xl font-extrabold">Water Parameters</h2>
                <p className="text-sm text-muted-foreground">
                  All nine physicochemical inputs
                </p>
              </div>
              <button
                type="button"
                onClick={() => setValues(sample)}
                className="shrink-0 rounded-full border border-primary/25 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-accent"
              >
                Load sample
              </button>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.key}>
                  <label
                    htmlFor={f.key}
                    className="flex items-center justify-between text-sm font-semibold"
                  >
                    {f.label}
                    <span className="text-xs font-medium text-muted-foreground">{f.unit}</span>
                  </label>
                  <input
                    id={f.key}
                    type="number"
                    step="any"
                    inputMode="decimal"
                    placeholder="Enter value"
                    value={values[f.key]}
                    onChange={(e) => set(f.key, e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {f.helper}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={predict}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105 disabled:opacity-70"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Waves size={16} />}
                {loading ? "Analysing..." : "Predict"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setValues(empty);
                  setResult(null);
                }}
                className="rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div
              className={`rounded-[2rem] border p-8 text-center shadow-card transition-all duration-500 ${
                result
                  ? result.safe
                    ? "border-success/30 bg-success/10"
                    : "border-destructive/30 bg-destructive/10"
                  : "border-border bg-card"
              }`}
            >
              <span
                className={`mx-auto grid h-16 w-16 place-items-center rounded-3xl text-primary-foreground ${
                  result
                    ? result.safe
                      ? "bg-success"
                      : "bg-destructive"
                    : "gradient-primary animate-float"
                }`}
              >
                {result ? (
                  result.safe ? (
                    <CheckCircle2 size={28} />
                  ) : (
                    <ShieldAlert size={28} />
                  )
                ) : (
                  <Droplet size={28} />
                )}
              </span>
              <h2
                className={`mt-5 text-2xl font-extrabold ${
                  result ? (result.safe ? "text-success" : "text-destructive") : ""
                }`}
              >
                {result
                  ? result.safe
                    ? "Safe for Drinking"
                    : "Not Safe for Drinking"
                  : "Waiting for Prediction"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {result
                  ? `Model confidence ${result.confidence}% · Random Forest classifier`
                  : "Fill in the water parameters and press Predict to see the model result."}
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-primary" />
                <h3 className="text-lg font-bold">Analysis</h3>
              </div>
              <dl className="mt-5 space-y-4">
                {[
                  { label: "pH Status", value: result?.phStatus },
                  { label: "Turbidity Status", value: result?.turbidityStatus },
                  { label: "WHO Recommendation", value: result?.whoRecommendation },
                  { label: "Overall Water Quality", value: result?.overall },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl border border-border bg-secondary/40 px-4 py-3"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">
                      {row.value ?? "Awaiting prediction"}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Results are generated with sample logic for demonstration. The trained model
                API will be connected later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
