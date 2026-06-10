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
      <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 rounded-full shadow-lg px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white text-sm font-bold">
            H
          </span>
          Hermes AI
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#how-it-works"
            className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 px-3 py-2"
          >
            شاهد كيف يعمل
          </a>
          <WhatsAppButton
            text="احجز استشارة مجانية"
            variant="primary"
            size="sm"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-lg p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-700 space-y-3">
            <ThemeToggle />
            <a
              href="#how-it-works"
              className="block text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              شاهد كيف يعمل
            </a>
            <WhatsAppButton
              text="احجز استشارة مجانية"
              variant="primary"
              size="sm"
              className="w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
