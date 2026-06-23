"use client";

import Image from "next/image";
import { Database, Layers, LineChart, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import DataFlowAnimation from "./DataFlowAnimation";

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Connect Your Data Sources",
    description:
      "Stream data from your ERP, Essbase, Oracle EPM, CSV, XLS, or any source system directly into MyOlap models.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Build Your Dimensions",
    description:
      "Load from XLS or CSV files with dimension info. Add custom dimensions for strategic modeling, what-if scenarios, and M&A modeling.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Analyze & Report",
    description:
      "Slice, dice, drill down, and explore with speed-of-thought analytics. Trading P&L, roll-ups, and fully aggregated views — all in Excel.",
  },
  {
    icon: FileSpreadsheet,
    number: "04",
    title: "Share & Collaborate",
    description:
      "Share read-only models via OneDrive or SharePoint. Extend analysis with Power BI for enterprise-wide visibility and collaboration.",
  },
];

function ProgressLine() {
  return (
    <motion.div
      className="absolute left-6 top-14 bottom-2 w-px origin-top"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
    >
      <div className="h-full w-full bg-gradient-to-b from-accent via-accent/40 to-transparent" />
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Data flow visualization */}
        <ScrollReveal className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
              From raw ERP data to{" "}
              <span className="gradient-text">strategic insight.</span>
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              MyOlap transforms complex data into actionable intelligence — all
              within your familiar Excel environment.
            </p>
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl bg-primary-dark/95 p-8 shadow-lg">
            <DataFlowAnimation />
          </div>
        </ScrollReveal>

        {/* Steps + images */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <ProgressLine />

              <StaggerContainer className="space-y-8" staggerDelay={0.15}>
                {steps.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="flex gap-5 group relative">
                      <div className="flex-shrink-0 relative z-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-md group-hover:border-transparent">
                          <step.icon size={22} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold text-accent tracking-wider">
                            STEP {step.number}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-primary-dark">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/image (10).png"
                  alt="Analytics dashboard showing charts and KPIs"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-72 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/image (11).png"
                  alt="Detailed analytics view with data visualization"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
