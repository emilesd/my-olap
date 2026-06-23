"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Table2, BarChart3, Sparkles } from "lucide-react";

interface Slide {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

const slides: Slide[] = [
  { id: "excel", label: "Excel Add-in", icon: Table2 },
  { id: "dashboard", label: "Dashboards", icon: BarChart3 },
  { id: "ai", label: "AI Prompt", icon: Sparkles },
];

const INTERVAL = 5000;

function ExcelView() {
  const rows = [
    { label: "Revenue", vals: ["4,250", "4,810", "5,120", "5,680", "19,860"], bold: true },
    { label: "  North Region", vals: ["1,820", "2,040", "2,180", "2,410", "8,450"], bold: false },
    { label: "  South Region", vals: ["1,230", "1,370", "1,460", "1,620", "5,680"], bold: false },
    { label: "  West Region", vals: ["1,200", "1,400", "1,480", "1,650", "5,730"], bold: false },
    { label: "COGS", vals: ["(2,550)", "(2,886)", "(3,072)", "(3,408)", "(11,916)"], bold: true },
    { label: "Gross Margin", vals: ["1,700", "1,924", "2,048", "2,272", "7,944"], bold: true, hl: true },
    { label: "Operating Exp", vals: ["(850)", "(920)", "(960)", "(1,020)", "(3,750)"], bold: false },
    { label: "EBITDA", vals: ["850", "1,004", "1,088", "1,252", "4,194"], bold: true, hl: true },
    { label: "  Depreciation", vals: ["(120)", "(120)", "(125)", "(130)", "(495)"], bold: false },
    { label: "  Amortization", vals: ["(45)", "(45)", "(48)", "(50)", "(188)"], bold: false },
    { label: "Net Income", vals: ["685", "839", "915", "1,072", "3,511"], bold: true, hl: true },
    { label: "  Tax (25%)", vals: ["(171)", "(210)", "(229)", "(268)", "(878)"], bold: false },
    { label: "Net After Tax", vals: ["514", "629", "686", "804", "2,633"], bold: true, hl: true },
  ];

  return (
    <div className="flex flex-col h-full bg-[#1a3a1a] font-mono text-[11px]">
      {/* Title bar */}
      <div className="bg-[#217346] px-4 py-2 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-sans text-sm font-semibold text-white/95">MyOlap Add-in</span>
          <span className="text-white/40">|</span>
          <span className="font-sans text-[11px] text-white/60">Sales_Model_Corp.xlsx</span>
        </div>
        <div className="flex gap-3 font-sans text-[11px] text-white/50">
          <span>File</span><span>Home</span><span>Insert</span>
          <span className="text-white/90 font-medium">MyOlap</span>
        </div>
      </div>
      {/* Ribbon */}
      <div className="bg-[#2b5c2b] px-4 py-2 flex items-center gap-2 border-b border-white/10 shrink-0">
        {["Refresh Data", "Slice & Dice", "Drill Down", "Pivot", "Share Model"].map((btn) => (
          <span
            key={btn}
            className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded font-sans text-white/80 text-[10px] transition-colors cursor-default"
          >
            {btn}
          </span>
        ))}
        <span className="ml-auto font-sans text-[10px] text-white/40">Model: Industrial Wholesale — Corp View</span>
      </div>
      {/* Spreadsheet */}
      <div className="flex-1 overflow-hidden bg-white">
        <table className="w-full h-full border-collapse text-slate-700">
          <thead>
            <tr className="bg-slate-50">
              <th className="border-r border-b border-slate-200 px-3 py-1.5 text-left font-semibold text-slate-400 w-[28%]">
                Trading P&L
              </th>
              {["Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026"].map((q) => (
                <th key={q} className="border-r border-b border-slate-200 px-2 py-1.5 text-right font-semibold text-slate-500">
                  {q}
                </th>
              ))}
              <th className="border-b border-slate-200 px-2 py-1.5 text-right font-bold text-blue-700 bg-blue-50/60">
                FY Total
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`${row.hl ? "bg-emerald-50/60" : ""} ${
                  row.bold && !row.hl ? "bg-slate-50/40" : ""
                }`}
              >
                <td
                  className={`border-r border-b border-slate-100 px-3 py-[5px] ${
                    row.bold ? "font-semibold text-slate-800" : "text-slate-500"
                  }`}
                >
                  {row.label}
                </td>
                {row.vals.map((v, j) => (
                  <td
                    key={j}
                    className={`border-r border-b border-slate-100 px-2 py-[5px] text-right tabular-nums ${
                      j === row.vals.length - 1
                        ? "bg-blue-50/40 font-bold text-blue-800 border-r-0"
                        : ""
                    } ${row.bold ? "font-semibold" : ""} ${
                      v.startsWith("(") ? "text-red-600" : ""
                    }`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="relative h-full rounded-lg overflow-hidden">
      <Image
        src="/images/image (10).png"
        alt="MyOlap dashboard with charts and KPIs"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

function AIPromptView() {
  return (
    <div className="flex flex-col h-full bg-slate-900 overflow-hidden">
      <div className="px-5 py-3 border-b border-slate-700/50 flex items-center gap-2 shrink-0">
        <Sparkles size={16} className="text-blue-400" />
        <span className="text-sm font-semibold text-white font-sans">MyOlap AI Assistant</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 ml-1">Beta</span>
      </div>
      <div className="flex-1 p-5 space-y-5 overflow-hidden font-sans">
        {/* User message */}
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-slate-300 font-medium">
            You
          </div>
          <div className="bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 text-[13px] text-slate-200 max-w-[80%] leading-relaxed">
            Show me Q3 revenue by region compared to forecast, and highlight any variances above 5%.
          </div>
        </div>
        {/* AI response */}
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <Sparkles size={14} className="text-white" />
          </div>
          <div className="bg-slate-800/50 rounded-2xl rounded-tl-sm px-4 py-3 text-[13px] text-slate-300 max-w-[88%] space-y-3 leading-relaxed">
            <p>Here&apos;s the Q3 2026 revenue analysis by region:</p>
            <div className="bg-slate-900/80 rounded-lg p-3.5 text-[11px] font-mono space-y-2">
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">North Region</span>
                <span className="text-emerald-400 font-medium">$2,180K vs $2,050K (+6.3%)</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">South Region</span>
                <span className="text-slate-400">$1,460K vs $1,440K (+1.4%)</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">West Region</span>
                <span className="text-emerald-400 font-medium">$1,480K vs $1,380K (+7.2%)</span>
              </div>
            </div>
            <p className="text-blue-300 text-xs">
              North and West regions exceeded forecast by &gt;5%.
              <br />Would you like to drill down into product-level detail?
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-slate-700/50 shrink-0">
        <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-4 py-2.5">
          <span className="flex-1 text-sm text-slate-500 font-sans">Ask about your data...</span>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((i: number) => setActive(i), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <div className="w-full">
      <div className="relative aspect-[16/11] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {active === 0 && <ExcelView />}
            {active === 1 && <DashboardView />}
            {active === 2 && <AIPromptView />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tab indicators + progress */}
      <div className="flex items-center justify-center gap-3 mt-5">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 overflow-hidden"
          >
            {i === active && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/15 rounded-full"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
            <span className={`relative z-10 flex items-center gap-1.5 ${
              i === active ? "text-white" : "text-white/40"
            }`}>
              <slide.icon size={13} />
              {slide.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex gap-1.5 mt-3 px-8">
        {slides.map((_, i) => (
          <div key={i} className="flex-1 h-[2px] rounded-full bg-white/10 overflow-hidden">
            {i === active && (
              <motion.div
                className="h-full bg-blue-400/70 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                key={`p-${active}`}
              />
            )}
            {i < active && <div className="h-full w-full bg-blue-400/30 rounded-full" />}
          </div>
        ))}
      </div>
    </div>
  );
}
