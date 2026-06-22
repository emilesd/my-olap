"use client";

import { useState, useEffect } from "react";
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

function ExcelView() {
  return (
    <div className="w-full h-full bg-[#1e3a1e] rounded-lg overflow-hidden font-mono text-[10px] sm:text-xs">
      {/* Excel toolbar */}
      <div className="bg-[#217346] px-3 py-1.5 flex items-center gap-4">
        <span className="text-white/90 font-sans text-xs font-semibold">MyOlap Add-in</span>
        <div className="flex gap-2 text-white/60 font-sans text-[10px]">
          <span>File</span><span>Home</span><span>Insert</span><span>MyOlap</span>
        </div>
      </div>
      {/* Ribbon */}
      <div className="bg-[#2b5c2b] px-3 py-2 flex items-center gap-3 border-b border-white/10">
        <div className="flex gap-2">
          {["Refresh Data", "Slice & Dice", "Drill Down", "Share Model"].map((btn) => (
            <span key={btn} className="px-2 py-1 bg-white/10 rounded text-white/80 text-[9px] sm:text-[10px]">{btn}</span>
          ))}
        </div>
      </div>
      {/* Spreadsheet grid */}
      <div className="bg-white p-0.5">
        <table className="w-full border-collapse text-slate-700">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-2 py-1 text-left font-semibold text-slate-500 w-32"></th>
              <th className="border border-slate-200 px-2 py-1 text-right font-semibold">Q1 2026</th>
              <th className="border border-slate-200 px-2 py-1 text-right font-semibold">Q2 2026</th>
              <th className="border border-slate-200 px-2 py-1 text-right font-semibold">Q3 2026</th>
              <th className="border border-slate-200 px-2 py-1 text-right font-semibold">Q4 2026</th>
              <th className="border border-slate-200 px-2 py-1 text-right font-semibold bg-blue-50 text-blue-700">Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Revenue", vals: ["4,250", "4,810", "5,120", "5,680", "19,860"], bold: true },
              { label: "  North Region", vals: ["1,820", "2,040", "2,180", "2,410", "8,450"], bold: false },
              { label: "  South Region", vals: ["1,230", "1,370", "1,460", "1,620", "5,680"], bold: false },
              { label: "  West Region", vals: ["1,200", "1,400", "1,480", "1,650", "5,730"], bold: false },
              { label: "COGS", vals: ["(2,550)", "(2,886)", "(3,072)", "(3,408)", "(11,916)"], bold: true },
              { label: "Gross Margin", vals: ["1,700", "1,924", "2,048", "2,272", "7,944"], bold: true, highlight: true },
              { label: "Operating Exp", vals: ["(850)", "(920)", "(960)", "(1,020)", "(3,750)"], bold: false },
              { label: "Net Income", vals: ["850", "1,004", "1,088", "1,252", "4,194"], bold: true, highlight: true },
            ].map((row, i) => (
              <tr key={i} className={row.highlight ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                <td className={`border border-slate-200 px-2 py-1 ${row.bold ? "font-semibold" : "text-slate-500"}`}>
                  {row.label}
                </td>
                {row.vals.map((v, j) => (
                  <td
                    key={j}
                    className={`border border-slate-200 px-2 py-1 text-right tabular-nums ${
                      j === row.vals.length - 1 ? "bg-blue-50/50 font-semibold text-blue-800" : ""
                    } ${row.bold ? "font-semibold" : ""} ${v.startsWith("(") ? "text-red-600" : ""}`}
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
    <div className="w-full h-full relative rounded-lg overflow-hidden">
      <Image
        src="/images/image (10).png"
        alt="MyOlap dashboard with charts and KPIs"
        fill
        className="object-cover"
      />
    </div>
  );
}

function AIPromptView() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
        <Sparkles size={16} className="text-blue-400" />
        <span className="text-sm font-semibold text-white">MyOlap AI Assistant</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 ml-1">Beta</span>
      </div>
      {/* Chat */}
      <div className="flex-1 p-4 space-y-4 overflow-hidden">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-slate-300">You</div>
          <div className="bg-slate-800 rounded-xl rounded-tl-none px-4 py-2.5 text-sm text-slate-200 max-w-[80%]">
            Show me Q3 revenue by region compared to forecast, and highlight any variances above 5%.
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
            <Sparkles size={12} className="text-white" />
          </div>
          <div className="bg-slate-800/60 rounded-xl rounded-tl-none px-4 py-2.5 text-sm text-slate-300 max-w-[85%] space-y-2">
            <p>Here&apos;s the Q3 2026 revenue analysis by region:</p>
            <div className="bg-slate-900/80 rounded-lg p-3 text-[11px] font-mono space-y-1">
              <div className="flex justify-between"><span className="text-slate-400">North Region</span><span className="text-green-400">$2,180K vs $2,050K (+6.3%)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">South Region</span><span className="text-slate-300">$1,460K vs $1,440K (+1.4%)</span></div>
              <div className="flex justify-between"><span className="text-slate-400">West Region</span><span className="text-green-400">$1,480K vs $1,380K (+7.2%)</span></div>
            </div>
            <p className="text-blue-300 text-xs">North and West regions exceeded forecast by &gt;5%. Drill down?</p>
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="px-4 py-3 border-t border-slate-700/50">
        <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2">
          <span className="flex-1 text-sm text-slate-500">Ask about your data...</span>
          <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Slide content */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            {active === 0 && <ExcelView />}
            {active === 1 && <DashboardView />}
            {active === 2 && <AIPromptView />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="flex items-center justify-center gap-3 mt-5">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setActive(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              i === active
                ? "bg-white/20 text-white"
                : "bg-white/5 text-white/40 hover:text-white/60 hover:bg-white/10"
            }`}
          >
            <slide.icon size={13} />
            {slide.label}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="flex gap-2 mt-3 px-4">
        {slides.map((_, i) => (
          <div key={i} className="flex-1 h-0.5 rounded-full bg-white/10 overflow-hidden">
            {i === active && (
              <motion.div
                className="h-full bg-blue-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={`progress-${active}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
