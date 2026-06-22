"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import CubeLogo from "./CubeLogo";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group">
            <span
              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              My
            </span>
            <CubeLogo size={36} className="transition-transform duration-300 group-hover:scale-110" />
            <span
              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              lap
            </span>
            <span className="text-accent text-2xl font-bold">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-slate-600 hover:text-primary-dark"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#demo"
              className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 ${
                scrolled
                  ? "bg-accent text-white hover:bg-blue-700 hover:shadow-md"
                  : "bg-white text-primary-dark hover:bg-blue-50 hover:shadow-md"
              }`}
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-slate-700 hover:text-accent py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
