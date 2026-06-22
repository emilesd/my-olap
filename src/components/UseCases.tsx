"use client";

import Image from "next/image";
import { Building2, Building, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const useCases = [
  {
    icon: Building2,
    tag: "Enterprise",
    title: "Corporate & LOB Analytics",
    description:
      "Corporate Controller distributes models to LOB Controllers. Analysts connect to shared models for enterprise-wide slice-and-dice reporting. Direct Essbase / Oracle EPM server integration lets analysts access MyOlap client on their laptops.",
    image: "/images/image (3).png",
    highlights: [
      "Peer-to-peer model distribution",
      "Essbase / Oracle EPM integration",
      "Centralized governance, distributed analysis",
      "OneDrive / SharePoint model shares & data storage",
    ],
  },
  {
    icon: Building,
    tag: "Mid-size Business",
    title: "Departmental Modeling",
    description:
      "Corporate MyOlap Controller connects to the ERP. Finance analysts use MyOlap on their own devices for departmental reporting, strategic planning, and what-if scenario modeling.",
    image: "/images/image (14).png",
    highlights: [
      "Direct ERP connectivity",
      "OneDrive / SharePoint model sharing",
      "No IT infrastructure dependency",
      "Ad-hoc slice-and-dice analytics",
    ],
  },
  {
    icon: Briefcase,
    tag: "Small Business",
    title: "Solo Analyst Power",
    description:
      "A single MyOlap instance on a laptop or workstation connects directly to the ERP or source system. Direct, lightweight — no infrastructure required. Full personal OLAP at its simplest.",
    image: "/images/image (7).png",
    highlights: [
      "Single-device deployment",
      "Direct source system connection",
      "Full OLAP power, zero complexity",
      "Downloadable .exe — runs with MS Excel",
    ],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
            Built for every strategic{" "}
            <span className="gradient-text">finance workflow.</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Whether you&apos;re a solo analyst or a Fortune 500 finance team,
            MyOlap scales to meet your multi-dimensional modeling needs.
          </p>
        </ScrollReveal>

        <div className="space-y-24">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <ScrollReveal
                direction={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-accent mb-6">
                  <uc.icon size={16} />
                  {uc.tag}
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">
                  {uc.title}
                </h3>
                <p className="mt-4 text-muted leading-relaxed">
                  {uc.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {uc.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal
                direction={i % 2 === 0 ? "right" : "left"}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={uc.image}
                    alt={uc.title}
                    width={600}
                    height={400}
                    className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
