"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.06),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — message only */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest text-blue-300/70 mb-6"
            >
              Enterprise OLAP Analytics
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight"
            >
              Cube the Power
              <br />
              of Your Spreadsheet.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg text-blue-100/70 leading-relaxed"
            >
              Personal multi-dimensional OLAP modeling delivered directly inside
              Excel. No infrastructure, no IT dependency — just install and
              start analyzing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-lg transition-all duration-200 hover:shadow-xl hover:bg-blue-50"
              >
                Request a Demo
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                <Play size={16} />
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* Right — product screenshot only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <HeroSlideshow />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
