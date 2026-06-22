"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CubeLogo from "./CubeLogo";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <CubeLogo size={64} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Cube the Power of Your Spreadsheet.
          </h2>
          <p className="mt-6 text-lg text-blue-200/70 leading-relaxed max-w-2xl mx-auto">
            Join finance teams who have transformed their analytical
            capabilities with MyOlap. Start modeling smarter today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary-dark shadow-lg transition-all duration-200 hover:shadow-xl hover:bg-blue-50"
            >
              Request a Demo
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              View Pricing
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
