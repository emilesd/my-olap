"use client";

import { StaggerContainer, StaggerItem } from "./ScrollReveal";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "10x", label: "Faster than traditional OLAP setup" },
  { value: "Zero", label: "Cloud infrastructure required" },
  { value: "100%", label: "Data stays on your device" },
  { value: "Excel", label: "Native Add-in experience" },
];

export default function TrustBar() {
  return (
    <section className="relative bg-white py-16 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal direction="none">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-10">
            Trusted by finance teams for strategic decision-making
          </p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.12}>
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-primary-dark">
                  {stat.value}
                </div>
                <div className="mx-auto mt-3 h-0.5 w-8 bg-accent/30 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
                <p className="mt-3 text-sm text-muted">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
