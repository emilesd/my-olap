"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import CubeLogo from "./CubeLogo";
import HeroSlideshow from "./HeroSlideshow";
import DataFlowAnimation from "./DataFlowAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-200 mb-8 border border-white/10"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Enterprise OLAP Analytics Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Cube the Power
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                of Your Spreadsheet.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg lg:text-xl text-blue-100/80 leading-relaxed max-w-xl"
            >
              Your personal OLAP cube. Analyze your data, your way — model your
              business, stream your data, slice, dice, analyze, and report at
              scale through a familiar Excel Add-in interface.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
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
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
              >
                <Play size={16} />
                See How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-blue-200/70"
            >
              {[
                "No infrastructure required",
                "Excel-native experience",
                "Enterprise-grade security",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-blue-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - slideshow + data flow */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            {/* Floating card - top right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute -top-4 -right-4 z-10 glass-card rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <CubeLogo size={36} />
                <div>
                  <p className="text-xs text-slate-500">Multi-Dimensional</p>
                  <p className="text-sm font-semibold text-slate-900">
                    OLAP Modeling
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Slideshow */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <div className="relative">
                <HeroSlideshow />
              </div>
            </div>

            {/* Data flow animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4"
            >
              <DataFlowAnimation />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
