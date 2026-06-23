"use client";

import Image from "next/image";
import { Database, Layers, LineChart, Share2 } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import DataFlowAnimation from "./DataFlowAnimation";

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Connect",
    subtitle: "Your Data Sources",
    description:
      "Stream data from your ERP, Essbase, Oracle EPM, CSV, or XLS — directly into MyOlap models on your device.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Model",
    subtitle: "Your Dimensions",
    description:
      "Build dimensions in minutes. Load from files, add custom hierarchies for what-if scenarios and M&A modeling.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Analyze",
    subtitle: "At Speed of Thought",
    description:
      "Slice, dice, drill down through fully aggregated views. Trading P&L, roll-ups, and ad-hoc reporting — all in Excel.",
  },
  {
    icon: Share2,
    number: "04",
    title: "Share",
    subtitle: "& Collaborate",
    description:
      "Distribute read-only models via OneDrive or SharePoint. Extend with Power BI and AI-driven analytics.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
            From raw ERP data to{" "}
            <span className="gradient-text">strategic insight.</span>
          </h2>
        </ScrollReveal>

        {/* Data flow visualization */}
        <ScrollReveal className="mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-primary-dark to-[#0c1d4d] p-8 lg:p-10">
              <DataFlowAnimation />
            </div>
          </div>
        </ScrollReveal>

        {/* 4-step process */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100" staggerDelay={0.1}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bg-white p-8 h-full group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <step.icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-accent/60 tracking-widest">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary-dark leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-accent/70 mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Visual proof */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/image (10).png"
                alt="Dashboard analytics showing charts and key metrics"
                width={600}
                height={380}
                className="w-full h-[280px] object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/image (11).png"
                alt="Detailed data visualization and reporting view"
                width={600}
                height={380}
                className="w-full h-[280px] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
