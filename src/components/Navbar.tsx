"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "المنتج", href: "#product" },
    { label: "المميزات", href: "#features" },
    { label: "كيف يعمل", href: "#how-it-works" },
    { label: "الأسئلة", href: "#faq" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-4xl">
      <div className="backdrop-blur-xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/60 dark:border-slate-700/60 rounded-full shadow-lg px-4 py-3 flex items-center justify-between transition-colors duration-500">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white transition-colors duration-500">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
            H
          </span>
          <span className="hidden sm:inline">Hermes AI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200 font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-400 rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#how-it-works"
            className="text-sm text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200 font-medium px-3 py-2"
          >
            شاهد كيف يعمل
          </a>
          <ThemeToggle />
          <WhatsAppButton
            text="احجز مجاناً 🚀"
            variant="primary"
            size="sm"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/60 dark:border-slate-700/60 rounded-3xl shadow-xl p-5 space-y-4 transition-colors duration-500">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 py-2 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-700 space-y-3">
            <a
              href="#how-it-works"
              className="block text-sm text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 py-2 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              شاهد كيف يعمل
            </a>
            <ThemeToggle />
            <WhatsAppButton
              text="احجز استشارة مجانية 🚀"
              variant="primary"
              size="sm"
              className="w-full justify-center"
            />
          </div>
        </div>
      )}
    </nav>
  );
}