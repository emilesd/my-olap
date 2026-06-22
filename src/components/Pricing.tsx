"use client";

import { Check } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const plans = [
  {
    name: "Professional",
    price: "$59",
    period: "/user/month",
    description:
      "For individual analysts and small teams who need personal OLAP modeling power.",
    features: [
      "Personal OLAP model instances",
      "MS Excel Add-in interface",
      "Multi-dimensional modeling",
      "Slice & dice analytics",
      "CSV / XLS data import",
      "OneDrive model sharing",
      "Automatic software updates",
      "Standard support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For organizations needing enterprise-wide deployment, advanced integrations, and dedicated support.",
    features: [
      "Everything in Professional",
      "Enterprise-wide licensing",
      "ERP & Essbase / Oracle EPM integration",
      "Peer-to-peer model distribution",
      "Power BI integration",
      "Advanced security & governance",
      "Priority onboarding & training",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 hero-gradient relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-lg text-blue-200/70 leading-relaxed">
            Per-user or enterprise-wide licensing to fit organizations of any
            size. No hidden fees, no surprises.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          staggerDelay={0.15}
        >
          {plans.map((plan, i) => (
            <StaggerItem key={i}>
              <div
                className={`relative rounded-2xl p-8 lg:p-10 transition-all duration-300 h-full ${
                  plan.highlighted
                    ? "bg-white shadow-2xl ring-2 ring-accent hover:shadow-3xl"
                    : "bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3
                  className={`text-xl font-bold ${
                    plan.highlighted ? "text-primary-dark" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      plan.highlighted ? "text-primary-dark" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-muted" : "text-blue-200/70"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    plan.highlighted ? "text-muted" : "text-blue-200/70"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-accent" : "text-blue-300"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted
                            ? "text-slate-700"
                            : "text-blue-100/90"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-accent text-white shadow-sm hover:bg-blue-700 hover:shadow-md"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
