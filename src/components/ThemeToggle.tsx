"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggle, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse"
        aria-hidden="true"
      />
    );
  }

  const sunClasses = `absolute transition-all duration-500 ease-out ${
    isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
  } text-amber-500 group-hover:text-amber-400`;

  const moonClasses = `absolute transition-all duration-500 ease-out ${
    isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
  } text-sky-300 group-hover:text-sky-200`;

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 overflow-hidden group"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <Sun size={20} className={sunClasses} />
      <Moon size={18} className={moonClasses} />
    </button>
  );
}