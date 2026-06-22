"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Demo() {
  return (
    <section id="demo" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
                Ready to model your{" "}
                <span className="gradient-text">business outcomes?</span>
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                See MyOlap in action with a personalized demo. Our team will
                walk you through a live scenario — from a blank Excel sheet to
                fully aggregated, rolled-up analytics.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Live walk-through using an industrial wholesale dealer scenario",
                  "See model creation, dimension building, and data loading",
                  "Experience speed-of-thought analytics and flex-dimensionality",
                  "Generate reports and explore drill-down navigation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <svg
                      className="h-5 w-5 text-accent flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Image
                  src="/images/image (13).png"
                  alt="Business partnership"
                  width={400}
                  height={250}
                  className="rounded-xl shadow-md w-full max-w-sm h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div id="contact" className="relative">
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-8 lg:p-10 shadow-sm">
                <h3 className="text-xl font-bold text-primary-dark mb-6">
                  Book a Demo
                </h3>
                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200"
                    >
                      <option value="">Select your role</option>
                      <option>CFO / VP Finance</option>
                      <option>FP&amp;A Manager</option>
                      <option>Financial Analyst</option>
                      <option>Controller</option>
                      <option>IT / Systems</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 resize-none"
                      placeholder="Tell us about your analytical needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
                  >
                    Request Demo
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
