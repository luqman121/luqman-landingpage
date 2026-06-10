"use client";

import React from "react";
import { ArrowLeft, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

export default function CTASection() {
  return (
    <section className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cta-light text-cta mb-6">
              <Zap size={32} />
            </div>

            {/* Title */}
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
              ابدأ بموظف AI اليوم
            </h2>

            {/* Subtitle */}
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed text-sm md:text-base">
              استشارة مجانية — نركب لك الموظف الذكي المناسب لبزنسك. نناقش احتياجاتك، نصمم سير العمل، ونبدأ التركيب
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <WhatsAppButton
                text="احجز استشارة مجانية"
                variant="primary"
                size="lg"
              />
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-semibold px-6 py-3.5 rounded-full border-2 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-200 cursor-pointer group"
              >
                شاهد كيف يعمل
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
