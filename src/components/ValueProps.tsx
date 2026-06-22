"use client";

import Image from "next/image";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const props = [
  {
    num: "01",
    title: "Spin-Up Data Models",
    description: "Receiving data from multiple sources — instantly.",
  },
  {
    num: "02",
    title: "Native Excel Interface",
    description: "Full model functionality in the tool you already know.",
  },
  {
    num: "03",
    title: "Corporate & Departmental",
    description: "Reporting with ad-hoc slice-and-dice analytics.",
  },
  {
    num: "04",
    title: "Consolidate & Extend",
    description: "Analyze from Excel, extend with Power BI dashboards.",
  },
  {
    num: "05",
    title: "No IT Dependency",
    description: "Multiple models, flexible, unrestricted dimensions.",
  },
  {
    num: "06",
    title: "What-Was / Is / If",
    description: "Historical, stress-test, strategic modeling & M&A scenarios.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/image (6).png"
                  alt="Finance professionals using MyOlap for analytics"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-5 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-dark text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">
                      Zero Setup
                    </p>
                    <p className="text-xs text-muted">
                      Download and start modeling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Value Proposition
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
                Personal multi-dimensional modeling{" "}
                <span className="gradient-text">right on your laptop.</span>
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Model your business, stream your data, slice, dice, analyze, and
                report at scale and speed through an Excel Add-in interface.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid sm:grid-cols-2 gap-6" staggerDelay={0.08}>
              {props.map((prop) => (
                <StaggerItem key={prop.num}>
                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                        <span className="text-xs font-bold">{prop.num}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-dark">
                        {prop.title}
                      </h4>
                      <p className="mt-0.5 text-sm text-muted">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
