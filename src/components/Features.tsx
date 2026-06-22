"use client";

import {
  LayoutGrid,
  Zap,
  Shield,
  BarChart3,
  Server,
  Table2,
} from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const features = [
  {
    icon: LayoutGrid,
    title: "Multi-Dimensional Modeling",
    description:
      "Create personal OLAP models with flexible, unrestricted dimensions tailored to your specific business needs. Multiple models on a single device.",
  },
  {
    icon: Zap,
    title: "Slice-and-Dice Analytics",
    description:
      "Speed-of-thought analytics with fast, responsive OLAP model instances for ad-hoc analysis and exploration at any level of detail.",
  },
  {
    icon: Server,
    title: "ERP Integration",
    description:
      "Connect directly to your ERP, Oracle Essbase, or EPM. Load data from CSV, XLS, or direct connectors into one unified model.",
  },
  {
    icon: Table2,
    title: "Native Excel Experience",
    description:
      "Delivered through a familiar MS Excel Add-in. Full model functionality including slice, dice, drill-down, and reporting — no learning curve.",
  },
  {
    icon: BarChart3,
    title: "Enterprise-Wide Reporting",
    description:
      "Corporate and departmental reporting with full aggregation engine, roll-ups, and Power BI integration for extended visualization.",
  },
  {
    icon: Shield,
    title: "Serverless & Secure",
    description:
      "Client-based architecture with device-tied data security and password-protected admin access. No on-prem or cloud infrastructure dependency.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Platform Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
            Strategic modeling power,{" "}
            <span className="gradient-text">enterprise-wide.</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Everything finance teams need for agile, modern data analysis — from
            personal OLAP cubes to enterprise-wide reporting and consolidation.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <div className="group relative rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-md">
                  <feature.icon size={24} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-primary-dark">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
