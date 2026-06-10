"use client";

import React from "react";
import {
  MessageCircle,
  Send,
  Mail,
  FileSpreadsheet,
  Database,
  Workflow,
  Brain,
} from "lucide-react";
import IntegrationCard from "./IntegrationCard";
import ScrollReveal from "./ScrollReveal";

const integrations = [
  {
    icon: MessageCircle,
    name: "واتساب",
    description: "ردود تلقائية",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Send,
    name: "تيليجرام",
    description: "بوت ذكي",
    color: "text-sky-500",
    bgColor: "bg-sky-50",
  },
  {
    icon: Mail,
    name: "إيميل",
    description: "ردود مخصصة",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: FileSpreadsheet,
    name: "Google Sheets",
    description: "تسجيل البيانات",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Database,
    name: "CRM",
    description: "إدارة العملاء",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: Workflow,
    name: "n8n",
    description: "أتمتة متقدمة",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                يشتغل مع أدواتك الحالية
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                لا تحتاج تغيير برامجك. موظف AI يرتبط مباشرة مع الأدوات اللي تستخدمها كل يوم
              </p>
            </div>

            {/* Desktop: Arc layout / Mobile: 2-col grid */}
            <div className="relative">
              {/* Desktop arc wrapper */}
              <div className="hidden md:block">
                <div className="relative max-w-3xl mx-auto">
                  {/* Top row: 3 items */}
                  <div className="flex justify-center gap-6 mb-8">
                    {integrations.slice(0, 3).map((item, i) => (
                      <div key={i} className="w-32">
                        <IntegrationCard {...item} />
                      </div>
                    ))}
                  </div>

                  {/* Center hub */}
                  <div className="flex justify-center items-center gap-8 mb-8">
                    <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700" />
                    <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-brand-500 text-white shadow-lg animate-float">
                      <Brain size={40} />
                    </div>
                    <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700" />
                  </div>

                  {/* Bottom row: 3 items */}
                  <div className="flex justify-center gap-6">
                    {integrations.slice(3, 6).map((item, i) => (
                      <div key={i} className="w-32">
                        <IntegrationCard {...item} />
                      </div>
                    ))}
                  </div>

                  {/* Soft dots for automation feel */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed border-slate-100 dark:border-slate-700 rounded-full pointer-events-none" />
                </div>
              </div>

              {/* Mobile: 2-col grid */}
              <div className="md:hidden grid grid-cols-2 gap-3">
                {integrations.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <IntegrationCard {...item} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
