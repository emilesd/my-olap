"use client";

import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-dark">
                  <CountUp value={stat.value} />
                </div>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
