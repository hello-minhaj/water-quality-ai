import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  BarChart3,
  Cpu,
  FileText,
  Globe2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { InfoCard } from "@/components/site/InfoCard";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about-project")({
  head: () => ({
    meta: [
      { title: "About the Project — Water Quality AI" },
      {
        name: "description",
        content:
          "Overview, objectives, problem statement and expected benefits of the Water Quality AI final year machine learning project.",
      },
      { property: "og:title", content: "About the Project — Water Quality AI" },
      {
        property: "og:description",
        content:
          "A final year machine learning project predicting drinking water potability with Random Forest.",
      },
    ],
  }),
  component: AboutProject,
});

function AboutProject() {
  return (
    <>
      <PageHero
        eyebrow="Final Year Project"
        title="About the Project"
        subtitle="A machine learning system that helps users quickly assess water potability from measurable physicochemical parameters."
      />

      <section className="section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-card md:p-12">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground">
              <FileText size={22} />
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Project Overview</h2>
          </div>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Water Quality AI is a web-based intelligent system that predicts whether a water
            sample is safe for drinking. The user enters nine physicochemical measurements —
            pH, hardness, total dissolved solids, chloramines, sulfate, conductivity, organic
            carbon, trihalomethanes and turbidity — and a trained Random Forest classifier
            returns a potability decision within moments.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            This project helps users quickly assess water potability using machine learning,
            without waiting for a full laboratory report. It is designed as a decision-support
            and educational tool that complements, rather than replaces, official testing.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <InfoCard
            icon={Target}
            title="Objectives"
            items={[
              "Build a reliable supervised model for water potability classification",
              "Apply proper preprocessing to handle missing and skewed measurements",
              "Evaluate performance with accuracy, precision, recall, F1 and ROC AUC",
              "Deliver a responsive web interface ready for a FastAPI backend",
              "Present results in a clear, interpretable way for non-technical users",
            ]}
          />
          <InfoCard
            icon={AlertTriangle}
            title="Problem Statement"
            description="Laboratory water testing is accurate but slow, costly and unavailable in many rural and low-resource areas. Communities often consume water of unknown quality because results take days to arrive. There is a need for a fast, low-cost, data-driven screening method that flags potentially unsafe water from routinely measured parameters."
          />
          <InfoCard
            icon={Globe2}
            title="Importance of Water Quality Prediction"
            items={[
              "Early warning for contamination before consumption",
              "Scales screening across many samples at near-zero cost",
              "Supports water authorities in prioritising lab testing",
              "Raises public awareness about drinking water indicators",
            ]}
          />
          <InfoCard
            icon={Sparkles}
            title="Expected Benefits"
            items={[
              "Instant potability feedback from nine simple inputs",
              "Reduced dependence on time-consuming manual analysis",
              "Reusable model that can be retrained on regional datasets",
              "A deployable foundation for IoT sensor integration",
            ]}
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <InfoCard
            icon={Cpu}
            title="Technology Stack"
            description="React front-end with a modern responsive interface, and a Python machine learning pipeline built with scikit-learn, ready to be served through a FastAPI backend."
          />
          <InfoCard
            icon={BarChart3}
            title="Evaluation Approach"
            description="The model is validated on a held-out test split with standard classification metrics so that both false alarms and missed unsafe samples are measured."
          />
          <InfoCard
            icon={Users}
            title="Target Users"
            description="Students, researchers, water treatment staff and community health workers who need a fast preliminary indication of water safety."
          />
        </div>
      </section>
    </>
  );
}
