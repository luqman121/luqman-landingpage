"use client";

import React from "react";
import { Brain } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const solutionPoints = [
  "يرد على العملاء تلقائياً في واتساب وتيليجرام وإيميل",
  "يجمع الليدز ويرتبها في أدواتك الحالية",
  "يرتبط مع الأدوات اللي تستخدمها وينفذ سير عمل مخصص",
  "يذكرك بمتابعة العملاء وإرسال العروض",
  "يشتغل 24 ساعة بدون تعب أو إجازات",
];

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Left: Icon + Title */}
            <ScrollReveal>
              <div className="text-center lg:text-right">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 mb-6">
                  <Brain size={32} />
                </div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
                  موظف AI يصير جزء من فريقك
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  نركب لك موظف AI خصيصاً لبزنسك. يتعلم طريقة عملك، يرد بلهجتك، ويشتغل مع أدواتك الحالية
                </p>
                <WhatsAppButton
                  text="احجز استشارة مجانية"
                  variant="primary"
                  size="md"
                />
              </div>
            </ScrollReveal>

            {/* Right: Points List */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-3 md:space-y-4">
                {solutionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 md:p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
